import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteInfo {
  private httpcli = inject(HttpClient)
  private infoApi = "http://localhost:3000/info"


  deleteInfoById(data:any){
    return this.httpcli.delete(`${this.infoApi}/${data}`)
  }
}
