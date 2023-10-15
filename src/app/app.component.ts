import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private http:HttpClient){}
 onSubmit(data:any){
  this.http.post("http://localhost:8080/student",data)
  .subscribe((result) =>{
    console.warn("result",result)
  })
    console.warn(data);
 }
}
