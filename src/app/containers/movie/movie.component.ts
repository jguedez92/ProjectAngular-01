import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public moviesPopular:Array<any>;
  public moviesFinder:Array<any>;
  public detail:any;
  public resultValid:boolean;


  constructor(public moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopularMovies()
      .subscribe(
        res => {
          this.moviesPopular = res.results.filter( movie => movie.poster_path && movie.overview.length > 0 )
          .map(movie => ({ ...movie, text: movie.overview.slice(0, 100) }));
        },
        error => console.log(error));        
  }

  getAll(event) {
    event.preventDefault();
    const form = event.target;
    const arg = form.finder.value;
    this.moviesService.getFindMovies(arg)
      .subscribe(
        res => {
       this.moviesFinder = res.results.filter( movie => movie.poster_path && movie.overview.length > 0 )
       .map(movie => ({ ...movie, text: movie.overview.slice(0, 90) }));
       
       if(this.moviesFinder.length > 0){
        this.resultValid = true;
      }else{
        this.resultValid = false;
      }
        },
        error => console.log(error));
  }

  setDetails(movie:any){
    this.detail = movie;
  }

  

}