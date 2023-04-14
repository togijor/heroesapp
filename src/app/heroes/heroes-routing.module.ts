import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';


const routes : Routes = [
  {
    path : '',

    // con esto gestionamos una pagina principal o un nav para cada uno de los modulos
    //pero se debe agregar un router-outlet en el componente que se quere mantener fijo
    component:HomeComponent,

    children: [
      {
        path : 'listado' , component:ListadoComponent
      },
      {
        path : 'agregar' , component : AgregarComponent
      },
      {
        path : 'editar/:id' , component : AgregarComponent
      },
      {
        path : 'buscar', component : BuscarComponent
      },
      {
        path : ':id', component : HeroeComponent
      },
      {
        path : '**' , redirectTo: 'listado'
      }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HeroesRoutingModule { }
