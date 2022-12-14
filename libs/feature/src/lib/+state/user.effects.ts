import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import {
  MentorService,
  StudentService,
} from '@mentor-management-system/data-access';
import { map, switchMap } from 'rxjs';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';
import { HttpErrorResponse } from '@angular/common/http';
import { httpError } from './http-error';

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

  createStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createStudent),
      fetch({
        run: ({ student }) =>
          this.studentService
            .createStudent(student)
            .pipe(map((user) => UserActions.createUserSuccess({ user }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.createUserFailure({ error });
        },
      })
    )
  );

  createMentor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.createMentor),
      fetch({
        run: ({ mentor }) =>
          this.mentorService
            .createMentor(mentor)
            .pipe(map((user) => UserActions.createUserSuccess({ user }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.createUserFailure({ error });
        },
      })
    )
  );

  deleteStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteStudent),
      fetch({
        run: ({ id }) =>
          this.studentService
            .deleteStudent(id)
            .pipe(map(() => UserActions.deleteUserSuccess({ id }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.deleteUserFailure({ error });
        },
      })
    )
  );
  deleteMentor$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteMentor),
      fetch({
        run: ({ id }) =>
          this.mentorService
            .deleteMentor(id)
            .pipe(map(() => UserActions.deleteUserSuccess({ id }))),
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.deleteUserFailure({ error });
        },
      })
    )
  );

  onCreateError$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          UserActions.createUserFailure,
          UserActions.deleteUserFailure,
          UserActions.loadUserFailure
        ),
        httpError(),
        switchMap((error: HttpErrorResponse) =>
          this.alertService.open(
            error.error?.message || 'Something went wrong!',
            {
              label: 'Error',
              status: TuiNotification.Error,
            }
          )
        )
      ),
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly mentorService: MentorService,
    private readonly studentService: StudentService,
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService
  ) {}
}
