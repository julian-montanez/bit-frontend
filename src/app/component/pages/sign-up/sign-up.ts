import { Component, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersRegistered } from '../../../service/users-registered';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {
  userR = inject(UsersRegistered)
  router = inject(Router)
  form: any

  formSignUp = new FormGroup({
    name: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    VPassword: new FormControl("", Validators.required)
  })

  submitForm(){
    this.form = this.formSignUp.value
    if (this.formSignUp.valid && this.formSignUp.value.password === this.formSignUp.value.VPassword) {
      console.log(this.form);
      this.userR.putUser(this.form).subscribe((res:any)=>{
        if (res.allOk) {
          console.log("res:", res);
          this.router.navigateByUrl("/home")
        } else {
          console.log("an error occured");
        }
      })
    } else {
      console.log("invalid");
    }
  }

}
