import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as UserActions from './user.actions';
import { AuthService } from '../services/auth.service';
import { map, switchMap } from 'rxjs';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects implements OnInitEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.login),
      fetch({
        run: ({ payload, returnUrl }) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.authService.login(payload).pipe(
            map(({ user, token }) => {
              this.router.navigate([returnUrl || '/']);
              return UserActions.loadUserSuccess({ user, token });
            })
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

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UserActions.logout),
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
    return UserActions.checkLocalToken();
  }
}
