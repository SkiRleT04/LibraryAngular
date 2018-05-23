import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Magazine } from '../../../../models/magazine';
import { EditFormBaseLibrrayComponent } from '../../base/edit-form-base-librray.component';

@Component({
  selector: 'kendo-edit-form-magazine',
    templateUrl: './edit-form-magazine.component.html'
})



export class EditFormMagazineComponent extends EditFormBaseLibrrayComponent<Magazine> {

  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', Validators.required),
    'authorName': new FormControl('', Validators.required),
    'yearOfPublishing': new FormControl(new Date().getFullYear(),[Validators.required, Validators.max(new Date().getFullYear()), Validators.min(1850)]),
  });

}
