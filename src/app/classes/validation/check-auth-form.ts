import { AsyncValidator, FormGroup, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CheckAuthForm implements AsyncValidator {
    constructor(private validService: ValidationService) {}

    validate(authForm: FormGroup): Observable<ValidationErrors | null> {
        const email = authForm.get('email').value;
        const password = authForm.get('password').value;

        return this.validService.checkEqPswrd(email, password).pipe(
            map(
                (validationResult) => {
                    if (validationResult === true) {
                        return null;
                    } else if (validationResult.isUserExist === false) {
                        authForm.get('email').setErrors({ userIsExist: true });
                        authForm.get('password').reset('');

                        return;
                    } else {
                        authForm.get('password').setErrors({ isEqlPwd: true });
                        return;
                    }
                },
                catchError(() => of({ isEqlPwd: true }))
            )
        );
    }
}
