import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PostInfo {
  private httpclient = inject(HttpClient) 
  private api = Enviroment.apiUrlInfo
  
  Pinfo(payload:any){
    return this.httpclient.post(this.api, payload)
  }
}
