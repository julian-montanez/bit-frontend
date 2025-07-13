import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersRegistered {
constructor() { }

private httpclient = inject(HttpClient)
private api = "http://localhost:3000/user";

putUser(payload:any){
  return this.httpclient.post(this.api, payload)
}
}
