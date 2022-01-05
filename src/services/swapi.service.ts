import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  urlSwapi: string = 'https://swapi.dev/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  async getFilms(){
    return this.httpClient.get(this.urlSwapi + 'films').toPromise().then((res: any) =>{
      return res;
    });
  }
}
