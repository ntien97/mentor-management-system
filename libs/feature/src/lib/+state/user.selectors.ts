import { userAdapter, userFeature } from './user.reducer';
import { createSelector } from '@ngrx/store';
import { IUser, UserRole } from '@mentor-management-system/util';

export const { selectLoaded } = userFeature;
const { selectUserState } = userFeature;
const { selectAll } = userAdapter.getSelectors();

export const selectMentors = createSelector(selectUserState, (state) =>
  selectAll(state).filter((user: IUser) => user.role === UserRole.MENTOR)
);

export const selectStudents = createSelector(selectUserState, (state) =>
  selectAll(state).filter((user: IUser) => user.role === UserRole.STUDENT)
);
