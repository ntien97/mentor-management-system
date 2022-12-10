import { createFeature, createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { User } from '@mentor-management-system/util';

export interface UserState {
  loaded: boolean;
  user: User | null;
  error: Error | null;
}

export const initialUserState: UserState = {
  loaded: false,
  user: null,
  error: null,
};

const reducer = createReducer(
  initialUserState,
  on(UserActions.login, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    user,
  })),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
);

export const userFeature = createFeature({ name: 'user', reducer });
