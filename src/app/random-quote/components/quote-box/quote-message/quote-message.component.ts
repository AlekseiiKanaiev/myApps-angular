import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../_models/qoute';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { ColorizeSerivice } from 'src/app/random-quote/_services/colorize.service';
import { GetQuoteService } from 'src/app/random-quote/_services/getQuote.service';
import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-random-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css'],
  animations: [
    trigger('fadeOut', [
      state('show', style({height: '*'})),
      state('hide', style({opacity: 0, visibility: 'hidden'})),
      transition('hide<=>show', [animate('1.5s ease-in')]),
    ])
  ]
})
export class QuoteMessageComponent implements OnInit {
  private randomQuote: Quote;
  private quoteIcon = faQuoteLeft;
  private color = 'black';
  private showMessageState = 'hide';

  constructor(private colorServ: ColorizeSerivice, private quotServ: GetQuoteService) { }

  ngOnInit() {
    this.colorServ.obsColor.subscribe(
      color => {
        this.color = color;
      }
    );
    this.quotServ.obsQuotes.subscribe(
      data => {
        if (this.randomQuote) {
          this.showMessageState = 'hide';
          setTimeout(() => {
            this.showMessageState = 'show';
            this.randomQuote = data;
          }, 1500);
        } else {
          this.showMessageState = 'show';
          this.randomQuote = data;
        }
      }
    );
    // this.showMessageState = 'show';
  }
}
