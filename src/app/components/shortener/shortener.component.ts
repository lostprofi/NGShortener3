import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-shortener',
    templateUrl: './shortener.component.html',
    styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    shortURL = 'http://localhost';

    cutForm = this.fb.group({
        fullURL: ['', Validators.required],
    })

    ngOnInit(): void {
    }

}
