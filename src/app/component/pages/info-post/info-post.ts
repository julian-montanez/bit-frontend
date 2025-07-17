import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateInfo } from '../../../service/update-info';
import { Info } from '../../../interface/info';

@Component({
  selector: 'app-info-post',
  imports: [],
  templateUrl: './info-post.html',
  styleUrl: './info-post.css'
})
export class InfoPost implements OnInit {
  private getInfo = inject(UpdateInfo)
  private route = inject(ActivatedRoute)
  info!: Info

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.getInfo.printInfo(String(params["category"]),String(params["_id"])).subscribe((data: any)=>{
        this.info = data.data[0]
        const {nameDessert, ingredients, howToMake, category, image} = this.info
        this.info = {nameDessert, ingredients, howToMake, category, image}
        console.log(this.info);
      })
    })
  }
}
