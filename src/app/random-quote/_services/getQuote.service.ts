import { URL } from '../_data/url';
import { Quote } from '../_models/qoute';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GetQuoteService {
    constructor(private http: HttpClient) {}

    getRandomQuote(): Observable<Quote> {
        return this.http.get<Quote[]>(URL).pipe(
           map(data => data[Math.floor(Math.random() * data.length)])
        );
    }

    getRandomQuotePromise(): Promise<any> {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', URL);
            request.onload = () => (request.status === 200) ? resolve(request.response) : reject(Error(request.statusText));
            request.onerror = () => reject(Error('Network error'));
            request.send();
            // console.log('submit');
        }).then(JSON.parse);
    }
}
