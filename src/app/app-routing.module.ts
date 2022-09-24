import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina404Component } from './components/pagina404/pagina404.component';

import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: Pagina404Component},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
