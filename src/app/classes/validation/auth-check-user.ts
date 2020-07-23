import { ValidationService } from './../../services/validation/validation.service';
import { Injectable } from '@angular/core';

import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class AuthCheckUser implements AsyncValidator {

    constructor(private validService: ValidationService){

    }

    validate(control: AbstractControl): Observable<ValidationErrors|null>{
        return this.validService.checkUserExist(control.value).pipe(map(isUserExist => (isUserExist ? null : {userIsExist: true})),
        catchError(() => of({userIsExist: true})));
    }

}
