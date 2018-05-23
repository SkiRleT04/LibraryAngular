import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AppConfig } from '../configs/app-config';

@Injectable()
export abstract class BaseService<T> extends BehaviorSubject<any[]>{
  abstract get url(): string;
  abstract transformData(response: any);

  constructor(protected http: HttpClient) {
    super([]);
  }

  fetch(action: string = '', data?: any): Observable<any[]> {

    if (action == AppConfig.READ_ACTION) {
      return this.http
        .get(`${this.url}/${action}`)
        .pipe(map(res => this.transformData(res)));
    }

    return this.http
      .post(`${this.url}/${action}`, data)
      .pipe(map((res) => this.transformData(res)));
  }

  remove(data: T) {
    this.reset();
    this.fetch(AppConfig.DELETE_ACTION, data)
      .subscribe(() => this.read(), () => this.read());
  }

  save(data: any, isNew?: boolean) {
    const action = isNew ? AppConfig.CREATE_ACTION : AppConfig.UPDATE_ACTION;

    this.reset();

    this.fetch(action, data)
      .subscribe(() => this.read(), () => this.read());
  }



  private data: any[] = [];

  public read() {
    if (this.data.length) {
      return super.next(this.data);
    }

    this.fetch(AppConfig.READ_ACTION)
      .pipe(tap(data => { this.data = data; }))
      .subscribe(data => {
        super.next(data);
      });
  }


  public resetItem(dataItem: any) {
    if (!dataItem) { return; }
    const originalDataItem = this.data.find(item => item.ProductID === dataItem.ProductID);
    Object.assign(originalDataItem, dataItem);
    super.next(this.data);
  }

  private reset() {
    this.data = [];
  }

}
