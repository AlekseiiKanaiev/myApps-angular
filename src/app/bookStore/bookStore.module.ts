import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgModel, FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { BookStoreComponent } from './components/bookStore.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { ListOfBooksComponent } from './components/listOfBooks/listOfBooks.component';
import { BooksService } from './_services/books.service';

const bookStoreRoutes: Routes = [
    {path: 'bookstore', component: BookStoreComponent}
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        // NgModel,
        ModalModule.forRoot(),
        RouterModule.forRoot(bookStoreRoutes)
    ],
    exports: [RouterModule],
    declarations: [
        BookStoreComponent,
        SearchBarComponent,
        ListOfBooksComponent
    ],
    providers: [
        BooksService
    ]
})
export class BookStoreModule {}
