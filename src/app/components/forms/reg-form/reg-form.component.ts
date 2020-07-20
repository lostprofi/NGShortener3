import { CheckUserExist } from 'src/app/classes/validation/check-user-exist';
import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/services/reg/reg.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  providers: [RegService],
})
export class RegFormComponent implements OnInit {
  constructor(private regService: RegService, private validService: ValidationService, private checkUserExist: CheckUserExist) {}

  regForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required], [this.checkUserExist.validate.bind(this)]),
      password: new FormControl('', [Validators.minLength(3), Validators.required]),
      passwordConfirm: new FormControl('', [Validators.required]),
    },
    { validators: [this.pswrdConfValidator] }
  );

  pswrdConfValidator(controlForm: FormGroup): ValidationErrors | null {
    const pswrdCtrl = controlForm.get('password');
    const pswrdCtrlConf = controlForm.get('passwordConfirm');

    if (pswrdCtrl.value !== pswrdCtrlConf.value){
      pswrdCtrlConf.setErrors({pswrdNotConf: true});
    }

    return;
  }

  onSubmit() {
    const regData = {
      username: this.regForm.value.username,
      email: this.regForm.value.email,
      password: this.regForm.value.password,
      passwordConfirm: this.regForm.value.passwordConfirm,
    };

    this.regService.regUser(regData).subscribe(
      (res) => console.log(res),
      (error) => {
        console.log(error.error.errors);
      }
    );

    this.regForm.reset({
      username: {value: '', disabled: true},
      email: {value: '', disabled: true},
      password: {value: '', disabled: true},
      passwordConfirm: {value: '', disabled: true},
    });
  }

  ngOnInit(): void {
    console.log(this.regForm);
  }
}
