import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../../_models/qoute';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { ColorizeSerivice } from 'src/app/random-quote/_services/colorize.service';

@Component({
  selector: 'app-random-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  @Input() randomQuote: Quote;
  private quoteIcon = faQuoteLeft;
  private color = 'black';

  constructor(private colorServ: ColorizeSerivice) { }

  ngOnInit() {
    this.colorServ.obsColor.subscribe(
      color => this.color = color
    );
  }
}
