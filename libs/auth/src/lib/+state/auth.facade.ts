import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(AuthSelectors.selectLoaded));

  isLogin$ = this.store.pipe(select(AuthSelectors.selectLoginState));

  login(payload: { email: string; password: string }, returnUrl?: string) {
    this.store.dispatch(AuthActions.login({ payload, returnUrl }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
