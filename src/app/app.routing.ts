import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AdminPagesLayoutComponent} from './layouts/admin-pages-layout/admin-pages-layout.component';
import {AuthPagesLayoutComponent} from './layouts/auth-pages-layout/auth-pages-layout.component';

const routes: Routes = [
  /*  {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },*/ {
        path: '',
        component: AdminPagesLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './admin-pages/admin-pages.module#AdminPagesModule'
            }]
    },{
        path: '',
        component: AuthPagesLayoutComponent,
        children: [
            {
                path: 'auth',
                loadChildren: './auth-pages/auth-pages.module#AuthPagesModule'
            }]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
