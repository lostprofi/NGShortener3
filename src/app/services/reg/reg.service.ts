import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { RegData } from 'src/app/interfaces/reg-data';
import { Observable } from 'rxjs';

@Injectable()
export class RegService {
  constructor(private http: HttpClient) {}

  regUser(regData: RegData): Observable<any> {
    const body: string = JSON.stringify(regData);

    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
      observe: 'body' as const,
      params: new HttpParams().set('purpose', 'reg')
    };

    return this.http.post('http://localhost:5000/reg', body, options);
  }
}
