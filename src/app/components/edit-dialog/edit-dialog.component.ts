import { CutService } from 'src/app/services/cut/cut.service';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { addDesc } from 'src/app/store/actions/addDesc.action';
import { addTag } from 'src/app/store/actions/addTag.action';

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
    styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

    constructor(public fb: FormBuilder,
                @Inject (MAT_DIALOG_DATA) public data: {cutUrl: string},
                private store: Store,
                private dialog: MatDialog) { }

    descForm = this.fb.group({
        addDesc: ['', [Validators.required, Validators.maxLength(100)]],
    });

    tagForm = this.fb.group({
        tagControl: ['', [Validators.required, Validators.maxLength(10)]]
    });

    handleAddDesc(): void{
        const desc = this.descForm.get('addDesc').value;
        const {cutUrl} = this.data;
        this.store.dispatch(addDesc({desc, cutUrl}));
        this.dialog.closeAll();
    }

    handleAddTag(): void{
        const tagData = this.tagForm.get('tagControl').value;
        const {cutUrl} = this.data;
        this.store.dispatch(addTag({tagData, cutUrl}));
        this.dialog.closeAll();
    }



    ngOnInit(): void {
        console.log(this.data);
    }

}
