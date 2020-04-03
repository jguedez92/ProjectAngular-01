import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public httpClient:HttpClient) { }

  getPremiereMovies():Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1');
  }

  getFindMovies(arg):Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&query='+arg);
  }

  getPopularMovies():Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1');
  }

  getSimilarMovies(id):Observable<any>{
    return this.httpClient.get('https://api.themoviedb.org/3/movie/'+id+'/similar?api_key=cea68b520beecac6718820e4ac576c3a&language=es-ES&page=1')
  }
}
