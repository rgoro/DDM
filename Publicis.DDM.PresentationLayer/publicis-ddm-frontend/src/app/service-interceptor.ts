import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http/src/headers';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class ServiceInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(req);
  }
}