import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from '../models/book';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Author } from '../models/author';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './base.service';
import { AppConfig } from '../configs/app-config';

@Injectable()
export class AuthorService extends BaseService<Author> {
  url: string = 'api/author';

  transformData(response: any) {
    var data = <Author[]>response.authors || <Author[]>[];
    console.log(data);
    data.forEach((a) => {
      a.dateOfBirth = new Date(a.dateOfBirth);
    });
    return data;
  }

  public getBooksList() {
    return this.http.get(`api/book/${AppConfig.READ_ACTION}`).pipe(map((res: any) => res.books as Book[]));
  }

}
