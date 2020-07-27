import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    constructor(private authService: AuthService) { }

    isAuth = false;
    authSubscription = new Subscription();

    signOut(): void{
        this.authService.signOut();
    }

    ngOnInit(): void {
        this.authSubscription = this.authService.checkAuth().subscribe(authResult => this.isAuth = authResult);
    }

    ngOnDestroy(): void {
        this.authSubscription.unsubscribe();
    }

    

}
