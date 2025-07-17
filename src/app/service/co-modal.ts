import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class COModal {
  response: boolean = true
  delResponse: boolean = true

  //edit window

  closeEdit(res:boolean){
    this.response = res
  }

  openEdit(){
    this.response = false
  }

  //delete window
  
  closeDelete(res:boolean){
    this.delResponse = res
  }

  openDelete(){
    this.delResponse = false
  }

}

