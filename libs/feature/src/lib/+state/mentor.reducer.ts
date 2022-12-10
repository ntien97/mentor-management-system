import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';

import * as MentorActions from './mentor.actions';
import { Mentor } from '@mentor-management-system/util';

export interface MentorState extends EntityState<Mentor> {
  selectedId: string | null;
  loaded: boolean;
  error: Error | null;
}

export const mentorAdapter: EntityAdapter<Mentor> =
  createEntityAdapter<Mentor>();
export const initialMentorState: MentorState = mentorAdapter.getInitialState({
  selectedId: null,
  loaded: false,
  error: null,
});

const reducer = createReducer(
  initialMentorState,
  on(MentorActions.initMentor, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MentorActions.loadMentorSuccess, (state, { mentors }) =>
    mentorAdapter.setAll(mentors, { ...state, loaded: true })
  ),
  on(MentorActions.loadMentorFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const mentorFeature = createFeature({
  name: 'mentor',
  reducer,
});
