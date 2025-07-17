import { Component, OnInit, inject } from '@angular/core';
import { InfoApi } from '../../../service/info-api';
import { JwtHelperService } from "@auth0/angular-jwt"
import { LoginServices } from '../../../service/login-services';

const jwtHelper = new JwtHelperService()

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  public login = inject(LoginServices)
  private infoApi = inject(InfoApi)
  info!: any[] 
  usernName!: any


  ngOnInit(): void {
    const token: any = localStorage.getItem("token:")
    console.log("token:", token);
    const tokenUncrypted = jwtHelper.decodeToken(token)
    console.log("uncrypted:", tokenUncrypted);
    this.usernName = tokenUncrypted.name

      this.infoApi.getinfo().subscribe((res:any)=>{
        this.info = res.data
        console.log("info:", this.info);
      })
    }
}

