import { UrlDataObj } from './../../interfaces/shortener';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CutService } from 'src/app/services/cut/cut.service';
import { Injectable } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { addTag, addTagDone } from '../actions/addTag.action';

@Injectable()

export class AddTagEffect {
    constructor(private actions$: Actions, private cutService: CutService ){}

    loadTagToDb$ = createEffect(() => this.actions$.pipe(
        ofType(addTag),
        mergeMap((action) =>
        {
            alert('ok');
            return this.cutService.addTag(action.tagData, action.cutUrl)
                .pipe(map((obj: UrlDataObj) => addTagDone({payload: obj})));
        })
    ));
}
