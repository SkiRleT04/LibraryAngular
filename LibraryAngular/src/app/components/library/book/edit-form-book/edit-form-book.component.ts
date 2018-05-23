import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../../../services/author.service';
import { Book } from '../../../../models/book';
import { PublicHouseService } from '../../../../services/public-house.service';
import { Author } from '../../../../models/author';
import { BookService } from '../../../../services/book.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PublicHouse } from '../../../../models/public-house';
import { EditFormBaseLibrrayComponent } from '../../base/edit-form-base-librray.component';

@Component({
  selector: 'kendo-edit-form-book',
  templateUrl: './edit-form-book.component.html',
  providers: [BookService]
})

export class EditFormBookComponent extends EditFormBaseLibrrayComponent<Book> implements OnInit {

  public listAuthorItems: Array<Author> = [];
  public listPublicHouseItems: Array<PublicHouse> = [];

  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', Validators.required),
    'yearOfPublishing': new FormControl(new Date().getFullYear(), [Validators.required, Validators.min(1850), Validators.max(new Date().getFullYear())]),
    'authors': new FormControl([], Validators.required),
    'publicHouses': new FormControl([], Validators.required),
  });;

  
  constructor(private bookService: BookService) {super();}

  ngOnInit(): void {

    this.bookService.getAuthorsList().subscribe(data => {
      this.listAuthorItems = data;
    });

    this.bookService.getPublicHousesList().subscribe(data => {
      this.listPublicHouseItems = data;
    });

  }
}
