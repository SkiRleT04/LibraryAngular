import { Component, OnInit } from '@angular/core';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';
import { PublicHouse } from '../../../models/public-house';
import { PublicHouseService } from '../../../services/public-house.service';
import { BaseLibraryComponent } from '../base/base-library.component';


@Component({
    selector: 'component-public-house',
  templateUrl: './public-house.component.html',
  providers: [PublicHouseService]
})

export class PublicHouseComponent extends BaseLibraryComponent<PublicHouse, PublicHouseService> implements OnInit {

  constructor(private publicHouseService: PublicHouseService) {
    super(publicHouseService);
 }

}
