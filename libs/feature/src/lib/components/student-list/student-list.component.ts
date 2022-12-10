import { Component } from '@angular/core';
import { trackByUser, UserRole } from '@mentor-management-system/util';
import { UserFacade } from '../../+state/user.facade';

@Component({
  selector: 'mentor-management-system-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  readonly utils = {
    trackByStudent: trackByUser,
  };

  constructor(public readonly userFacade: UserFacade) {
    // todo: init by role
    this.userFacade.init(UserRole.SUPER);
  }
}
