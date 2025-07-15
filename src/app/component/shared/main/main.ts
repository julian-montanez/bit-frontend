import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt"

const jwtHelper = new JwtHelperService()

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main implements OnInit {
  usernName!: any

  ngOnInit(): void {
    const token: any = localStorage.getItem("token:")
    console.log("token:", token);
    const tokenUncrypted = jwtHelper.decodeToken(token)
    console.log("uncrypted:", tokenUncrypted);
    this.usernName = tokenUncrypted.name
    }

  logOut(){
    const token: any = localStorage.removeItem("token:")
    console.log("token:", token);
    
  }
}
