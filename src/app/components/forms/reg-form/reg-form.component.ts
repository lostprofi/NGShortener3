import { CheckUserExist } from 'src/app/classes/validation/check-user-exist';
import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/services/reg/reg.service';
import {
    FormGroup,
    FormControl,
    Validators,
    ValidationErrors,
    FormGroupDirective,
} from '@angular/forms';


@Component({
    selector: 'app-reg-form',
    templateUrl: './reg-form.component.html',
    styleUrls: ['./reg-form.component.css'],
    providers: [RegService],
})
export class RegFormComponent implements OnInit {
    constructor(private _regService: RegService, private checkUserExist: CheckUserExist) {}

  regForm: FormGroup = new FormGroup(
      {
          username: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.email, Validators.required], [this.checkUserExist.validate.bind(this.checkUserExist)]),
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

  onSubmit(regFormDirective: FormGroupDirective): void {
      const regData = {
          username: this.regForm.value.username,
          email: this.regForm.value.email,
          password: this.regForm.value.password,
          passwordConfirm: this.regForm.value.passwordConfirm,
      };

      this._regService.regUser(regData).subscribe(
          (res) => console.log(res),
          (error) => {
              console.log(error.error.errors);
          }
      );

      regFormDirective.resetForm();
  }

  ngOnInit(): void {
      console.log(this.regForm);
  }
}
