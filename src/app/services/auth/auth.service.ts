import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { GetFingerprintService } from
  '../get-fingerprint/get-fingerprint.service'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor (private http: HttpClient,
    private getFingerPrint: GetFingerprintService) { }

  async authUser (email: string) {
    const fingerprint = await this.getFingerPrint.getFingerprint()

    const options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }

    const body = JSON.stringify({ email, fingerprint })

    this.http.post('http://localhost:5000/auth/login', body, options)
      .subscribe(res => console.log(res), error => console.log(error))
  }
}
