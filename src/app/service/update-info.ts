import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Enviroment } from '../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UpdateInfo {
  private apiInfo = Enviroment.apiUrlInfo
  private httpcli = inject(HttpClient)

  printInfo(cat:string, id:string){
    return this.httpcli.get(`${this.apiInfo}/${cat}/${id}`)
  }

  updateInfo(id:string, body:any){
    return this.httpcli.put(`${this.apiInfo}/${id}`, body)
  }
}
