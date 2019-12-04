import { Component } from '@angular/core';
import { BooksService } from '../_services/books.service';

@Component({
    selector: 'app-bookstor',
    templateUrl: 'bookStore.component.html',
    styleUrls: ['bookStore.component.css']
})
export class BookStoreComponent {
    private bookList: string[];
    constructor(private bookServ: BooksService) {}

    searchBook(book: string) {
        console.log(book);
        this.bookServ.getBooks(book).subscribe(
            (res) => {
                this.bookList = res.items.map(el => el.volumeInfo)
                                        .map(el => {
                                            return Object.assign({}, {
                                                'title': el.title,
                                                'authors': (el.authors) ? el.authors.join(', ') : 'None',
                                                'description': (el.description) ? el.description : 'There is no description',
                                                'image': (el.imageLinks) ? el.imageLinks.smallThumbnail : 'There is no image',
                                                'price': (res.items.saleInfo) ? res.items.saleInfo.listPrice.amount : 'None'
                                            });
                                        });
            }
        );
    }
}
