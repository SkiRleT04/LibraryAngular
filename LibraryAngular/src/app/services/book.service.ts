import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Author } from '../models/author';
import { Observable } from 'rxjs/Observable';
import { PublicHouse } from '../models/public-house';
import { BaseService } from './base.service';
import { AppConfig } from '../configs/app-config';


@Injectable()
export class BookService extends BaseService<Book> {
  url: string = 'api/book';

  transformData(response: any) {
    var data = <Book[]>response.books || <Book[]>[];
    return data;
  }

  public getAuthorsList() {
    return this.http.get(`api/author/${AppConfig.READ_ACTION}`).pipe(map((res: any) => res.authors as Author[]));
  }

  public getPublicHousesList() {
    return this.http.get(`api/publichouse/${AppConfig.READ_ACTION}`).pipe(map((res: any) => res.publicHouses as PublicHouse[]));
  }

}
