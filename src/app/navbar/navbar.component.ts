import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isLogin:boolean = false;
  userName:string = '';
  constructor(private _AuthService:AuthService) {
    _AuthService.currentUser.subscribe(()=>{
      if(_AuthService.currentUser.getValue()!=null){
        this.isLogin = true;
        // console.log(_AuthService.currentUser.getValue()?.first_name);
        // this.userName = _AuthService.currentUser.getValue()?.first_name?.slice(0,1);
      }else{
        this.isLogin = false;
      }
    })
   }

   islogout(){
      this._AuthService.logout();       
   }
  ngOnInit(): void {
  }

}
