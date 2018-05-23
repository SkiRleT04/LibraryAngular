import { Component, OnInit } from '@angular/core';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';
import { Magazine } from '../../../models/magazine';
import { MagazineService } from '../../../services/magazine.service';
import { BaseLibraryComponent } from '../base/base-library.component';

@Component({
    selector: 'component-magazine',
  templateUrl: './magazine.component.html',
  providers: [MagazineService]
}) 

export class MagazineComponent extends BaseLibraryComponent<Magazine, MagazineService> implements OnInit {

  constructor(private magazineService: MagazineService) {
    super(magazineService);
 }

}
