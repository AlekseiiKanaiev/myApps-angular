import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RandomQuoteComponent } from './components/random-quote.component';
import { QouteBoxComponent } from './components/quote-box/quote-box.component';
import { QuoteMessageComponent } from './components/quote-box/quote-message/quote-message.component';
import { ButtonsComponent } from './components/quote-box/buttons/buttons.component';
import { GetQuoteService } from './_services/getQuote.service';
import { ColorizeSerivice } from './_services/colorize.service';

const randomQuoteRoutes: Routes = [
    {path: 'random-qoute', component: RandomQuoteComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(randomQuoteRoutes),
        BrowserAnimationsModule,
        FontAwesomeModule
    ],
    declarations: [
        RandomQuoteComponent,
        QouteBoxComponent,
        QuoteMessageComponent,
        ButtonsComponent
    ],
    providers: [
        GetQuoteService,
        ColorizeSerivice
    ],
    exports: [
        RouterModule,
        BrowserAnimationsModule
    ]
})
export class RandomQuoteModule {}
