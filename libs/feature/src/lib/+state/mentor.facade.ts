import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as MentorSelectors from './mentor.selectors';

@Injectable()
export class MentorFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(MentorSelectors.selectLoaded));
  mentors$ = this.store.pipe(select(MentorSelectors.selectMentors));
}
