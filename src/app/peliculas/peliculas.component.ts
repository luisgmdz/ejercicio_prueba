import { Component, OnInit } from '@angular/core';
import {SwapiService} from "../../services/swapi.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
  films: any = [];
  films2: any = ['1', '2', '3', '4', '5', '6'];

  films3: any = [
    {nombre: 'Star Wars: Episodio I - La amenaza fantasma', duracion: '1:45', numNaves: 8},
    {nombre: 'Star Wars: Episodio II - El ataque de los clones', duracion: '2:10', numNaves: 4},
    {nombre: 'Star Wars: Episodio III - La venganza de los Sith', duracion: '1:50', numNaves: 5},
    {nombre: 'Star Wars: Episodio IV - Una nueva esperanza', duracion: '1:32', numNaves: 2},
    {nombre: 'Star Wars: Episodio V - El Imperio contraataca', duracion: '3:03', numNaves: 13},
    {nombre: 'Star Wars: Episode VI - Return of the Jedi', duracion: '2:20', numNaves: 7},
    {nombre: 'Star Wars: Episodio VII - El despertar de la Fuerza', duracion: '2:20', numNaves: 9},
    {nombre: 'Star Wars: Episode VII - Los últimos Jedi', duracion: '2:20', numNaves: 6},
    {nombre: 'Star Wars: Episodio IX - El ascenso de Skywalker', duracion: '2:20', numNaves: 8},
  ];

  displayedColumns: string[] = ['nombre', 'duracion', 'numNaves', 'verNaves'];
  dataSource = this.films3;


  constructor(
    private swapiSrv: SwapiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.swapiSrv.getFilms().then((res: any) => {
      res.result.forEach((film: any) => {
        this.films.push(film.properties)
      })
      console.log('FILMS')
      console.log(this.films)
    })
  }

  getNaves(filmID: string){
    this.router.navigate(['peliculas/'+ filmID+'/naves' ]);
  }

}
