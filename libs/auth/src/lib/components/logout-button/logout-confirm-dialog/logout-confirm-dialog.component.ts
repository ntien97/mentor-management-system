import { Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';

@Component({
  selector: 'mentor-management-system-logout-confirm-dialog',
  templateUrl: './logout-confirm-dialog.component.html',
  styleUrls: ['./logout-confirm-dialog.component.scss'],
})
export class LogoutConfirmDialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    readonly context: TuiDialogContext<boolean>
  ) {}
}
