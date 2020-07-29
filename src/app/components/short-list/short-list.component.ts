import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-short-list',
    templateUrl: './short-list.component.html',
    styleUrls: ['./short-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShortListComponent implements OnInit, OnChanges {

    constructor() { }

    URLdataObjArr = [];
    @Input() URLDataObj;

    ngOnInit(): void {

    }

    ngOnChanges(): void {
        this.URLdataObjArr.push(this.URLDataObj);

    }

}
