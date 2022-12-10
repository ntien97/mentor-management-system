import { createAction, props } from '@ngrx/store';
import { IUser } from '@mentor-management-system/util';

export const initMentor = createAction('[Mentor] Init');
export const initStudent = createAction('[Student] Init');

export const loadUserSuccess = createAction(
  '[User/API] Load User Success',
  props<{ users: IUser[] }>()
);

export const loadUserFailure = createAction(
  '[User/API] Load User Failure',
  props<{ error: Error | null }>()
);
