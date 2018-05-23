import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../models/book';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {
  transform(object: Array<any>, property: string): any {
    var arrayOfPropery = object.map(o => o[property]);
    return arrayOfPropery.join(", ");
  }
}
