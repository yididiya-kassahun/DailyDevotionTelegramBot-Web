import { NgModule } from '@angular/core';

// import {
//     AuthModule,
//     AUTH_SERVICE,
//     // PUBLIC_FALLBACK_PAGE_URI,
//     // PROTECTED_FALLBACK_PAGE_URI
// } from 'ngx-auth';
//

import { AuthenticationService } from './authentication.service';
import { LoginService } from '../login/login.service';
import { StorageService } from '../storage.service';
import { RegisterService } from '../register/register.service';
import {AUTH_SERVICE, AuthModule} from "ngx-auth";

export function factory(authenticationService: AuthenticationService) {
    return authenticationService;
}

@NgModule({
    imports: [ AuthModule ],
    providers: [
        AuthenticationService,
        // { provide: PROTECTED_FALLBACK_PAGE_URI, useValue: '/' },
        //{ provide: PUBLIC_FALLBACK_PAGE_URI, useValue: '/login' },
        {
            provide: AUTH_SERVICE,
            deps: [ AuthenticationService ],
            useFactory: factory
        },
        LoginService,
        StorageService,
        RegisterService
    ]
})
export class AuthenticationModule { }
