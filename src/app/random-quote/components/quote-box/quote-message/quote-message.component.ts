import { Component, OnInit } from '@angular/core';
import { Quote } from '../../../_models/qoute';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { ColorizeSerivice } from 'src/app/random-quote/_services/colorize.service';
import { GetQuoteService } from 'src/app/random-quote/_services/getQuote.service';

@Component({
  selector: 'app-random-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  private randomQuote: Quote;
  private quoteIcon = faQuoteLeft;
  private color = 'black';

  constructor(private colorServ: ColorizeSerivice, private quotServ: GetQuoteService) { }

  ngOnInit() {
    this.colorServ.obsColor.subscribe(
      color => this.color = color
    );
    this.quotServ.obsQuotes.subscribe(
      data => this.randomQuote = data
    );
  }
}
