import { createAction, props } from '@ngrx/store';
import { IUser, UserCreate } from '@mentor-management-system/util';

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

export const createStudent = createAction(
  '[User/API] Create Student',
  props<{ student: UserCreate }>()
);

export const createMentor = createAction(
  '[User/API] Create Mentor',
  props<{ mentor: UserCreate }>()
);

export const createUserSuccess = createAction(
  '[User/API] Create User Success',
  props<{ user: IUser }>()
);

export const createUserFailure = createAction(
  '[User/API] Create User Failure',
  props<{ error: Error | null }>()
);
