import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginRedirectInterceptor implements HttpInterceptor {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          const httpErr = err as HttpErrorResponse;
          if (httpErr.status === HttpStatusCode.Unauthorized) {
            this.authService.clearData();
            this.router.navigate(['/login']);
          }
        }

        return throwError(() => err);
      })
    );
  }

  private createBearerHeader(token?: string) {
    return {
      ...(token && { Authorization: 'Bearer ' + token }),
    };
  }
}
