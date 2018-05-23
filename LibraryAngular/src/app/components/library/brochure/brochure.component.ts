import { BrochureService } from '../../../services/brochure.service';
import { Component, OnInit } from '@angular/core';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';
import { Brochure } from '../../../models/brochure';
import { BaseLibraryComponent } from '../base/base-library.component';


@Component({
    selector: 'component-brochure',
  templateUrl: './brochure.component.html',
  providers:[BrochureService]
})

export class BrochureComponent extends BaseLibraryComponent<Brochure, BrochureService> implements OnInit {

  constructor(private brochureService: BrochureService) {
    super(brochureService);
 }

}
