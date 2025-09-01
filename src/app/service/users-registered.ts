import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UsersRegistered {

private httpclient = inject(HttpClient)
private api = `${Enviroment.apiUrlUser}/sign-up`;

putUser(payload:any){
  return this.httpclient.post(this.api, payload)
}
}
