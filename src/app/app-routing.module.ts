import { ShortFormListContainerComponent } from './components/short-form-list-container/short-form-list-container.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegFormComponent } from './components/forms/reg-form/reg-form.component';
import { AuthFormComponent } from './components/forms/auth-form/auth-form.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [
    {
        path: 'reg',
        component: RegFormComponent
    },
    {
        path: 'auth',
        component: AuthFormComponent,
    },
    {
        path: '',
        component: ShortFormListContainerComponent,
        canActivate: [AuthGuard],

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
