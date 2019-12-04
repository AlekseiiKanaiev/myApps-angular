import { Component, OnInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ColorizeSerivice } from '../_services/colorize.service';
import { GetQuoteService } from '../_services/getQuote.service';

@Component({
    selector: 'app-random-qoute',
    templateUrl: './random-quote.component.html',
    styleUrls: ['./random-quote.component.css'],
})
export class RandomQuoteComponent implements OnInit, AfterViewInit {
    private color = 'white';

    constructor(private colorServ: ColorizeSerivice,
                private quoteServ: GetQuoteService,
                private cdr: ChangeDetectorRef) {}

    ngOnInit(): void {
        this.colorServ.obsColor.subscribe(
            color => {
                console.log(color);
                setTimeout(() => this.color = color, 0);
            }
        );
        this.quoteServ.setQuotes();
    }

    ngAfterViewInit() {
        this.colorServ.setRandomColor();
        this.cdr.detectChanges();
    }
}
