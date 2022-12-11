import { Component, Inject } from '@angular/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import { TuiDialogContext } from '@taiga-ui/core';
import {
  ConfirmDeleteDialogInputType,
  ConfirmDeleteDialogOutputType,
} from './confirm-delete-dialog.type';

@Component({
  selector: 'mentor-management-system-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss'],
})
export class ConfirmDeleteDialogComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<
      ConfirmDeleteDialogOutputType,
      ConfirmDeleteDialogInputType
    >
  ) {}

  get user() {
    return this.context.data.user;
  }

  submit(): void {
    this.context.completeWith({
      id: this.user.id,
    });
  }

  cancel() {
    this.context.completeWith(false);
  }
}
