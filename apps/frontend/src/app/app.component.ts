import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mentor-management-system-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly router: Router) {}

  get isNotLogin(): boolean {
    return !this.router.url.startsWith('/login');
  }
}
