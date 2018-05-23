import { Component, OnInit } from '@angular/core';
import { Author } from '../../../models/author';
import { AuthorService } from '../../../services/author.service';
import { State, process } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { map } from 'rxjs/operators/map';
import { BaseService } from '../../../services/base.service';
import { AppConfig } from '../../../configs/app-config';

export class BaseLibraryComponent<T, S extends BaseService<T>> implements OnInit {

  public view: Observable<GridDataResult>;
  public gridState: State = {
    sort: [],
    skip: 0,
    take: AppConfig.AMOUNT_OF_DATA_ON_PAGE
  };

  public editDataItem: T;
  public isNew: boolean;

  constructor(private service: S) { }

  public ngOnInit(): void {
    this.view = this.service.pipe(map(data => process(data, this.gridState)));
    this.service.read();
  }

  public onStateChange(state: State) {
    this.gridState = state;

    this.service.read();
  }

  public addHandler() {
    this.editDataItem = {} as T;
    this.isNew = true;
  }

  public editHandler({ dataItem }) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(item: T) {
    this.service.save(item, this.isNew);
    this.editDataItem = undefined;
  }

  public removeHandler({ dataItem }) {
    this.service.remove(dataItem);
  }
}
