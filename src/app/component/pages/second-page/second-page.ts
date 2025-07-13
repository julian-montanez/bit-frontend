import { Component, OnInit, inject } from '@angular/core';
import { InfoApi } from '../../../service/info-api';

@Component({
  selector: 'app-second-page',
  imports: [],
  templateUrl: './second-page.html',
  styleUrl: './second-page.css'
})
export class SecondPage implements OnInit{
  private infoApi = inject(InfoApi)
  info!: any[] 


  ngOnInit(): void {
      this.infoApi.getinfo().subscribe((res:any)=>{
        this.info = res.data
        console.log("info:", this.info);
      })
    }
}