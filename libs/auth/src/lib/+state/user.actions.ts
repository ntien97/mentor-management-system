import { createAction, props } from '@ngrx/store';
import { LoginPayload, User } from '@mentor-management-system/util';

export const checkLocalToken = createAction('[User] Check Local Token');
export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ user: User | null; token: string | null }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: Error }>()
);

export const login = createAction('[User Page] Login', props<LoginPayload>());
