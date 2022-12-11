import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, UserCreate } from '@mentor-management-system/util';

@Injectable()
export class MentorService {
  private static BASE_URL = '/api/mentors';

  constructor(private readonly http: HttpClient) {}

  public getMentors(): Observable<IUser[]> {
    return this.http.get<IUser[]>(MentorService.BASE_URL);
  }

  public createMentor(mentor: UserCreate): Observable<IUser> {
    return this.http.post<IUser>(MentorService.BASE_URL, mentor);
  }

  public deleteMentor(id: number): Observable<void> {
    return this.http.delete<void>(`${MentorService.BASE_URL}/${id}`);
  }
}
