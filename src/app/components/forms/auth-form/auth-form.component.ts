import { AuthCheckUser } from 'src/app/classes/validation/auth-check-user';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CheckAuthPswrd } from '../../../classes/validation/check-auth-pswrd';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css'],
})
export class AuthFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
     private authCheckUser: AuthCheckUser,
      private checkAuthPswrd: CheckAuthPswrd,
      private authService: AuthService) { }

  authForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [''],
  }, {
    asyncValidators: this.checkAuthPswrd.validate.bind(this.checkAuthPswrd),
    updateOn: 'change',
    
  });

  onSubmit() {
    this.authService.authUser(this.authForm.get('email').value);
  }

  ngOnInit(): void {
  }
}
