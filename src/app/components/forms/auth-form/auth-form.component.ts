import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthCheckUser } from 'src/app/classes/validation/auth-check-user';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private authCheckUser: AuthCheckUser) { }

  authForm: FormGroup;



  initAuthForm(): void{
    this.authForm = this.fb.group({
      email: ['null', [Validators.required, Validators.email], [this.authCheckUser.validate.bind(this)] ],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.initAuthForm();
  }

}
