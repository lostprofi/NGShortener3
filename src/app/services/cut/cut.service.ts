import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CutService {
    constructor(private _http: HttpClient) {}

    cutURL(fullURL: string) {

        const userToken = JSON.parse(localStorage.getItem('userToken'));

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            }),
        };

        const body = JSON.stringify({
            fullURL
        });

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

    addDescription(desc: string, cutUrl: string): Observable<any>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            }),
        };

        const body = JSON.stringify({
            desc,
        });

        return this._http.put(cutUrl, body, options);
    }

    addTag(tagData: string, cutUrl: string): Observable<any>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'x-auth-token': userToken,
            }),
        };
        console.log(`${cutUrl}?tag=${tagData}`);

        return this._http.put(`${cutUrl}?tag=${tagData}`, {}, options );
    }

}
