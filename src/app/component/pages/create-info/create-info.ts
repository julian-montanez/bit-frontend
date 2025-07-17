import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostInfo } from '../../../service/post-info';
import { InfoApi } from '../../../service/info-api';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginServices } from '../../../service/login-services';
import { RouterLink } from '@angular/router';
import { DeleteInfo } from '../../../service/delete-info';
import { Edit } from '../../modals/edit/edit';
import { COModal } from '../../../service/co-modal';

const jwtHelper = new JwtHelperService()

@Component({
  selector: 'app-create-info',
  imports: [FormsModule, ReactiveFormsModule, RouterLink, Edit],
  templateUrl: './create-info.html',
  styleUrl: './create-info.css'
})
export class CreateInfo implements OnInit {
  userD = inject(LoginServices)
  postInfo = inject(PostInfo)
  api = inject(InfoApi)
  deleteInfo = inject(DeleteInfo)
  openEdit = inject(COModal)
  form: any
  userInfo!: any
  user!: object
  info!: any
  editCat: string = ""
  editId: string = ""

  ngOnInit(): void {
    const token: any = localStorage.getItem("token:")
    console.log("token:", token);
    const tokenUncrypted = jwtHelper.decodeToken(token)
    console.log("uncrypted:", tokenUncrypted);
    this.userInfo = tokenUncrypted.id
    console.log(this.userInfo);

  this.userD.userdata(this.userInfo).subscribe((res:any)=>{
    this.user = res.data._id
    console.log("user:", this.user);
  })
  
  this.api.infoPost(this.userInfo).subscribe((res:any)=>{
    this.info = res.data
    console.log("info:", this.info);
  })
}

  post = new FormGroup({
    nameDessert: new FormControl("", Validators.required),
    ingredients: new FormControl("", Validators.required),
    howToMake: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
    userId: new FormControl(this.user)
  })



  submitInfo(){
    this.form = this.post.value
    this.form.userId = this.user
    console.log("#form:", this.form);
    if (this.post.valid) {
      this.postInfo.Pinfo(this.form).subscribe((res:any)=>{
        if (res.allOk) {
          console.log("res:", res);
          console.log(this.userInfo);
          window.location.reload()
        } else {
          console.log("an error occured");
        }
      })
    } else {
      console.log("invalid");
    }
  }

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

  edit(cat:string, id:string){
    this.openEdit.openEdit()
    this.editCat = cat
    this.editId = id
    console.log(cat, id);
  }
}
