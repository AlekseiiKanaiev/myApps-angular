import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { ColorizeSerivice } from '../_services/colorize.service';

@Component({
    selector: 'app-random-qoute',
    templateUrl: './random-quote.component.html',
    styleUrls: ['./random-quote.component.css']
})
export class RandomQuoteComponent implements OnInit, AfterViewInit {
    private color = 'white';

    constructor(private colorServ: ColorizeSerivice) {}

    ngOnInit(): void {
        this.colorServ.obsColor.subscribe(
            color => {
                console.log(color);
                this.color = color;
            }
        );
    }

    ngAfterViewInit() {
        this.colorServ.setRandomColor();
    }
}
