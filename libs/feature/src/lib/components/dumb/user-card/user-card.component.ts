import { Component, Input } from '@angular/core';
import { IUser } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: IUser;
}
