import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-short-form-list-container',
    templateUrl: './short-form-list-container.component.html',
    styleUrls: ['./short-form-list-container.component.css']
})
export class ShortFormListContainerComponent implements OnInit {

    constructor() { }

    URLdataObj = {};

    catchCutURL(data){
        this.URLdataObj = data;

    }

    ngOnInit(): void {
    }

}
