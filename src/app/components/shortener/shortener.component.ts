import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl, FormGroupDirective } from '@angular/forms';
import { CutService } from 'src/app/services/cut/cut.service';

@Component({
    selector: 'app-shortener',
    templateUrl: './shortener.component.html',
    styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

    constructor(private fb: FormBuilder, private cutService: CutService) { }

    URLDataObj = {};
    URLDataArr = [];

    cutForm = this.fb.group({
        fullURL: ['', Validators.required],
    });

    @Output() cutURL = new EventEmitter();

    async onCut(control: AbstractControl, formDirective: FormGroupDirective) {
        await this.cutService.cutURL(control).toPromise().then(res => {
            console.log(res);
            this.URLDataObj = res;
            this.URLDataArr.push(res);
        });
        this.cutURL.emit(this.URLDataObj);
        formDirective.resetForm();
    }

    ngOnInit(){


    }
}
