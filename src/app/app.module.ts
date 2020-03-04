import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './_directives/alert.component';
import { AlertService } from './_services/alertService.service';

import { CalculatorModule } from './calculator/calculator.module';
import { BookStoreModule } from './bookStore/bookStore.module';
import { DrumMachineModule } from './drum-machine/drum-machine.module';
import { RandomQuoteModule } from './random-quote/random-quote.module';
import { AuthenticationModule } from './authentication/authentication.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // tslint:disable-next-line: deprecation
    HttpModule,
    AppRoutingModule,
    CalculatorModule,
    BookStoreModule,
    DrumMachineModule,
    RandomQuoteModule,
    AuthenticationModule
  ],
  providers: [
    AlertService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
