import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {
  constructor() {}

  private http = inject(HttpClient)
  private router = inject(Router)
  private api = "http://localhost:3000/user/log-in";
  apiUser = "http://localhost:3000/user/"


loginUser(payload:any){
  return this.http.post(this.api, payload)
}  

userlogged(){
  if (localStorage.getItem("token:")) {
    return true
  } else {
    return false
  }
}

userlogout(){
  localStorage.removeItem("token:")
  this.router.navigate(["/"])
  window.location.reload()
}

userdata(data:any){
  return this.http.get(`http://localhost:3000/user/${data}`)
}
}
