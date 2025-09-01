import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class InfoApi {
  
  private infoApi = Enviroment.apiUrlInfo
  private httpclient = inject(HttpClient)

  getinfo() {
    return this.httpclient.get(this.infoApi)
  }

  infoPost(data:any){
  return this.httpclient.get(`${this.infoApi}/${data}`)
}

//   public getInfoId(id: string): Observable<any> {
//   return this.httpclient.get<any>(`${this.infoApi}/${id}`);
// }
}

