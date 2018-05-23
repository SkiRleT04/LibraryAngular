import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Brochure } from '../../../../models/brochure';
import { EditFormBaseLibrrayComponent } from '../../base/edit-form-base-librray.component';

@Component({
  selector: 'kendo-edit-form-brochure',
    templateUrl: './edit-form-brochure.component.html'
})

export class EditFormBrochureComponent extends EditFormBaseLibrrayComponent<Brochure> {

  public editForm: FormGroup = new FormGroup({
    'id': new FormControl(),
    'name': new FormControl('', Validators.required),
    'typeOfCover': new FormControl('', Validators.required),
    'numberOfPages': new FormControl(1, [Validators.required, Validators.min(1)]),
  });

}
