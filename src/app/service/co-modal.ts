import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class COModal {
  response: boolean = true

  closeEdit(res:boolean){
    this.response = res
  }

  
  openEdit(){
    this.response = false
  }
}
