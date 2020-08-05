import { UrlDataObj } from './../../interfaces/shortener';
import { createAction, props } from '@ngrx/store';

export const cut = createAction('[Shortener Component] Cut', props<{fullUrl: string}>());
export const cutDone = createAction('[Shortener Component] Cut Done', props<{payload: UrlDataObj}>());
