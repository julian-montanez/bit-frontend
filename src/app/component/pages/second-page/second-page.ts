import { Component, OnInit, inject } from '@angular/core';
import { InfoApi } from '../../../service/info-api';
import { RouterLink } from '@angular/router';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-second-page',
  imports: [RouterLink],
  templateUrl: './second-page.html',
  styleUrl: './second-page.css'
})
export class SecondPage implements OnInit{
  private infoApi = inject(InfoApi)
  info!: any
  infoPage: any


  ngOnInit(): void {
      this.infoApi.getinfo().subscribe((res:any)=>{
        this.info = res.data
        console.log("info:", this.info);
      })
    }
}