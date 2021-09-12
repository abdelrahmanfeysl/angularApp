import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users =[
    {name:'Ahmed' , age:23 , married:true , salary : 12000 , country : "eg" , city : "cairo"},
    {name:'Mohammed' , age:26 , married:false , salary : 18000 , country : "Li" , city : "Taa"},
    {name:'Hassan' , age:33 , married:true , salary : 12000 , country : "UAE" , city : "cairo"},
    {name:'Abdel-rhman' , age:23 , married:true , salary : 12000 , country : "eg" , city : "cairo"},
  ];
  constructor() { }
}
