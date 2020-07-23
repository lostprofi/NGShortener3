import { CheckAuthPswrd } from './../../../classes/validation/check-auth-pswrd';
import { AuthCheckUser } from 'src/app/classes/validation/auth-check-user';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private authCheckUser: AuthCheckUser, private checkAuthPswrd: CheckAuthPswrd) { }

    authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email], /*[this.authCheckUser.validate.bind(this.authCheckUser)]*/],
      password: ['']
    }, {
      asyncValidators: this.checkAuthPswrd.validate.bind(this.checkAuthPswrd),
      updateOn: 'submit'
    });

  ngOnInit(): void {
  }

}
