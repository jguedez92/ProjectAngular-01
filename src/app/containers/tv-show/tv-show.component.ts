import { Component, OnInit } from '@angular/core';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss']
})
export class TvShowComponent implements OnInit {
  public tvPopular;
  public tvFinder;
  public resultValid;
  public detail: any;

  constructor(public tvShowService:TvShowService) { }

  ngOnInit(): void {
    this.tvShowService.getPopularTv()
    .subscribe(
      res=>{

        this.tvPopular=res.results.filter( serie => serie.poster_path && serie.overview.length > 0 )
        .map(serie => ({ ...serie, text: serie.overview.slice(0, 100) }));
      }
    )
  }

  getAll(event){
    event.preventDefault();
    const form=event.target;
    const arg = form.finder.value;
    this.tvShowService.getFindTv(arg)
    .subscribe(
      res=>{
        this.tvFinder=res.results.filter( serie => serie.poster_path && serie.overview.length > 0 )
        .map(serie => ({ ...serie, text: serie.overview.slice(0, 110) }));

        if(this.tvFinder.length > 0){
          this.resultValid = true;
        }else{
          this.resultValid = false;
        }
      },
      error=>console.log(error));
  }

  setDetails(movie:any){
    this.detail = movie;
    console.log(this.detail)
  }

}
