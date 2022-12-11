import { inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as UserSelectors from './user.selectors';
import * as UserActions from './user.actions';
import { UserCreate, UserRole } from '@mentor-management-system/util';

@Injectable()
export class UserFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(UserSelectors.selectLoaded));
  mentors$ = this.store.pipe(select(UserSelectors.selectMentors));
  students$ = this.store.pipe(select(UserSelectors.selectStudents));

  init(role: UserRole) {
    switch (role) {
      case UserRole.MENTOR:
        this.store.dispatch(UserActions.initStudent());
        break;
      case UserRole.STUDENT:
        this.store.dispatch(UserActions.initMentor());
        break;
      case UserRole.SUPER:
        this.store.dispatch(UserActions.initStudent());
        this.store.dispatch(UserActions.initMentor());
        break;
    }
  }

  createStudent(student: UserCreate) {
    this.store.dispatch(UserActions.createStudent({ student }));
  }

  createMentor(mentor: UserCreate) {
    this.store.dispatch(UserActions.createMentor({ mentor }));
  }
}
