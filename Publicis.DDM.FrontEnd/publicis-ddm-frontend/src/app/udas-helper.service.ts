import { Injectable } from '@angular/core';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root'
})
export class UdasHelperService {

  constructor() { }

  assignUdasToEntity(entity: Entity, udas: [{}]) {
    let values = {};
    if(entity.values)
    {
      for(let i in udas)
      {
        let key: string = udas[i][0];
        let value: string = udas[i][1];
        if(entity.values[key])
        {
        // TODO: crear un servicio que maneje todos los errores
          console.log('can\'t assign { key: ' + key + ', value: ' + value + ' }, specified key alrready exists.');
          break;
        }
        entity.values[key] = value;
      }
      let assignedEntity = {
        id: entity.id,
        name: entity.name,
        values: entity.values
      }
      return assignedEntity;  
    } else {   
      for(let i in udas)
      {
        let key: string = udas[i][0];
        let value: string = udas[i][1];
        values[key] = value;
      }
      let assignedEntity = {
        id: '',
        name: entity.name,
        values: values
      }
      return assignedEntity;  
    }
  }
}
