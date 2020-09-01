import { AddTagEffect } from './store/effects/addTag.effect';
import { AddDescEffect } from './store/effects/addDesc.effect';
import { CutEffects } from './store/effects/cut.effects';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { StoreModule } from '@ngrx/store';
import * as ShortenerReducer from './store/reducers/shortener.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ShortUrlListComponent } from './components/short-url-list/short-url-list.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        DialogComponent,
        RegFormComponent,
        AuthFormComponent,
        ShortenerComponent,
        ShortUrlListComponent,
        EditDialogComponent,
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
        MatTooltipModule,
        MatSnackBarModule,
        StoreModule.forRoot({currentShortUrlData: ShortenerReducer.reducer }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([CutEffects, AddDescEffect, AddTagEffect])
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
