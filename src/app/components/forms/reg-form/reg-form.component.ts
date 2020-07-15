import { Component, OnInit } from '@angular/core';
import { RegService } from 'src/app/services/reg/reg.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css'],
  providers: [RegService],
})
export class RegFormComponent implements OnInit {

  constructor(private regService: RegService) { }

  errors: [any];

  onSubmit(regFormData: NgForm){

    const regData = {
      username: regFormData.value.username,
      email: regFormData.value.email,
      password: regFormData.value.password,
      passwordConfirm: regFormData.value.passwordConfirm,
    };

    this.regService.regUser(regData).subscribe(res => console.log(res), (error) => {
      console.log(error.error.errors);
      this.errors = error.error.errors;
    });

    regFormData.resetForm();
  }

  ngOnInit(): void {
  }

}
