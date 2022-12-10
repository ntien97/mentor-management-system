import { createAction, props } from '@ngrx/store';
import { Mentor } from '@mentor-management-system/util';

export const initMentor = createAction('[Mentor Page] Init');

export const loadMentorSuccess = createAction(
  '[Mentor/API] Load Mentor Success',
  props<{ mentors: Mentor[] }>()
);

export const loadMentorFailure = createAction(
  '[Mentor/API] Load Mentor Failure',
  props<{ error: Error | null }>()
);
