import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';
import { tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqPurpose = request.params.get('purpose');

    return next.handle(request).pipe(tap(
      (res: HttpResponse<string>) => {

        if (res instanceof HttpResponse && reqPurpose === 'reg'){
          this.dialog.open(DialogComponent, {data: {msg: res.body}});
        }
      }
    ));
  }
}
