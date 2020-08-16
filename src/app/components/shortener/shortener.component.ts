import { cut } from './../../store/actions/cut.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroupDirective, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-shortener',
    templateUrl: './shortener.component.html',
    styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private store: Store) { }

    cutForm = this.fb.group({
        fullURL: ['', [Validators.required, this.urlValidator]],
    });  

    urlValidator(control: AbstractControl): ValidationErrors|null{
        const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

        return urlPattern.test(control.value) ? null : { urlInvalid: true};
    }


    onCut(control: AbstractControl, formDirective: FormGroupDirective): void {

        this.store.dispatch(cut({fullUrl: control.value}));
        formDirective.resetForm();

    }
   

    ngOnInit(){

    }
}
