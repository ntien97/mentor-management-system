import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '@mentor-management-system/util';

@Injectable()
export class MentorService {
  constructor(private readonly http: HttpClient) {}

  // TODO: implement it :V
  public getMentors(): Observable<Mentor[]> {
    // return of([{ id: 'xx', name: 'Tien', age: 25 }]);

    return this.http.get<Mentor[]>('/api/mentors');
  }
}
