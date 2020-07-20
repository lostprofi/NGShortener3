import { Injectable } from '@angular/core';
import { ValidationService } from 'src/app/services/validation/validation.service';
import { AsyncValidator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class CheckUserExist implements AsyncValidator {

    constructor(private validService: ValidationService){

    }

    validate(control: AbstractControl): Observable<ValidationErrors|null>{
        return this.validService.checkUserExist(control.value).pipe(map(isUserExist => (isUserExist ? {userIsExist: true} : null)),
        catchError(() => of(null)));
    }

}
