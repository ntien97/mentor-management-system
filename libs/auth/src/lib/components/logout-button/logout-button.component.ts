import { Component, Inject, Injector } from '@angular/core';
import { AuthFacade } from '../../+state/auth.facade';
import { TuiDialogService } from '@taiga-ui/core';
import { LogoutConfirmDialogComponent } from './logout-confirm-dialog/logout-confirm-dialog.component';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'mentor-management-system-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss'],
})
export class LogoutButtonComponent {
  constructor(
    private readonly authFacade: AuthFacade,
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector
  ) {}

  onLogout() {
    this.dialogService
      .open<boolean>(
        new PolymorpheusComponent(LogoutConfirmDialogComponent, this.injector),
        {
          dismissible: true,
        }
      )
      .subscribe({
        next: (ok) => {
          if (ok) {
            this.authFacade.logout();
          }
        },
      });
  }
}
