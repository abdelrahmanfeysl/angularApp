import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error :string = '';
  formLogin = new FormGroup({
    'email':new FormControl(null , [Validators.required , Validators.email]),
    'password':new FormControl(null , [Validators.required,Validators.minLength(8) , Validators.maxLength(12)]),
    // 'password':new FormControl(null , [Validators.required , Validators.minLength(8) , Validators.maxLength(20)]),
  });
  constructor(private _AuthService:AuthService , private _Router:Router) { }

  loginFunction(loginDate:FormGroup){
    this._AuthService.login(loginDate.value).subscribe((response)=>{
      if(response.message =='success'){
        localStorage.setItem("userToken" , response.token);
        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home']);
      }else{
        this.error = response.message;        
      }
    });
    console.log(loginDate.value);
  }
  ngOnInit(): void {
  }

}
