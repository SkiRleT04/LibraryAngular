import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../configs/app-config';
import { CommonLibrary } from '../models/common-library';

@Injectable()
export class LibraryService extends BehaviorSubject<any[]>{

  private url: string = 'api/commonlibrary'
  private data: any[] = [];

  constructor(protected http: HttpClient) {
    super([]);
  }

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


  fetch(action: string = ''): Observable<any[]> {
      return this.http
        .get(`${this.url}/${action}`)
        .pipe(map((res: any) => res.сommons as CommonLibrary[]));
    }
  
}
