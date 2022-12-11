import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '@mentor-management-system/util';

@Component({
  selector: 'mentor-management-system-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() canEdit = false;

  @Output() userDelete = new EventEmitter<number>();
}
