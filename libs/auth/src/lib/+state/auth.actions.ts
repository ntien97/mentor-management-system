import { createAction, props } from '@ngrx/store';
import { LoginPayload, IUser } from '@mentor-management-system/util';

export const checkLocalToken = createAction('[Auth] Check Local Token');
export const loadAuthSuccess = createAction(
  '[Auth/API] Load Auth Success',
  props<{ user?: IUser; token: string | undefined }>()
);

export const loadAuthFailure = createAction(
  '[Auth/API] Load Auth Failure',
  props<{ error: Error }>()
);

export const login = createAction(
  '[Auth Page] Login',
  props<{ payload: LoginPayload; returnUrl?: string }>()
);
export const logout = createAction('[Auth Page] Logout');
