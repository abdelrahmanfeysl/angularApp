import { Component, OnInit } from '@angular/core';
import { MoviceService } from '../movice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  id:string = '';
  prefix:string = "https://image.tmdb.org/t/p/w500/";
  trendingPersons:any = {};

  constructor(private _MoviceService:MoviceService , private _RouterActive:ActivatedRoute) {
    this.id = _RouterActive.snapshot.params.id;
    _MoviceService.getTrendingPerson(this.id).subscribe((resonse)=>{
        this.trendingPersons = resonse;
        console.log("Hello");
    }); 
  }



  ngOnInit(): void {
  }

}
