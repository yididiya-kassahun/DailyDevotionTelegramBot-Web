import { Injectable } from '@angular/core';
import {ServicesService} from '../services.service';
import {ServicesInterface} from '../services.interface';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService extends ServicesService implements ServicesInterface {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'api')
  }
}
