import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './containers/home/home.component'
import { MovieComponent } from './containers/movie/movie.component';
import { TvShowComponent } from './containers/tv-show/tv-show.component';
import { SearchDetailsComponent } from './containers/search-details/search-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:"movies",component:MovieComponent},
  {path:"tvShow",component:TvShowComponent},
  {path:"details",component:SearchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
