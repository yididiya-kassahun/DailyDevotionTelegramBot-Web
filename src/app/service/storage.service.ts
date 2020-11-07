import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class StorageService {

  public getStorage(key: string) {
    return localStorage.getItem(key);
  }

  public getAccessToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('accessToken');
    return of(token);
  }

  public getRefreshToken(): Observable<string> {
    const token: string = <string>localStorage.getItem('refreshToken');
    return of(token);
  }

  public setStorage(key: string, value: any): StorageService {
    localStorage.setItem(key, value);
    return this;
  }

  public setAccessToken(token: string): StorageService {
    localStorage.setItem('accessToken', token);
    return this;
  }

  public setRefreshToken(token: string): StorageService {
    localStorage.setItem('refreshToken', token);
    return this;
  }

  public clearStorage(key: string): StorageService {
    localStorage.removeItem(key);
    return this;
  }

  public clearToken(): StorageService {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    return this;
  }

  public clear(): StorageService {
    localStorage.clear();
    return this;
  }
}
