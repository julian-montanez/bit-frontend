import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  constructor() {}

  private http = inject(HttpClient)
  private api = "http://localhost:3000/user/log-in";

loginUser(payload:any){
  return this.http.post(this.api, payload)
}  

}
