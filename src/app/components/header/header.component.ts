import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public moviesFinder;
  constructor(public moviesService:MoviesService) { }

  ngOnInit(): void {
  }

  getAll(event){
    event.preventDefault();
    const form=event.target;
    const arg = form.finder.value;
    this.moviesService.getFindMovies(arg)
    .subscribe(
      res=>{
        this.moviesFinder=res.results;
        console.log(this.moviesFinder);
      },
      error=>console.log(error));
  }

}


/*
 window.location.href
if(window.location.href.includes('physicians){
}esle If(window.location.href.includes('appointments){

}
*/ 