import { Action, createFeatureSelector, createReducer, on, State } from '@ngrx/store';
import { addDescDone } from '../actions/addDesc.action';
import { cutDone } from '../actions/cut.action';
import { UrlDataObj } from './../../interfaces/shortener';

/*interface CurrentShortUrlData {
    currentShortUrlData: UrlDataObj[] | [];
}*/

// Selectors

export const urlDataObjSelector = createFeatureSelector<State<UrlDataObj[] | []>>('currentShortUrlData');

// Reducers


const initialState: UrlDataObj[] | [] = [];

const shortenerReducer = createReducer(initialState,
    on(cutDone, (state, { payload }) => {

        const urlDataObjIsExist = state.find((el: UrlDataObj) => el.fullURL === payload.fullURL);

        if (urlDataObjIsExist){
            return state;
        }

        const currentShortUrlDataClone = [...state];

        currentShortUrlDataClone.push(payload);

        return currentShortUrlDataClone;
    }),
    on(addDescDone, (state, {payload}): UrlDataObj[] | [] => {

        const stateCopy = [...state];

        const newState =  stateCopy.map((el: UrlDataObj) => {
            if (el.shortenURL === payload.shortenURL){
                return el = {...payload};
            }else{
                return el;
            }
        });

        return newState;
    }),
);

export const reducer = (state: UrlDataObj[] | [], action: Action) => shortenerReducer(state, action);
