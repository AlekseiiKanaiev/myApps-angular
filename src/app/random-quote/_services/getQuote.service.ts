import { URL } from '../_data/url';
import { Quote } from '../_models/qoute';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetQuoteService {
    private quotes: Quote[];
    obsQuotes = new Subject<Quote>();
    constructor(private http: HttpClient) {}

    private getQuotes(): Observable<Quote[]> {
        return this.http.get<any>(URL).pipe(
           map(data => data.quotes)
        );
    }
    private getQuotesPromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', URL);
            request.onload = () => (request.status === 200) ? resolve(request.response) : reject(Error(request.statusText));
            request.onerror = () => reject(Error('Network error'));
            request.send();
            console.log('submit');
        }).then(JSON.parse);
    }

    setQuotes() {
        this.getQuotes().subscribe(
            data => {
                this.quotes = data;
                this.getNewRandomQuote();
            },
            error => {
                console.log('Error: ' + error);
                this.getQuotesPromise()
                .then(
                    result => {
                        // console.log(result);
                        this.quotes = result.quotes;
                        this.getNewRandomQuote();
                    }
                )
                .catch(
                    err => console.log(err)
                );
            }
        );
    }

    getNewRandomQuote() {
        this.obsQuotes.next(this.quotes[Math.floor(Math.random() * this.quotes.length)]);
    }
}
