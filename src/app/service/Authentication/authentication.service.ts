import {Injectable, OnInit} from '@angular/core';
import {map, tap} from "rxjs/internal/operators";
import {of} from "rxjs/index";
import {Observable} from "rxjs/Rx";
//import map = promise.map;
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {LoginResponseInterface} from "./authentication.interface";
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";
import {RegisterService} from "../register/register.service";
import {StorageService} from "../storage.service";
//import {LoginInterface} from "../../auth-pages/login/login.interface";




@Injectable({
    providedIn: 'root'
})
export class  AuthenticationService {

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private loginService: LoginService,
        private registerService: RegisterService,
        private storageService: StorageService
    ) {}

    ngOnInit(): void {
    }

    //public isAuthorized():boolean{


       // const role_id: number = parseInt(this.storageService.getStorage('user_role_id'), 10);

        // if(this.storageService.getStorage('accessToken')!=null && role_id==1){
        //     return true;
        // }else{
        //     return false;
        // }

        // .pipe(map((access_token: string) => !! access_token));
  //  }

    public isSupAdmin():boolean{


        const role_id: number = parseInt(this.storageService.getStorage('user_role_id'), 10);

        if(this.storageService.getStorage('accessToken')!=null && role_id==2){
            return true;
        }else{
            return false;
        }

        // .pipe(map((access_token: string) => !! access_token));
    }

    public getAccessToken(): Observable <string> {
        return this.storageService.getAccessToken();
    }

    public refreshToken(): Observable <string> {
        return of('');
    }

    public refreshShouldHappen(httpErrorResponse: HttpErrorResponse): boolean {
        return httpErrorResponse.status === 401;
    }

    public verifyTokenRequest(url: string): boolean {
        return url.endsWith('/refresh');
    }



    public login(): Observable<any> {
        const headers = new HttpHeaders()
            .append('Access-Control-Allow-Origin', '*')
            .append('Access-Control-Allow-Methods', 'POST')
            .append('X-Requested-With', 'XMLHttpRequest')
            .append('Access-Control-Allow-Headers', 'Content-Type');
        return this.loginService.create(null, headers, '/login')
            .pipe(tap((loginResponseInterface: LoginResponseInterface) => {
                console.log('..........................');
                console.log(loginResponseInterface);
                this.storageService.setAccessToken(loginResponseInterface.token)
            }));
    }

    /* public register(registerInterface: RegisterInterface): Observable<any> {
         const headers = new HttpHeaders()
             .append('Access-Control-Allow-Origin', '*')
             .append('Access-Control-Allow-Methods', 'POST')
             .append('X-Requested-With', 'XMLHttpRequest')
             .append('Access-Control-Allow-Headers', 'Content-Type');
         return this.registerService.create(registerInterface, headers, '/signup');
     }*/

    public logout() {
        return this.storageService.clear();
        // return window.location.reload()
    }
}
