import { UrlDataObj } from './../../interfaces/shortener';
import {createReducer, on, Action, State, createFeatureSelector} from '@ngrx/store';
import { cutDone } from '../actions/cut.action';

/*interface CurrentShortUrlData {
    currentShortUrlData: UrlDataObj[] | [];
}*/

// Selectors

export const urlDataObjSelector = createFeatureSelector<State<UrlDataObj[] | []>>('currentShortUrlData');

// Reducers

const initialState: UrlDataObj[] | [] = [];

const shortenerReducer = createReducer(initialState,
    on(cutDone, (state, { payload }) => {

        console.log(payload);

        const urlDataObjIsExist = state.find((el: UrlDataObj) => el.fullURL === payload.fullURL);

        if (urlDataObjIsExist){
            return state;
        }

        const currentShortUrlDataClone = [...state];

        currentShortUrlDataClone.push(payload);

        return currentShortUrlDataClone;
    }));

export const reducer = (state: UrlDataObj[] | [], action: Action) => shortenerReducer(state, action);
