import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserFacade } from '../../+state/user.facade';

@Component({
  selector: 'mentor-management-system-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private readonly userFacade: UserFacade) {}

  login() {
    // todo: consider this form value
    this.userFacade.login({
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    });
  }
}
