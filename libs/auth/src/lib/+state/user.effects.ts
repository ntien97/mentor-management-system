import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class UserEffects implements OnInitEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      fetch({
        run: (loginPayload) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.authService
            .login(loginPayload)
            .pipe(
              map(({ user, token }) =>
                UserActions.loadUserSuccess({ user, token })
              )
            );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UserActions.loadUserFailure({ error });
        },
      })
    )
  );

  checkLocalToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.checkLocalToken),
      fetch({
        run: () =>
          this.authService
            .checkToken()
            .pipe(
              map(({ token }) =>
                UserActions.loadUserSuccess({ user: null, token })
              )
            ),
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService
  ) {}

  ngrxOnInitEffects(): Action {
    return UserActions.checkLocalToken();
  }
}
