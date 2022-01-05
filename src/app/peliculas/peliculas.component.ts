import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../services/swapi.service";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.sass']
})
export class PeliculasComponent implements OnInit {
  films: any = [];
  constructor(
    private swapiSrv: SwapiService
  ) { }

  ngOnInit(): void {
    this.swapiSrv.getFilms().then((res: any) => {
      res.results.forEach((film: any) => {
        this.films.push(film.title)
      })
      console.log('FILMS')
      console.log(this.films)
    })
  }

}
