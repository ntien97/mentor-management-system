import { Component } from '@angular/core';
import { MentorFacade } from '../../+state/mentor.facade';
import { trackByMentor } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss'],
})
export class MentorListComponent {
  readonly utils = {
    trackByMentor,
  };

  constructor(public readonly mentorFacade: MentorFacade) {}
}
