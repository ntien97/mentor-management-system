import { Mentor } from '../interfaces';
import { TrackByFunction } from '@angular/core';

export const trackByMentor: TrackByFunction<Mentor> = (index, mentor) => {
  return mentor ? mentor.id : undefined;
};
