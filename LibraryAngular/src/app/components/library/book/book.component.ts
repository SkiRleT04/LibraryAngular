import { Component, OnInit } from '@angular/core';
import { Author } from '../../../models/author';
import { AuthorService } from '../../../services/author.service';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';
import { Book } from '../../../models/book';
import { BookService } from '../../../services/book.service';
import { BaseLibraryComponent } from '../base/base-library.component';

@Component({
    selector: 'component-book',
  templateUrl: './book.component.html',
  providers: [BookService]
})

export class BookComponent extends BaseLibraryComponent<Book, BookService> implements OnInit {

  constructor(private bookService: BookService) {
    super(bookService);
 }

}
