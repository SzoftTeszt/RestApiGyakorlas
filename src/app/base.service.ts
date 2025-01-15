import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl="http://localhost:3000/techcucc/"
  private adatSub=new Subject()
  constructor(private http:HttpClient) {
    this.downloadAll()
   }

  getAll(){
    return this.adatSub
  }

  private downloadAll(){
    this.http.get(this.apiUrl).subscribe(
      (res)=>this.adatSub.next(res)
    )
  }

  newData(data:any){
    this.http.post(this.apiUrl,data).forEach(
      ()=>this.downloadAll()
    )
  }
  updateData(data:any){
    this.http.put(this.apiUrl+data.id,data).forEach(
      ()=>this.downloadAll()
    )
  }

  deleteData(data:any){
    this.http.delete(this.apiUrl+data.id).forEach(
      ()=>this.downloadAll()
    )
  }


}
