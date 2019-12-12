import { Component, EventEmitter, Output } from '@angular/core';
import { BooksService } from '../../_services/books.service';
import { AlertService } from 'src/app/_services/alertService.service';

@Component({
    selector: 'app-bookstore-searchbar',
    templateUrl: 'searchBar.component.html',
    styleUrls: ['searchBar.component.css']
})
export class SearchBarComponent {
    @Output() searchBook = new EventEmitter<string>();

    book: string;

    constructor(private bookServ: BooksService, private alertServ: AlertService) {}

    private search(): void {
        if (this.book) {
            // console.log(this.book);
            // this.bookServ.setBook(this.book);
            this.alertServ.clearAlert();
            this.searchBook.emit(this.book);
        } else {
            this.alertServ.warning('Enter name of the book');
        }
    }

}
