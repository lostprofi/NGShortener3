import { UrlDataObj } from './../../interfaces/shortener';
import { createAction, props } from '@ngrx/store';

export const addDesc = createAction('[Edit Dialog Component] addDesc', props<{desc: string, cutUrl: string}>());
export const addDescDone = createAction('[Edit Dialog Component] addDescDone', props<{payload: UrlDataObj}>());
