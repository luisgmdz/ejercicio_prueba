import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { NavesComponent } from './peliculas/naves/naves.component';
import { DetallesNaveComponent } from './peliculas/naves/detalles-nave/detalles-nave.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    NavesComponent,
    DetallesNaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
