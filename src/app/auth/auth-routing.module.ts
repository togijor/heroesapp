import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes : Routes =[

  {path: '',children:[

    {path: 'login', component: LoginComponent},
    {path: 'registro', component : RegistroComponent},
    {path: '**', redirectTo : 'login'}

  ]}

]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    //en los componentes de la aplicacion solo se debe
    //exportar como ruta hija ya que en el app se tiene el forRoutes que
    //alimenta toda la aplicacion
    RouterModule.forChild(routes)
  ]
})
export class AuthRoutingModule { }