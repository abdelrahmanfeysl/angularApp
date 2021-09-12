import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './app/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate {
  constructor(private _AuthService:AuthService , private _Router :Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this._AuthService.currentUser.getValue()!=null){
      return true;
    }else{
      this._Router.navigate(['/login']);
      return false;
    }
      
  }
  
}
