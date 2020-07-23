import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private http: HttpClient) {}

  checkUserExist(email: string): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };

    const body = JSON.stringify({email});

    return this.http.post('http://localhost:5000/validation/checkUserExist', body, options);
  }

  checkEqPswrd(email: string, password: any): Observable<any>{
    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };

    const body = JSON.stringify({email, password});

    return this.http.post('http://localhost:5000/validation/checkEqPswrd', body, options);
  }

}
