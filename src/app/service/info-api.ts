import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoApi {
  
  private infoApi = "http://localhost:3000/info"
  private httpclient = inject(HttpClient)

  getinfo() {
    return this.httpclient.get(this.infoApi)
  }
}
