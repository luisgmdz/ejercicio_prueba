import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {DatabaseService} from "../../../../services/database.service";
import {logEvent} from "@angular/fire/analytics";
import {SwapiService} from "../../../../services/swapi.service";

@Component({
  selector: 'app-detalles-nave',
  templateUrl: './detalles-nave.component.html',
  styleUrls: ['./detalles-nave.component.scss']
})
export class DetallesNaveComponent implements OnInit {
  idVehicle: any = 0;
  idMovie: any = 0;
  exist: any = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private form: FormBuilder,
    private dbSrv: DatabaseService,
    private swapiSrv: SwapiService
  ) { }

  formVehicle = this.form.group({
    name: new FormControl('', [Validators.required]),
    manufacturer: new FormControl('', [Validators.required]),
    max_atmosphering_speed: new FormControl('', [Validators.required]),
    vehicle_class: new FormControl('', [Validators.required]),
    uid: new FormControl('', )
  })

  async ngOnInit() {
    this.idVehicle = this.route.snapshot.paramMap.get('vehicleID');
    this.idMovie = this.route.snapshot.paramMap.get('filmID');
    return new Promise(async resolve => {
      resolve(this.dbSrv.get(this.idVehicle))
    }).then((res: any) => {
      if (!res.empty){
        this.exist = res.docs[0].exists;
        // @ts-ignore
        this.formVehicle.get('name').setValue(res.docs[0].data().name)
        // @ts-ignore
        this.formVehicle.get('manufacturer').setValue(res.docs[0].data().manufacturer)
        // @ts-ignore
        this.formVehicle.get('max_atmosphering_speed').setValue(res.docs[0].data().max_atmosphering_speed)
        // @ts-ignore
        this.formVehicle.get('vehicle_class').setValue(res.docs[0].data().vehicle_class)
        // @ts-ignore
        this.formVehicle.get('uid')?.setValue(this.idVehicle)
      }else {
        this.swapiSrv.getVehicle(this.idVehicle).then((res: any) => {
          // @ts-ignore
          this.formVehicle.get('name').setValue(res.name)
          // @ts-ignore
          this.formVehicle.get('manufacturer').setValue(res.manufacturer)
          // @ts-ignore
          this.formVehicle.get('max_atmosphering_speed').setValue(res.max_atmosphering_speed)
          // @ts-ignore
          this.formVehicle.get('vehicle_class').setValue(res.vehicle_class)
          // @ts-ignore
          this.formVehicle.get('uid')?.setValue(this.idVehicle)
        })
      }
    })

  }

  saveVehicle(form: FormGroup){
    this.dbSrv.add(form).then((res: any) => {
      this.router.navigate(['peliculas/' + this.idMovie + '/naves']);
    })
  }

  delVehicle(id: string){
    this.dbSrv.delete(id).then((res:any) => {
      this.router.navigate(['peliculas/' + this.idMovie + '/naves']);
    })
  }
  updateVehicle(form: FormGroup, id: string){
    this.dbSrv.update(form, id).then( res =>{
      this.router.navigate(['peliculas/' + this.idMovie + '/naves']);
    })
  }
  cancel(){
    this.router.navigate(['peliculas/' + this.idMovie + '/naves']);
  }
}
