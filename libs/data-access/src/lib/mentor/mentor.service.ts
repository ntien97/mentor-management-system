import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MentorService {
  constructor(private readonly http: HttpClient) {}

  // TODO: implement it :V
  public getMentors() {
    return this.http.get('/mentors');
  }
}
