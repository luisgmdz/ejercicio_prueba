import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeliculasComponent} from "./peliculas/peliculas.component";
import {NavesComponent} from "./peliculas/naves/naves.component";
import {DetallesNaveComponent} from "./peliculas/naves/detalles-nave/detalles-nave.component";

const routes: Routes = [
  {path:'peliculas', component: PeliculasComponent, children: [
      {path:'naves', component: NavesComponent, children: [
          {path:'nave', component: DetallesNaveComponent}
        ]}
    ]},
  { path: '', redirectTo: '/peliculas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
