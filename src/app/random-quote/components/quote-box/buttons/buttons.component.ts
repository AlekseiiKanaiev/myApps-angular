import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef, AfterContentChecked } from '@angular/core';
import { faTwitterSquare, faTumblrSquare } from '@fortawesome/free-brands-svg-icons';
import { Quote } from 'src/app/random-quote/_models/qoute';
import { ColorizeSerivice } from 'src/app/random-quote/_services/colorize.service';

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
  private color = 'black';

  @Input() randomQuote: Quote;

  @Output() getRandomQuote = new EventEmitter<void>();

  @ViewChild('twit', {static: false}) twit: ElementRef;
  @ViewChild('thumb', {static: false}) thumb: ElementRef;

  constructor(private colorServ: ColorizeSerivice) { }

  ngOnInit() {
    this.colorServ.obsColor.subscribe(
      color => this.color = color
    );
  }

  ngAfterContentChecked() {
    if (this.randomQuote) { this.setHrefs(); }
  }

  setHrefs() {
    this.twitterHtef = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent(`"${this.randomQuote.quote}" ${this.randomQuote.author}`);
    this.thumblerHref = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(this.randomQuote.author) + '&content=' + encodeURIComponent(this.randomQuote.quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';
    this.twit.nativeElement.setAttribute('href', this.twitterHtef);
    this.thumb.nativeElement.setAttribute('href', this.thumblerHref);
  }

  getNewQuote() {
    this.getRandomQuote.emit();
  }

}
