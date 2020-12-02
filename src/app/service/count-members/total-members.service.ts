import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ServicesInterface} from "../services.interface";
import {ServicesService} from "../services.service";

@Injectable({
  providedIn: 'root'
})
export class TotalMembersService extends ServicesService implements ServicesInterface{

    constructor(httpClient: HttpClient) {
        super(httpClient, 'api')
    }
}
