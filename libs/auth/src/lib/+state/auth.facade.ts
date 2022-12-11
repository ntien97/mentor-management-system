import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';
import { Observable } from 'rxjs';
import { UserRole } from '@mentor-management-system/util';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  loaded$ = this.store.pipe(select(AuthSelectors.selectLoaded));

  isLogin$ = this.store.pipe(select(AuthSelectors.selectLoginState));

  role$: Observable<UserRole | undefined> = this.store.pipe(
    select(AuthSelectors.selectRole)
  );

  login(payload: { email: string; password: string }, returnUrl?: string) {
    this.store.dispatch(AuthActions.login({ payload, returnUrl }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
