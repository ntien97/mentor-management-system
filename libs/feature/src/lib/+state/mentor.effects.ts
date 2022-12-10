import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as MentorActions from './mentor.actions';
import { Action } from '@ngrx/store';
import { MentorService } from '@mentor-management-system/data-access';
import { map } from 'rxjs';

@Injectable()
export class MentorEffects implements OnInitEffects {
  init$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MentorActions.initMentor),
      fetch({
        run: () => {
          return this.mentorService
            .getMentors()
            .pipe(
              map((mentors) => MentorActions.loadMentorSuccess({ mentors }))
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return MentorActions.loadMentorFailure({ error });
        },
      })
    );
  });

  constructor(
    private readonly actions$: Actions,
    private readonly mentorService: MentorService
  ) {}

  ngrxOnInitEffects(): Action {
    return MentorActions.initMentor();
  }
}
