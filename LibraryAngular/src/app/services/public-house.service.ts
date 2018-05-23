import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { PublicHouse } from '../models/public-house';
import { BaseService } from './base.service';
import { AppConfig } from '../configs/app-config';

@Injectable()
export class PublicHouseService extends BaseService<PublicHouse> {

  url: string = 'api/publichouse';

  transformData(response: any) {
    var data = <PublicHouse[]>response.publicHouses || <PublicHouse[]>[];
    console.log(data);
    return data;
  }

  public getBooksList() {
    return this.http.get(`api/book/${AppConfig.READ_ACTION}`).pipe(map((res: any) => res.books as Book[]));
  }

}
