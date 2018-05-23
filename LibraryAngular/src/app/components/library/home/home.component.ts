import { Component, OnInit } from '@angular/core';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';

import { BaseService } from '../../../services/base.service';
import { LibraryService } from '../../../services/library.service';
import { AppConfig } from '../../../configs/app-config';

@Component({
  selector: 'component-home',
  templateUrl: './home.component.html',
  providers: [LibraryService]
})

export class HomeComponent implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: AppConfig.AMOUNT_OF_DATA_ON_PAGE
  };

  constructor(private service: LibraryService) { }

  public ngOnInit(): void {
    this.view = this.service.pipe(map(data => process(data, this.gridState)));
    this.service.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;
    this.service.read();
  }
}
