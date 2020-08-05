import { UrlDataObj } from './../../interfaces/shortener';
import { CutService } from 'src/app/services/cut/cut.service';
import { mergeMap, map } from 'rxjs/operators';
import { cut, cutDone } from './../actions/cut.action';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()

export class CutEffects{

    constructor(private actions$: Actions, private cutService: CutService){}

    loadUrlToCutApi$ = createEffect(() => this.actions$.pipe(
        ofType(cut),
        mergeMap((action) => this.cutService.cutURL(action.fullUrl)
            .pipe(
                map(urlDataObj => (cutDone({payload: urlDataObj as UrlDataObj})))
            ))

    ));

}
