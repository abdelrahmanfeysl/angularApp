import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviceService } from '../movice.service';
 
@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit {

  id:string="";
  prefix:string= 'https://image.tmdb.org/t/p/w500/';
  movieDetails:any = {};
  constructor(private _ActiveRouter:ActivatedRoute , private _MovieService:MoviceService) { 
    this.id = _ActiveRouter.snapshot.params.id;
    _MovieService.getTvDetails(this.id).subscribe((response)=>{
      this.movieDetails = response;
    });

  }

  
  ngOnInit(): void {
  }

}