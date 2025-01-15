import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrl: './data-list.component.css'
})
export class DataListComponent {
  cikkek:any
  newCikk:any={}
  oszlopok=["name","category","description","price"]
  constructor(private base:BaseService){
    this.base.getAll().subscribe(
      (res)=>this.cikkek=res
    )
  }

  updateData(data:any){
    this.base.updateData(data)
  }

 deleteData(data:any){
    this.base.deleteData(data)
  }

 newData(){
    this.base.newData(this.newCikk)
    this.newCikk={}
  }



}
