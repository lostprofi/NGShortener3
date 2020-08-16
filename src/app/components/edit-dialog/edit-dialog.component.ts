import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

    constructor(public fb: FormBuilder) { }

    descForm = this.fb.group({
        addDesc: ['', [Validators.required, Validators.maxLength(100)]],
    });

    tagForm = this.fb.group({
        tagControl: ['', [Validators.required, Validators.maxLength(10)]]
    });

    ngOnInit(): void {
    }

}
