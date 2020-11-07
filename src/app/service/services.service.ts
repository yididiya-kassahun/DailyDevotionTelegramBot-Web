import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';

import { ServicesInterface } from './services.interface';


@Injectable()
export class ServicesService implements ServicesInterface, OnInit {

  protected MODEL: string;
  protected BASE_URL = 'http://localhost:8000/';

  constructor (
      public httpClient: HttpClient,
      public _MODEL: string
  ) {
    this.MODEL = _MODEL;
    this.BASE_URL = this.BASE_URL + this.MODEL;
  }

  ngOnInit(): void {
  }

  public example(url: string, header?: HttpHeaders, query?: string) {
    if (query === undefined ) { query = ''; }
    console.log(`EXAMPLE: ${query}`);
    return this.httpClient.get(`${url}${query}`, { headers: header });
  }

  public gets(header?: HttpHeaders, query?: string) {
    if (query === undefined ) { query = ''; }
    console.log(`GETS: ${this.BASE_URL}${query}`);
    return this.httpClient.get(`${this.BASE_URL}${query}`, { headers: header });
  }

  public get(id: string, header?: HttpHeaders, query?: string) {
    if (id === undefined ) { id = ''; }
    if (query === undefined ) { query = ''; }
    console.log(`GET ${this.BASE_URL}/${id}${query}`);
    return this.httpClient.get(`${this.BASE_URL}/${id}${query}`, { headers: header });
  }

  public create(data, header?: HttpHeaders, query?: string) {
    if (query === undefined ) { query = ''; }
    console.log(`CREATE: ${this.BASE_URL}${query}`);
    return this.httpClient.post(`${this.BASE_URL}${query}`, data, { headers: header });
  }

  public update(id, data, header?: HttpHeaders, query?: string) {
    if (id === undefined ) { id = ''; }
    if (query === undefined ) { query = ''; }
    console.log(`UPDATE: ${this.BASE_URL}/${id}${query}`);
    return this.httpClient.put(`${this.BASE_URL}/${id}${query}`, data, { headers: header });
  }

  public patch(id, data, header?: HttpHeaders, query?: string) {
    if (id === undefined ) { id = ''; }
    if (query === undefined ) { query = ''; }
    console.log(`PATCH: ${this.BASE_URL}/${id}${query}`);
    return this.httpClient.patch(`${this.BASE_URL}/${id}${query}`, data, { headers: header });
  }

  public delete(id, header?: HttpHeaders, query?: string) {
    if (id === undefined ) { id = ''; }
    if (query === undefined ) { query = ''; }
    console.log(`DELETE: ${this.BASE_URL}/${id}${query}`);
    return this.httpClient.delete(`${this.BASE_URL}/${id}${query}`, { headers: header });
  }
}
