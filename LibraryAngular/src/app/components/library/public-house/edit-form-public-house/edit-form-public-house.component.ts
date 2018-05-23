import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PublicHouse } from '../../../../models/public-house';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PublicHouseService } from '../../../../services/public-house.service';
import { Book } from '../../../../models/book';
import { EditFormBaseLibrrayComponent } from '../../base/edit-form-base-librray.component';

@Component({
  selector: 'kendo-edit-form-public-house',
    templateUrl: './edit-form-public-house.component.html'
})

export class EditFormPublicHouseComponent extends EditFormBaseLibrrayComponent<PublicHouse> implements OnInit {

  public listBookItems: Array<Book> = [];


  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', Validators.required),
    'country': new FormControl('', Validators.required),
    'books': new FormControl([], Validators.required)
  });

  constructor(private publicHouseService: PublicHouseService) {super();}

  ngOnInit(): void {
    this.publicHouseService.getBooksList().subscribe(data => {
      this.listBookItems = data;
    });
  }

  
}
