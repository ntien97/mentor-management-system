import { Component } from '@angular/core';
import { AuthFacade } from '../../+state/auth.facade';

@Component({
  selector: 'mentor-management-system-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {
  constructor(readonly authFacade: AuthFacade) {}
}
