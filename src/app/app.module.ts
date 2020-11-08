import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AdminPagesLayoutComponent} from './layouts/admin-pages-layout/admin-pages-layout.component';
import {AuthPagesLayoutComponent} from './layouts/auth-pages-layout/auth-pages-layout.component';
import {DevotionService} from "./service/devotion/devotion.service";
import {DashboardComponent} from "./admin-pages/dashboard/dashboard.component";
import {AuthenticationService} from "./service/Authentication/authentication.service";
import {AuthPagesModule} from "./auth-pages/auth-pages.module";
import {AuthenticationModule} from "./service/Authentication/authentication.module";
import {
    MatCardModule, MatFormFieldControl, MatFormFieldModule, MatIconModule, MatInputModule,
    MatSelectModule
} from "@angular/material";


@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        AuthPagesModule,
        AuthenticationModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSelectModule,
        MatCardModule,
    ],
    declarations: [
        AppComponent,
        AdminPagesLayoutComponent,
        AuthPagesLayoutComponent
    ],
    providers: [DevotionService,AuthenticationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
