import { Injectable } from '@angular/core';
import {HttpClient}     from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { BehaviorSubject } from 'rxjs';
import jwtDecode from "jwt-decode";
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);
  constructor(private _HttpsClient:HttpClient , private _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.saveCurrentUser();
    }
   }
  Register(Formdata:any):Observable<any>{
    return this._HttpsClient.post('https://route-egypt-api.herokuapp.com/signup' , Formdata);
  }

  login(LoginData:any):Observable<any>{
    return this._HttpsClient.post("https://route-egypt-api.herokuapp.com/signin" , LoginData);
  }

  saveCurrentUser(){
    let token:any = localStorage.getItem("userToken");
    this.currentUser.next(jwtDecode(token));
    //console.log("Auth Object" + this.currentUser);
  }
  logout(){
    localStorage.removeItem("userToken");
    this.currentUser.next(null);
    this._Router.navigate(['/login']);
  }
}
