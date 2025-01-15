import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl="http://localhost:3000/techcucc/"
  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(this.apiUrl)
  }

  newData(data:any){
    this.http.post(this.apiUrl,data).subscribe()
  }
  updateData(data:any){
    this.http.put(this.apiUrl+data.id,data).subscribe()
  }
  
  deleteData(data:any){
    this.http.delete(this.apiUrl+data.id).subscribe()
  }


}
