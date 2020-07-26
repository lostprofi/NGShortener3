import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetFingerprintService } from '../get-fingerprint/get-fingerprint.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient,
              private getFingerPrint: GetFingerprintService,
              private router: Router) { }

  async authUser(email: string) {
    const fingerprint = await this.getFingerPrint.getFingerprint();

    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };

    const body = JSON.stringify({ email, fingerprint });

    this.http.post('http://localhost:5000/auth/login', body, options)
      .subscribe(res => {
        this.router.navigate(['']);
        localStorage.setItem('userToken', JSON.stringify(res));
        console.log(`Token is ${res}`);
      }, error => console.log(error)
      );
  }
}
