import { Component, Inject, Injector, Input } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { IUser, trackByUser, UserRole } from '@mentor-management-system/util';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { UserDialogComponent } from '../dumb/user-dialog/user-dialog.component';
import { UserDialogOutputType } from '../dumb/user-dialog/user-dialog.type';
import { ConfirmDeleteDialogOutputType } from '../dumb/confirm-delete-dialog/confirm-delete-dialog.type';
import { ConfirmDeleteDialogComponent } from '../dumb/confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'mentor-management-system-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.scss'],
})
export class MentorListComponent {
  readonly utils = {
    trackByMentor: trackByUser,
  };
  @Input() canEdit = false;
  private readonly createDialog = this.dialogService.open<UserDialogOutputType>(
    new PolymorpheusComponent(UserDialogComponent, this.injector),
    {
      data: {
        type: 'Create',
        role: UserRole.MENTOR,
      },
      dismissible: true,
    }
  );

  constructor(
    public readonly userFacade: UserFacade,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  openNewDialog() {
    this.createDialog.subscribe({
      next: (output) => {
        if (output) {
          const { user } = output;
          this.userFacade.createMentor(user);
        }
      },
    });
  }

  confirmDeleteDialog(user: IUser) {
    this.dialogService
      .open<ConfirmDeleteDialogOutputType>(
        new PolymorpheusComponent(ConfirmDeleteDialogComponent, this.injector),
        {
          data: { user },
          dismissible: true,
        }
      )
      .subscribe({
        next: (output) => {
          if (output) {
            const { id } = output;
            this.userFacade.deleteMentor(id);
          }
        },
      });
  }
}
