import { Component } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { trackByUser, UserRole } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss'],
})
export class MentorListComponent {
  readonly utils = {
    trackByMentor: trackByUser,
  };

  constructor(public readonly userFacade: UserFacade) {
    // todo: init by role
    this.userFacade.init(UserRole.SUPER);
  }
}
