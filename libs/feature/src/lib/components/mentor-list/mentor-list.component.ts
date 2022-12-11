import { Component, Inject, Injector, Input } from '@angular/core';
import { UserFacade } from '../../+state/user.facade';
import { trackByUser, UserRole } from '@mentor-management-system/util';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { UserDialogComponent } from '../dumb/user-dialog/user-dialog.component';
import { UserDialogOutputType } from '../dumb/user-dialog/user-dialog.type';

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
  private readonly dialog = this.dialogService.open<UserDialogOutputType>(
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
    this.dialog.subscribe({
      next: (output) => {
        if (output) {
          const { user } = output;
          this.userFacade.createMentor(user);
        }
      },
    });
  }
}
