import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public ruta = window.location.href;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  refrescarPagina(){
    event.preventDefault();
    if(this.ruta.includes('')){
      this.router.navigate(['']);
    }else if(this.ruta.includes('movies')){
      this.router.navigate(['movies']);
    }else if(this.ruta.includes('tvShow')){
      this.router.navigate(['tvShow']);
    }else if(this.ruta.includes('details')){
      this.router.navigate(['']);
    }
  
  }

}
