import { userFeature } from './user.reducer';
import { createSelector } from '@ngrx/store';

export const { selectLoaded, selectToken } = userFeature;

export const selectLoginState = createSelector(selectToken, (token) => !!token);
