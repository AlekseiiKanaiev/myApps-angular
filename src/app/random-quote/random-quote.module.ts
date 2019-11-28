import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RandomQuoteComponent } from './components/random-quote.component';
import { QouteBoxComponent } from './components/quote-box/quote-box.component';
import { QuoteMessageComponent } from './components/quote-box/quote-message/quote-message.component';
import { ButtonsComponent } from './components/quote-box/buttons/buttons.component';
import { GetQuoteService } from './_services/getQuote.service';

const randomQuoteRoutes: Routes = [
    {path: 'random-qoute', component: RandomQuoteComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(randomQuoteRoutes)
    ],
    declarations: [
        RandomQuoteComponent,
        QouteBoxComponent,
        QuoteMessageComponent,
        ButtonsComponent
    ],
    providers: [
        GetQuoteService
    ],
    exports: [
        RouterModule
    ]
})
export class RandomQuoteModule {}
