import { Component, OnInit } from '@angular/core';
import { Quote } from '../../_models/qoute';
import { GetQuoteService } from '../../_services/getQuote.service';
import { ColorizeSerivice } from '../../_services/colorize.service';

@Component({
  selector: 'app-random-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QouteBoxComponent implements OnInit {
  private randomQuote: Quote;

  constructor(private getQuoteServ: GetQuoteService) {}

  ngOnInit() {
    this.getQuoteServ.obsQuotes.subscribe(
      data => {
        // console.log(data);
        this.randomQuote = data;
      },
      error => {
        console.log('Error: ' + error);
      }
    );
  }
}
