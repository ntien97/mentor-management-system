import { userFeature } from './auth.reducer';
import { createSelector } from '@ngrx/store';

export const { selectLoaded, selectToken, selectUser } = userFeature;

export const selectLoginState = createSelector(selectToken, (token) => !!token);

export const selectRole = createSelector(selectUser, (user) => user?.role);
