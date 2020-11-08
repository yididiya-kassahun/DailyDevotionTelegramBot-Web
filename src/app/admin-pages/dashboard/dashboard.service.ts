import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DevotionsService {


    constructor(
        private  httpClient: HttpClient
    ) { }

    collectionofContacts() {
        return this.httpClient.get('http://localhost:8000/api/')
    }

}
