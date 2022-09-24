import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  url = 'https://localhost:3000/api';
  token: any; 
  
  constructor(private http: HttpClient, private router: Router){  }

  login(email: string, password: string){
    console.log("Llegamos hasta aca");
    this.http.post(this.url + '/authenticate', {email: email, password: password}).subscribe((resp: any) => {
      this.router.navigate(['']);
      //Se guarda el token en localStorage
      localStorage.setItem('auth_token', resp.token);
    })
    console.log("y hasta aca");
  }
  //Para cerrar sesion se elimina el token de localStorage
  logout(){
    localStorage.removeItem('token');
  }

  //Servicio para verificar que existe la sesion
  public get logIn(): boolean {
    return (localStorage.getItem('token') !== null);
  }
  

}