import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import {
  MentorService,
  StudentService,
} from '@mentor-management-system/data-access';
import { map } from 'rxjs';

@Injectable()
export class UserEffects {
  initMentor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.initMentor),
      fetch({
        run: () =>
          this.mentorService
            .getMentors()
            .pipe(map((users) => UserActions.loadUserSuccess({ users }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );

  initStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.initStudent),
      fetch({
        run: () =>
          this.studentService
            .getStudents()
            .pipe(map((users) => UserActions.loadUserSuccess({ users }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly mentorService: MentorService,
    private readonly studentService: StudentService
  ) {}
}
