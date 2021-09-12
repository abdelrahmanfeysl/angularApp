import { Component, OnInit } from '@angular/core';
import { MoviceService } from '../movice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  baseUrl:string = 'https://image.tmdb.org/t/p/w500/';
  getMovice:any[] = [];
  getPersonal:any[] = [];
  getTv:any[] =[]; 
  constructor( _MoviceService:MoviceService) {
      _MoviceService.getTreandingMovice("movie").subscribe((data)=>{
        this.getMovice = data.results.slice(0,10);
        console.log(this.getMovice);
      });
      _MoviceService.getTreandingMovice("tv").subscribe((data)=>{
        this.getTv = data.results.slice(0,10);
        console.log(this.getTv);
      });

      _MoviceService.getTreandingMovice("person").subscribe((data)=>{
        this.getPersonal = data.results.slice(0,10);
        console.log(this.getPersonal);
      });
   }



  ngOnInit(): void {
  }

}
