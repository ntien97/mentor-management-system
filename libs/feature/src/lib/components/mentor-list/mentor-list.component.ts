import { Component, Input } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { trackByUser } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss'],
})
export class MentorListComponent {
  readonly utils = {
    trackByMentor: trackByUser,
  };

  @Input() canEdit = false;

  constructor(public readonly userFacade: UserFacade) {}

  onNewMentor() {
    throw new Error('not implemented yet');
  }
}
