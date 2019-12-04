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
  private quotes: Quote[];
  // private twit: Quote;
  // private thumb: Quote;

  constructor(private getQuoteServ: GetQuoteService, private colorServ: ColorizeSerivice) { }

  ngOnInit() {
    this.getQuoteServ.getQuotes().subscribe(
      data => {
        // console.log(data);
        this.quotes = data;
        this.getRandomQuote();
      },
      error => {
        console.log('Error: ' + error);
        this.getQuoteServ.getQuotesPromise()
          .then(
            result => {
                // console.log(result);
                this.quotes = result.quotes;
                this.getRandomQuote();
            }
          )
          .catch(
              err => console.log(err)
          );
      }
    );
  }

  private getRandomQuote() {
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.colorServ.setRandomColor();
  }
}
