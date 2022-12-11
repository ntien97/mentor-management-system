import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { IUser } from '@mentor-management-system/util';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Component({
  selector: 'mentor-management-system-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.less'],
})
export class UserCardComponent {
  @Input() user!: IUser;
  @Input() canEdit = false;

  @Output() userDelete = new EventEmitter<number>();

  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService
  ) {}

  userEdit() {
    this.alertService
      .open('The feature is currently under maintenace', {
        label: 'Error',
        status: TuiNotification.Error,
      })
      .subscribe();
  }
}
