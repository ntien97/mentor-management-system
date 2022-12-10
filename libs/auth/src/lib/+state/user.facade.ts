import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as UserActions from './user.actions';
import * as UserSelectors from './user.selectors';

@Injectable()
export class UserFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(UserSelectors.selectLoaded));

  isLogin$ = this.store.pipe(select(UserSelectors.selectLoginState));

  login(payload: { email: string; password: string }, returnUrl?: string) {
    this.store.dispatch(UserActions.login({ payload, returnUrl }));
  }

  logout() {
    this.store.dispatch(UserActions.logout());
  }
}
