import { Component } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { UserRole } from '@mentor-management-system/util';
import { AuthFacade } from '@mentor-management-system/auth';

@Component({
  selector: 'mentor-management-system-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  readonly utils = {
    UserRole,
  };

  constructor(
    public readonly userFacade: UserFacade,
    readonly authFacade: AuthFacade
  ) {
    this.userFacade.init(UserRole.SUPER);
  }
}
