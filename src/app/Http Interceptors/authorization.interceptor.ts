import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AuthorizationService } from '../Services/authorization.service'

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {
  constructor(private authorizationService: AuthorizationService) { }
    
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json',
        'Authorization': `Bearer ${this.authorizationService.getAPIKey()}`,
      },
    });

    return next.handle(req);
  }
}