import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/services/reg/reg.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  providers: [RegService],
})
export class RegFormComponent implements OnInit {
  constructor(private regService: RegService) {}

  authForm: FormGroup = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
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

  onSubmit(regFormData: NgForm) {
    const regData = {
      username: regFormData.value.username,
      email: regFormData.value.email,
      password: regFormData.value.password,
      passwordConfirm: regFormData.value.passwordConfirm,
    };

    this.regService.regUser(regData).subscribe(
      (res) => console.log(res),
      (error) => {
        console.log(error.error.errors);
      }
    );

    regFormData.resetForm();
  }

  ngOnInit(): void {
    console.log(this.authForm);
  }
}
