import { Component, OnInit } from '@angular/core';
import { Author } from '../../../models/author';
import { AuthorService } from '../../../services/author.service';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';

import { map } from 'rxjs/operators/map';
import { BaseLibraryComponent } from '../base/base-library.component';

@Component({
    selector: 'component-author',
  templateUrl: './author.component.html',
  providers: [AuthorService]
})

export class AuthorComponent extends BaseLibraryComponent<Author, AuthorService> implements OnInit {

  constructor(private authorService: AuthorService) {
    super(authorService);
 }

}
