import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostInfo {
  private httpclient = inject(HttpClient) 
  private api = "http://localhost:3000/info"
  
  Pinfo(payload:any){
    return this.httpclient.post(this.api, payload)
  }
}
