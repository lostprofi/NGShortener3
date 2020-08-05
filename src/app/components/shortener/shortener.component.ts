import { cut } from './../../store/actions/cut.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { CutService } from 'src/app/services/cut/cut.service';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-shortener',
    templateUrl: './shortener.component.html',
    styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

    constructor(private fb: FormBuilder, private cutService: CutService, private store: Store) { }

    cutForm = this.fb.group({
        fullURL: ['', Validators.required],
    });


    onCut(control: AbstractControl, formDirective: FormGroupDirective): void {

        this.store.dispatch(cut({fullUrl: control.value}));
        formDirective.resetForm();

    }

    ngOnInit(){

    }
}
