import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ServicesService} from '../services.service';
import {ServicesInterface} from '../services.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServicesService implements ServicesInterface {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'api')
  }
}
