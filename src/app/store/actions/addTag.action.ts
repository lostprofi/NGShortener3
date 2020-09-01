import { UrlDataObj } from '../../interfaces/shortener';
import { createAction, props } from '@ngrx/store';

export const addTag = createAction('[Edit Dialog Component] addTag', props<{tagData: string, cutUrl: string}>());
export const addTagDone = createAction('[Edit Dialog Component] addTagDone', props<{payload: UrlDataObj}>());
