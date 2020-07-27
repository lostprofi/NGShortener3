import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CheckAuthForm } from '../../../classes/validation/check-auth-form';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
    constructor(private fb: FormBuilder,
    private checkAuthForm: CheckAuthForm,
    private authService: AuthService) { }

  authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], password: [''],
  }, {
      asyncValidators: this.checkAuthForm.validate.bind(this.checkAuthForm), updateOn: 'change',

  });

  onSubmit():void {
      this.authService.signIn(this.authForm.get('email').value);
  }

  ngOnInit(): void { }
}
