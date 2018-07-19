import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from './entity';
import { mapTo } from 'rxjs/internal/operators/mapTo';
@Pipe({
  name: 'entityUDAs'
})
export class EntityUserDefinedAttributesPipe implements PipeTransform {

  transform(udas): any {
    if (!udas) {
      return null;
    }
    let keys = Object.keys(udas);
    let dictionary = keys.map(function (k) {
      let entry = {};
      entry[0] = k;
      entry[1] = udas[k];
      return entry;
    });
    return dictionary;
  }

}
