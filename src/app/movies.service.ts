import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
observable
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {
  }
  getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`);
  }
}
