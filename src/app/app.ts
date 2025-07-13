import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './component/shared/menu/menu';
import { Footer } from './component/shared/footer/footer';
import { Main } from './component/shared/main/main';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Menu, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'bit-frontend';
}
