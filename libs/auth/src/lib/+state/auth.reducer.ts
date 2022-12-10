import { createFeature, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { IUser } from '@mentor-management-system/util';

export interface UserState {
  loaded: boolean;
  user: IUser | undefined;
  error: Error | undefined;

  token: string | undefined;
}

export const initialUserState: UserState = {
  loaded: false,
  user: undefined,
  error: undefined,
  token: undefined,
};

const reducer = createReducer(
  initialUserState,
  on(AuthActions.login, (state) => ({
    ...state,
    loaded: false,
    error: undefined,
  })),
  on(AuthActions.loadAuthSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
  })),
  on(AuthActions.loadAuthFailure, (state, { error }) => ({ ...state, error }))
);

export const userFeature = createFeature({ name: 'auth', reducer });
