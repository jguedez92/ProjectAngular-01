import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { TvShowService } from 'src/app/services/tv-show.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {

  @Input() infoDetails:any;
  @Output() changeStatusDetail = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    if(!this.infoDetails){
      this.infoDetails = {
        title:"",
        release_date:"",
        overview:"",
        poster_path:""
      }
    }
  }

  backComponent(){
    event.preventDefault();
    this.infoDetails = "";
    this.changeStatusDetail.emit(this.infoDetails);
  }

}
