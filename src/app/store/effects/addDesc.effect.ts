import { UrlDataObj } from './../../interfaces/shortener';
import { addDescDone } from './../actions/addDesc.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CutService } from 'src/app/services/cut/cut.service';
import { Injectable } from '@angular/core';
import { addDesc } from '../actions/addDesc.action';
import { mergeMap, map } from 'rxjs/operators';


@Injectable()

export class AddDescEffect {
    constructor(private actions$: Actions, private cutService: CutService ){}

    loadDescToDb$ = createEffect(() => this.actions$.pipe(
        ofType(addDesc),
        mergeMap((action) => this.cutService.addDescription(action.desc, action.cutUrl)
            .pipe(map((obj: UrlDataObj) => addDescDone({payload: obj})))
        )
    ));
}
