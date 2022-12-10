import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

@Injectable()
export class UserEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      fetch({
        run: (loginPayload) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.authService
            .login(loginPayload)
            .pipe(map((user) => UserActions.loadUserSuccess({ user })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}
}
