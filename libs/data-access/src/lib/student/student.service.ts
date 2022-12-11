import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, UserCreate } from '@mentor-management-system/util';

@Injectable()
export class StudentService {
  constructor(private readonly http: HttpClient) {}

  public getStudents(): Observable<IUser[]> {
    return this.http.get<IUser[]>('/api/students');
  }

  public createStudent(student: UserCreate): Observable<IUser> {
    return this.http.post<IUser>('/api/students', student);
  }
}
