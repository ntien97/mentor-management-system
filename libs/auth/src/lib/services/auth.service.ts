import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginPayload, User } from '@mentor-management-system/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static readonly TOKEN = 'token';

  constructor(private readonly http: HttpClient) {}

  checkToken(): Observable<{ token: string | null }> {
    const token = localStorage.getItem(AuthService.TOKEN);

    return of({ token });
  }

  login(payload: LoginPayload): Observable<{ user: User; token: string }> {
    console.log(payload);
    // return this.http.post("/api/auth/login", payload);

    //todo: check this
    localStorage.setItem(AuthService.TOKEN, 'TOKEN');
    return of({ user: { name: 'Tien', id: 'OMG' }, token: 'TOKEN' });
  }
}
