import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsHelperService {

  getBaseUrl() :string {
    return 'http://localhost:8005/';
  }

  constructor() { }
}
