import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mentor-management-system-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
