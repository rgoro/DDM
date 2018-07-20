import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpParams } from '@angular/common/http/src/params';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { HttpRequestsHelperService } from './http-requests-helper.service';
import { Entity } from './entity';

@Injectable({
  providedIn: 'root'
})
export class EntityService {

  private url = this.helper.getBaseUrl() + 'Api/';
  
  getAll(type: string): Observable<Entity[]> {
    return this.http.get<Entity[]>(this.url + type + '/GetAll')
      .pipe(
        catchError(this.handleError('getClients', []))
      )
  }

  getById(type: string, id: number): Observable<Entity[]> {    
    return this.http.get<Entity[]>(this.url + type + '/GetById?mongoId=' + id)
      .pipe(
        catchError(this.handleError('getById', []))
      )
  }

  Find(type: string, filter: string): Observable<Entity[]> {
    let formattedFilter;
    return this.http.get<Entity[]>(this.url + type + '/Get' + formattedFilter)
      .pipe(
        catchError(this.handleError('Find', []))
      )
  }

  Post(type: string, data): Observable<Entity[]> {
    return this.http.post<Entity[]>(this.url + type + '/Add', data)
      .pipe(
        catchError(this.handleError('Post', []))
      )
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(
    private http: HttpClient,
    private helper: HttpRequestsHelperService
  ) { }
}
