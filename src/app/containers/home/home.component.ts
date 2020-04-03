import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public moviesPremiere;
  public detail:any;
  

  constructor(public moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPremiereMovies()
    .subscribe(
      res=>{
        this.moviesPremiere=res.results.filter( movie => movie.poster_path && movie.overview.length > 0 )
        .map(movie => ({ ...movie, text: movie.overview.slice(0, 100) }));
      },
      error=>console.log(error));
  }

  setDetails(movie:any){
    this.detail = movie;
    
  }

}
