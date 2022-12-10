import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '../../+state/auth.facade';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  get returnUrl(): string {
    const { returnUrl } = this.activatedRoute.snapshot.queryParams;

    return returnUrl || '';
  }

  login() {
    // todo: consider this form value
    this.authFacade.login({
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    });
  }
}
