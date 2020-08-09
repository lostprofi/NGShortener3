import { Component, OnInit } from '@angular/core';
import { Store, select, State } from '@ngrx/store';
import { urlDataObjSelector } from 'src/app/store/reducers/shortener.reducer';
import { Observable } from 'rxjs';
import { UrlDataObj } from '../../interfaces/shortener';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-short-url-list',
    templateUrl: './short-url-list.component.html',
    styleUrls: ['./short-url-list.component.css']
})
export class ShortUrlListComponent implements OnInit {

    constructor(private store: Store, private _snackBar: MatSnackBar) { }

    urlDataList$: Observable<State<UrlDataObj[]>>;

    ngOnInit(): void {
        this.urlDataList$ = this.store.pipe(select(urlDataObjSelector));
    }

    handleCopyClick(event): void{
        event.target.style.color = 'green';
        const shortUrl = event.target.previousElementSibling.text;
        navigator.clipboard.writeText(shortUrl);
        this._snackBar.open('URL is copied');
        setTimeout(()=>{
            this._snackBar.dismiss();
        }, 2000);
    }

}