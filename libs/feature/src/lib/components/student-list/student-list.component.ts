import { Component, Inject, Injector, Input } from '@angular/core';
import { trackByUser, UserRole } from '@mentor-management-system/util';
import { UserFacade } from '../../+state/user.facade';
import { UserDialogOutputType } from '../dumb/user-dialog/user-dialog.type';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { UserDialogComponent } from '../dumb/user-dialog/user-dialog.component';
import { TuiDialogService } from '@taiga-ui/core';

@Component({
  selector: 'mentor-management-system-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent {
  readonly utils = {
    trackByStudent: trackByUser,
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
          this.userFacade.createStudent(user);
        }
      },
    });
  }
}
