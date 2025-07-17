import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoApi {
  
  private infoApi = "http://localhost:3000/info"
  private httpclient = inject(HttpClient)

  getinfo() {
    return this.httpclient.get(this.infoApi)
  }

  infoPost(data:any){
  return this.httpclient.get(`http://localhost:3000/info/${data}`)
}

  public getInfoId(id: string): Observable<any> {
  return this.httpclient.get<any>(`${this.infoApi}/${id}`);
}
}

