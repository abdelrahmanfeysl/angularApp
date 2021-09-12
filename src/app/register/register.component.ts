import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error : string = '';
  registerForm = new FormGroup({
    'first_name' : new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    'last_name' :new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    'age' : new FormControl(null , [Validators.min(16) ,Validators.pattern("^[1-9]{2,}") , Validators.max(80) , Validators.required]),
    'email' : new FormControl(null , [Validators.email]),
    'password':new FormControl(null , [Validators.required,Validators.minLength(8) , Validators.maxLength(12)]),
  });

  constructor(private _AuthService:AuthService , private _Router:Router) { }
  submitFunction(data:FormGroup){
      // console.log(data.value);
      this._AuthService.Register(data.value).subscribe((response)=>{
        if(response.message =='success'){
          this._Router.navigate(['/login']);
        }else{
          this.error = response.errors.email.message;
        }
      });

  }
  ngOnInit(): void {
  }

}
