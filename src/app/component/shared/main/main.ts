import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt"
import { LoginServices } from '../../../service/login-services';

const jwtHelper = new JwtHelperService()

@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  public login = inject(LoginServices)
}
