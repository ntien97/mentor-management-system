import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/api')) {
      const token = this.authService.getToken();

      const modified = request.clone({
        setHeaders: this.createBearerHeader(token),
      });
      return next.handle(modified);
    } else {
      return next.handle(request);
    }
  }

  private createBearerHeader(token?: string) {
    return {
      ...(token && { Authorization: 'Bearer ' + token }),
    };
  }
}
