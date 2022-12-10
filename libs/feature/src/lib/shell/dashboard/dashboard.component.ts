import { Component } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { UserRole } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(public readonly userFacade: UserFacade) {
    // todo: init by role
    this.userFacade.init(UserRole.SUPER);
  }
}
