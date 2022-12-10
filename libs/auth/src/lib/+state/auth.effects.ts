import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as AuthActions from './auth.actions';
import { AuthService } from '../services/auth.service';
import { map, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects implements OnInitEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      fetch({
        run: ({ payload, returnUrl }) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.authService.login(payload).pipe(
            map(({ user, token }) => {
              this.router.navigate([returnUrl || '/']);
              return AuthActions.loadAuthSuccess({ user, token });
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return AuthActions.loadAuthFailure({ error });
        },
      })
    )
  );

  checkLocalToken$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.checkLocalToken),
      fetch({
        run: () =>
          this.authService
            .checkToken()
            .pipe(
              map(({ token, user }) =>
                AuthActions.loadAuthSuccess({ user, token })
              )
            ),
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        switchMap(() => this.authService.logout()),
        map((loggedOut) => loggedOut && this.router.navigate(['/login']))
      ),
    // todo: remove after calling logout api
    { dispatch: false }
  );

  constructor(
    private readonly actions$: Actions,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngrxOnInitEffects(): Action {
    return AuthActions.checkLocalToken();
  }
}
