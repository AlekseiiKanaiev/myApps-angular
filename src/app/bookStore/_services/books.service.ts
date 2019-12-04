import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
const API_KEY = '&key=AIzaSyC5mcWMqSMxtaecdQx-wsq6cgoZSKqZd0I';
@Injectable()
export class BooksService {
    private book: string;
    constructor(private http: HttpClient) {}

    getBooks(book: string): Observable<any> {
        if (book) {
            return this.http.get(URL + book);
            // return this.fakeHttp.intercept();
        }
    }
}
