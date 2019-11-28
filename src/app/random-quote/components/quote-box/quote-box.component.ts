import { Component, OnInit } from '@angular/core';
import { Quote } from '../../_models/qoute';
import { GetQuoteService } from '../../_services/getQuote.service';

@Component({
  selector: 'app-random-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.css']
})
export class QouteBoxComponent implements OnInit {
  private randomQuote: Quote;

  constructor(private getQuoteServ: GetQuoteService) { }

  ngOnInit() {
    // this.getRandomQuote();
  }

  private getRandomQuote() {
    this.getQuoteServ.getRandomQuote().subscribe(
      data => this.randomQuote = data,
      error => {
        console.log('Error: ' + error);
        this.getQuoteServ.getRandomQuotePromise()
          .then(
            result => {
                // console.log(result);
                const quots = result.quotes;
                this.randomQuote = quots[Math.floor(Math.random() * quots.length)];
            }
          )
          .catch(
              err => console.log(err)
          );
      }
    );
  }
}
