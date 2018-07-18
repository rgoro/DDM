import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from './entity';
import { mapTo } from 'rxjs/internal/operators/mapTo';
@Pipe({
  name: 'entityValues'
})
export class EntityValuesPipe implements PipeTransform {

  transform(values): any {
    if (!values) {
      return null;
    }
    let keys = Object.keys(values);
    let dictionary = keys.map(function (k) {
      let entry = {};
      entry[0] = k;
      entry[1] = values[k];
      return entry;
    });
    return dictionary;
  }

}
