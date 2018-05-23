import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Magazine } from '../models/magazine';
import { BaseService } from './base.service';

@Injectable()
export class MagazineService extends BaseService<Magazine> {
  url: string = 'api/magazine';

  transformData(response: any) {
    var data = <Magazine[]>response.magazines || <Magazine[]>[];
    return data;
  }

}
