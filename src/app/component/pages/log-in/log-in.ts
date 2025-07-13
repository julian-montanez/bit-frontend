import { Component, inject } from '@angular/core';
import { FormsModule, FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersRegistered } from '../../../service/users-registered';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './log-in.html',
  styleUrl: './log-in.css'
})
export class LogIn {
  login = inject(loginServices)
  
  formLogIn = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })

  submitLogIn(){
    if(this.formLogIn.valid){
      this.loginServices.loginUser(this.form).subscribe((res:any)=>{
        
      })
    }
  }
}
