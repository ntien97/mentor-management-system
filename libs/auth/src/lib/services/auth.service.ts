import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { LoginPayload, User } from '@mentor-management-system/util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // todo: Token have expired date as well
  static readonly TOKEN = 'token';
  static readonly USER_METADATA = 'user';

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {}

  getToken(): string | null {
    return localStorage.getItem(AuthService.TOKEN);
  }

  checkToken(): Observable<{ token: string | null }> {
    const token = this.getToken();
    const user = localStorage.getItem(AuthService.USER_METADATA);

    return of({ token, ...(user && { user: JSON.parse(user) }) });
  }

  login(payload: LoginPayload): Observable<{ user: User; token: string }> {
    console.log(payload);

    return this.http
      .post<{ user: User; token: string }>('auth/login', payload)
      .pipe(tap(this.saveData));
  }

  logout() {
    this.clearData();
    // todo: do we need logout api?
    return of(true);
  }

  private saveData = (payload: { user: User; token: string }) => {
    localStorage.setItem(AuthService.TOKEN, payload.token);
    localStorage.setItem(
      AuthService.USER_METADATA,
      JSON.stringify(payload.user)
    );
  };

  private clearData = () => {
    localStorage.removeItem(AuthService.TOKEN);
    localStorage.removeItem(AuthService.USER_METADATA);
  };
}
