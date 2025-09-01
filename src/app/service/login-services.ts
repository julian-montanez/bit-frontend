import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class LoginServices {

  private http = inject(HttpClient)
  private router = inject(Router)
  private api = `${Enviroment.apiUrlUser}/log-in`;
  apiUser = Enviroment.apiUrlUser


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
  return this.http.get(`${this.apiUser}/${data}`)
}
}
