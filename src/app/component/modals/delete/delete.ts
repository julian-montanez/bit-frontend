import { Component, Input, inject, input } from '@angular/core';
import { COModal } from '../../../service/co-modal';
import { DeleteInfo } from '../../../service/delete-info';

@Component({
  selector: 'app-delete',
  imports: [],
  templateUrl: './delete.html',
  styleUrl: './delete.css'
})
export class Delete {
  deleteInfo = inject(DeleteInfo)
  modal = inject(COModal)
  @Input() id:string = ""
  @Input() name:string = ""

  delete(id:any){
    this.deleteInfo.deleteInfoById(id).subscribe((res:any)=>{
      if(res.allOk){
        console.log("delete");
        window.location.reload()
      } else {
        console.log("no delete");
      }
    })
  }
}
