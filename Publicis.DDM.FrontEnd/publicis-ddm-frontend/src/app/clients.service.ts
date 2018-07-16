import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from './client';
import { HttpParams } from '@angular/common/http/src/params';
import { HttpParamsOptions } from '@angular/common/http/src/params';
import { HttpRequestsHelperService } from './http-requests-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url = this.helper.getBaseUrl() + 'Api/Client/';
  
  getAll(): Observable<Client[]> {    
    return this.http.get<Client[]>(this.url + 'GetAll')
      .pipe(
        catchError(this.handleError('getClients', []))
      )
  }

  getById(id: number): Observable<Client[]> {    
    return this.http.get<Client[]>(this.url + 'GetById/' + id)
      .pipe(
        catchError(this.handleError('getById', []))
      )
  }

  Find(filter: string): Observable<Client[]> {    
    // TODO: armar params
    let formattedFilter;
    return this.http.get<Client[]>(this.url + 'Get/' + formattedFilter)
      .pipe(
        catchError(this.handleError('Find', []))
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
