import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EncabezadoComponent } from './components/inicio/encabezado/encabezado.component';
import { AboutComponent } from './components/inicio/about/about.component';
import { ExpLaboralComponent } from './components/inicio/exp-laboral/exp-laboral.component';
import { AppRoutingModule } from './app-routing.module';
import { EducacionComponent } from './components/inicio/educacion/educacion.component';
import { HardNsoftSkillsComponent } from './components/inicio/hard-nsoft-skills/hard-nsoft-skills.component';
import { ProyectosComponent } from './components/inicio/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EncabezadoComponent,
    AboutComponent,
    ExpLaboralComponent,
    EducacionComponent,
    HardNsoftSkillsComponent,
    ProyectosComponent,
    Pagina404Component,
    LoginComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
