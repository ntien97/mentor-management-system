import { createFeature, createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from '@mentor-management-system/util';

export interface UserState {
  loaded: boolean;
  user: User | null;
  error: Error | null;

  token: string | null;
}

export const initialUserState: UserState = {
  loaded: false,
  user: null,
  error: null,
  token: null,
};

const reducer = createReducer(
  initialUserState,
  on(UserActions.login, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUserSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
);

export const userFeature = createFeature({ name: 'user', reducer });
