import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';

const routes: Routes = [
  //esto es para exportar las rutas de un componente que contiene distintos modulos
  //esa es la sintaxis que posee y se debe hacer referencia al modulo no a la ruta

  {path : 'auth' , loadChildren :() => import('./auth/auth.module').then(m => m.AuthModule )},

  {
    path : 'heroes', loadChildren:() => import('./heroes/heroes.module').then( m => m.HeroesModule)
  },


  {path:'**', component:ErrorPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
