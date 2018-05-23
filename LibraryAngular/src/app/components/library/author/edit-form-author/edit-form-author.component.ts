import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';


import { Author } from '../../../../models/author';
import { Book } from '../../../../models/book';
import { AuthorService } from '../../../../services/author.service';
import { EditFormBaseLibrrayComponent } from '../../base/edit-form-base-librray.component';

@Component({
  selector: 'kendo-edit-form-author',
  templateUrl: './edit-form-author.component.html',
  providers: [AuthorService]
})

export class EditFormAuthorComponent extends EditFormBaseLibrrayComponent<Author> implements OnInit {

  public listBookItems: Array<Book> = [];
  
  constructor(private authorService: AuthorService) {super();}

  ngOnInit(): void {
    this.authorService.getBooksList().subscribe(data => {
      this.listBookItems = data;
    });
  }
  
  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'firstName': new FormControl('', Validators.required),
    'lastName': new FormControl('', Validators.required),
    'dateOfBirth': new FormControl(new Date().getDate(), Validators.required),
    'books': new FormControl([], Validators.required)
  });

}
