import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviceService {

  constructor(private _HtppClient:HttpClient) { }

  getTreandingMovice(type:string):Observable<any>{
    
      return this._HtppClient.get(`https://api.themoviedb.org/3/${type}/popular?api_key=d966651aaf132ee3a7b684e8bac9c133&language=en-US&page=1`);
  }

  getMovieDetails(id:string):Observable<any>{
    return this._HtppClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d966651aaf132ee3a7b684e8bac9c133&language=en-US`);
  }

  getTvDetails(id:string):Observable<any>{
    return this._HtppClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=d966651aaf132ee3a7b684e8bac9c133&language=en-US`);
  }

  getTrendingPerson(id:string):Observable<any>{
    console.log("In Function");
    return this._HtppClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=d966651aaf132ee3a7b684e8bac9c133&language=en-US`);
  }

}
