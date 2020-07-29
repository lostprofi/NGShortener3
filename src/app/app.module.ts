import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RegFormComponent } from './components/forms/reg-form/reg-form.component';
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { ShortFormListContainerComponent } from './components/short-form-list-container/short-form-list-container.component';
import { ShortListComponent } from './components/short-list/short-list.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        DialogComponent,
        RegFormComponent,
        AuthFormComponent,
        ShortenerComponent,
        ShortFormListContainerComponent,
        ShortListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        HttpClientModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatIconModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
