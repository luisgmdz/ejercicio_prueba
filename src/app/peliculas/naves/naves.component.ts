import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SwapiService} from "../../../services/swapi.service";
import {DatabaseService} from "../../../services/database.service";

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.scss']
})
export class NavesComponent implements OnInit {
  idMovie: any = 0;
  vehicles: any = [];

  constructor(
    private route: ActivatedRoute,
    private swapiSrv: SwapiService,
    private router: Router
  ) {
  }

  async ngOnInit() {
    return new Promise((resolve) => {
      resolve(this.idMovie = this.route.snapshot.paramMap.get('filmID'))
    }).then(() => {
      return new Promise(async resolve => {
        return await this.swapiSrv.getVehiclesFromMovie(this.idMovie).then((res: any) => {
          res.result.properties.vehicles.forEach((vehicle: any) => {
            return this.swapiSrv.getAllVehiclesInf(vehicle).then((infoVehicle: any) => {
              resolve(this.vehicles.push(infoVehicle.result))
            })
          })
        })
      })
    })
  }

  getVehicle(uid: string) {
    this.router.navigate(['peliculas/' + this.idMovie + '/naves/' + uid]);
  }

  return(){
    this.router.navigate(['peliculas']);
  }
}

