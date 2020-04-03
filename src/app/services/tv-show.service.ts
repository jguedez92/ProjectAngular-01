import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(public httpClient:HttpClient) { }

  getPopularTv():Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/tv/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1');
  }

  getFindTv(arg):Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/search/tv?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1&include_adult=false&query='+arg);
  }

}
