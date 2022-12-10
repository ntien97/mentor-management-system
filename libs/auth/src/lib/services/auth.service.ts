import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginPayload, User } from '@mentor-management-system/util';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  login(payload: LoginPayload): Observable<User> {
    console.log(payload);
    // return this.http.post("/api/auth/login", payload);
    return of({ name: 'Tien', id: 'OMG' });
  }
}
