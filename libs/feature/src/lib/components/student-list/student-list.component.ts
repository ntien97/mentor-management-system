import { Component, Input } from '@angular/core';
import { trackByUser } from '@mentor-management-system/util';
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

  @Input() canEdit = false;

  constructor(public readonly userFacade: UserFacade) {}
}
