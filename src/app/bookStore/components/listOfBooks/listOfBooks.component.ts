import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { BooksService } from '../../_services/books.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
    selector: 'app-bookstore-list-of-books',
    templateUrl: 'listOfBooks.component.html',
    styleUrls: ['listOfBooks.component.css']
})
export class ListOfBooksComponent implements OnInit {
    @Input() bookList: string[];
    private modalRef: BsModalRef;
    private endIndex = 5;
    private isMore = true;

    constructor(private modalServ: BsModalService) {}

    ngOnInit() {
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalServ.show(template);
    }

    viewMore() {
        this.endIndex += 5;
        this.isMore = this.bookList.length > this.endIndex;
    }
}
