import { mentorAdapter, mentorFeature } from './mentor.reducer';
import { createSelector } from '@ngrx/store';

export const { selectLoaded } = mentorFeature;
const { selectMentorState } = mentorFeature;
const { selectAll } = mentorAdapter.getSelectors();

export const selectMentors = createSelector(selectMentorState, (state) =>
  selectAll(state)
);
