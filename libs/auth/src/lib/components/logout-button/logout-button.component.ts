import { Component } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';

@Component({
  selector: 'mentor-management-system-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {
  constructor(readonly userFacade: UserFacade) {}
}
