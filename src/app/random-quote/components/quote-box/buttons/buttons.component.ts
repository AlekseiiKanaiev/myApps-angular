import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { Quote } from 'src/app/random-quote/_models/qoute';
import { ColorizeSerivice } from 'src/app/random-quote/_services/colorize.service';
import { GetQuoteService } from 'src/app/random-quote/_services/getQuote.service';

@Component({
  selector: 'app-random-quote-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit, AfterContentChecked {
  private twitterIcon = faTwitterSquare;
  private thumblerIcon = faTumblrSquare;
  private twitterHtef = 'https://twitter.com';
  private thumblerHref = 'https://www.tumblr.com';
  private color = 'white';
  private randomQuote: Quote;

  @ViewChild('twit', {static: false}) twit: ElementRef;
  @ViewChild('thumb', {static: false}) thumb: ElementRef;

  constructor(private colorServ: ColorizeSerivice, private quoteServ: GetQuoteService) { }

  ngOnInit() {
    this.colorServ.obsColor.subscribe(
      color => setTimeout(() => this.color = color, 0)
    );
    this.quoteServ.obsQuotes.subscribe(
      data => this.randomQuote = data
    );
  }

  ngAfterContentChecked() {
    if (this.randomQuote) { this.setHrefs(); }
  }

  private setHrefs() {
    this.twitterHtef = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent(`"${this.randomQuote.quote}" ${this.randomQuote.author}`);
    this.thumblerHref = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(this.randomQuote.author) + '&content=' + encodeURIComponent(this.randomQuote.quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
    this.twit.nativeElement.setAttribute('href', this.twitterHtef);
    this.thumb.nativeElement.setAttribute('href', this.thumblerHref);
  }

  private getNewQuote() {
    this.quoteServ.getNewRandomQuote();
    this.colorServ.setRandomColor();
  }

}
