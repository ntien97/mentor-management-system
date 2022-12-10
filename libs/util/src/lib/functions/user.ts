import { IUser } from '../interfaces';
import { TrackByFunction } from '@angular/core';

export const trackByUser: TrackByFunction<IUser> = (index, user) => {
  return user ? user.id : undefined;
};
