import { Component, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServices } from '../../../service/login-services';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css'
})
export class LogIn {
  login = inject(LoginServices)
  router = inject(Router)
  toastr = inject(ToastrService)
  form: any
  
  formLogIn = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  submitLogIn(){
    if(this.formLogIn.valid){
      this.form = this.formLogIn.value
      this.login.loginUser(this.form).subscribe((res:any)=>{
        if (res.allOk) {
          this.toastr.success(`login success`)
          localStorage.setItem("token:", res.data)
          this.router.navigateByUrl("/home")
          console.log("res:", res);
        } else {
          console.log("error");
        }
      })
    }
  }
}
