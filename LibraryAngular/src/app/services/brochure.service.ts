import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators/tap';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import { Brochure } from '../models/brochure';
import { BaseService } from './base.service';

@Injectable()
export class BrochureService extends BaseService<Brochure> {
  url: string = 'api/brochure';

  transformData(response: any) {
    var data = <Brochure[]>response.brochures || <Brochure[]>[];
    return data;
  }
}
