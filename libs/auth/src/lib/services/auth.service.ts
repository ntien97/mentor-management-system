import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { IUser, LoginPayload } from '@mentor-management-system/util';
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

  getToken(): string | undefined {
    return localStorage.getItem(AuthService.TOKEN) || undefined;
  }

  getUserMetadata(): IUser | undefined {
    const userStr = localStorage.getItem(AuthService.USER_METADATA);

    return userStr ? (JSON.parse(userStr) as IUser) : undefined;
  }

  checkToken(): Observable<{ token?: string; user?: IUser }> {
    const token = this.getToken();
    const user = this.getUserMetadata();

    return of({ token, user });
  }

  login(payload: LoginPayload): Observable<{ user: IUser; token: string }> {
    return this.http
      .post<{ user: IUser; token: string }>('api/auth/login', payload)
      .pipe(tap(this.saveData));
  }

  logout() {
    this.clearData();
    // todo: do we need logout api?
    return of(true);
  }

  private saveData = (payload: { user: IUser; token: string }) => {
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
