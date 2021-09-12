import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  baseUrl:string = 'https://image.tmdb.org/t/p/w500/';
    @Input() trendingMovies:any[]= [];
  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: false,
      margin:8,
      touchDrag: false,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 2
        },
        400: {
          items: 4
        },
        740: {
          items: 6
        },
        940: {
          items: 8
        }
      },
      nav: true
    }
  

  constructor() { }
  ngOnInit(): void {
  }

}






