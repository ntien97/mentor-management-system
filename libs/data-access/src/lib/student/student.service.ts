import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser, UserCreate } from '@mentor-management-system/util';

@Injectable()
export class StudentService {
  private static BASE_URL = '/api/students';

  constructor(private readonly http: HttpClient) {}

  public getStudents(): Observable<IUser[]> {
    return this.http.get<IUser[]>(StudentService.BASE_URL);
  }

  public createStudent(student: UserCreate): Observable<IUser> {
    return this.http.post<IUser>(StudentService.BASE_URL, student);
  }

  public deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${StudentService.BASE_URL}/${id}`);
  }
}
