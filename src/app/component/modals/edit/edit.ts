import { Component, inject, Input, OnInit } from '@angular/core';
import { COModal } from '../../../service/co-modal';
import { ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { UpdateInfo } from '../../../service/update-info';
import { Info } from '../../../interface/info';

@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule,],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit implements OnInit{
  cloEdit = inject(COModal)
  updateInfo = inject(UpdateInfo)
  printEdit!: any
  @Input() cat:string = ""
  @Input() id:string = ""
  print!:any
  printPage!:Info

  editform!: any

  ngOnInit(): void {
    this.updateInfo.printInfo(this.cat, this.id).subscribe((res:any)=>{
      this.print = res.data[0]
      console.log(this.print);
      const {nameDessert, ingredients, howToMake, category, image} = res.data[0];
      this.printPage = {nameDessert, ingredients, howToMake, category, image}
      console.log(this.printPage);
      this.editform = new FormGroup({
        nameDessert: new FormControl(this.printPage.nameDessert, Validators.required),
        ingredients: new FormControl(this.printPage.ingredients, Validators.required),
        howToMake: new FormControl(this.printPage.howToMake, Validators.required),
        category: new FormControl(this.printPage.category, Validators.required),
        image: new FormControl(this.printPage.image, Validators.required),
      })
    })
  }

  closeEdit(res:boolean){
    this.cloEdit.closeEdit(res)
  }

  post = new FormGroup({
    nameDessert: new FormControl("", Validators.required),
    ingredients: new FormControl("", Validators.required),
    howToMake: new FormControl("", Validators.required),
    category: new FormControl("", Validators.required),
    image: new FormControl("", Validators.required),
  })

  submitInfo(){
    this.updateInfo.updateInfo(this.print._id, this.editform.value).subscribe({
      next: (respuesta) => console.log('Actualizado:', respuesta),
      error: (error) => console.error('Error al actualizar:', error)
    })
    window.location.reload()
  }
}
