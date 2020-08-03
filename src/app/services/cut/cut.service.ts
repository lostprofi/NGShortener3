import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CutService {
    constructor(private _http: HttpClient) {}

    cutURL(control: AbstractControl) {

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        console.log(userToken);

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            }),
        };

        const body = {
            fullURL: control.value,
        };

        return this._http.post('http://localhost:5000/shortcuts', body, options);
    }

    getURLDataArr(): Observable<any>{

        const userToken = JSON.parse(localStorage.getItem('userToken'));
        console.log(userToken);

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            }),
        };

        return this._http.get('http://localhost:5000/shortcuts', options);
    }

}
