import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  //urlSwapi: string = 'https://swapi.dev/api/';
  urlSwapi: string = 'https://www.swapi.tech/api/';

  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }*/

  constructor(
    private httpClient: HttpClient
  ) { }

  async getFilms(){
    return this.httpClient.get(this.urlSwapi + 'films').toPromise().then((res: any) =>{
      return res;
    });
  }

  async getVehiclesFromMovie(movieID: string){
    return this.httpClient.get(this.urlSwapi + 'films/'+movieID).toPromise().then((res: any) =>{
      return res;
    });
  }

  async getAllVehiclesInf(vehicle: string){
    return this.httpClient.get(vehicle).toPromise().then((res: any) =>{
      return res;
    });
  }

  async getVehicle(uid: string){
    return this.httpClient.get(this.urlSwapi + 'vehicles/' + uid).toPromise().then((res: any) =>{
      return res;
    });
  }
}
