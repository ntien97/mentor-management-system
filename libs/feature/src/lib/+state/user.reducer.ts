import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import * as UserActions from './user.actions';
import { IUser } from '@mentor-management-system/util';

export interface UserState extends EntityState<IUser> {
  selectedId: string | null;
  loaded: boolean;
  error: Error | null;
}

export const userAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();
export const initialUserState: UserState = userAdapter.getInitialState({
  selectedId: null,
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialUserState,
  on(UserActions.initMentor, UserActions.initStudent, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUserSuccess, (state, { users }) =>
    userAdapter.upsertMany(users, { ...state, loaded: true })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const userFeature = createFeature({
  name: 'user',
  reducer,
});
