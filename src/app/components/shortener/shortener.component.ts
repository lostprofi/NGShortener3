import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, FormGroupDirective } from '@angular/forms';
import { CutService } from 'src/app/services/cut/cut.service';

@Component({
    selector: 'app-shortener',
    templateUrl: './shortener.component.html',
    styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

    constructor(private fb: FormBuilder, private cutService: CutService) { }

    cutForm = this.fb.group({
        fullURL: ['', Validators.required],
    });

    onCut(control: AbstractControl, formDirective: FormGroupDirective): void {
        this.cutService.cutURL(control).subscribe(res => {
            console.log(res);
        });
        formDirective.resetForm();
    }

    ngOnInit(){


    }
}
