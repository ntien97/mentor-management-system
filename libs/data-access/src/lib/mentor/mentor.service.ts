import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, UserCreate } from '@mentor-management-system/util';

@Injectable()
export class MentorService {
  constructor(private readonly http: HttpClient) {}

  public getMentors(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/mentors');
  }

  public createMentor(mentor: UserCreate): Observable<IUser> {
    return this.http.post<IUser>('/api/mentors', mentor);
  }
}
