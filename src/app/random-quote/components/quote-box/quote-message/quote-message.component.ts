import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../../_models/qoute';

@Component({
  selector: 'app-random-quote-message',
  templateUrl: './quote-message.component.html',
  styleUrls: ['./quote-message.component.css']
})
export class QuoteMessageComponent implements OnInit {
  @Input() randomQuote: Quote;
  private quoteIcon;
  constructor() { }

  ngOnInit() {
  }
}
