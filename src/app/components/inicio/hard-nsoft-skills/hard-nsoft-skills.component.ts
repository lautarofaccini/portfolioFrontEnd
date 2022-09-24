import { Component, OnInit } from '@angular/core';
import { PortafolioService } from 'src/app/services/portafolio.service';

@Component({
  selector: 'app-hard-nsoft-skills',
  templateUrl: './hard-nsoft-skills.component.html',
  styleUrls: ['./hard-nsoft-skills.component.css']
})
export class HardNsoftSkillsComponent implements OnInit {
  
  aptitudesList:any;
  constructor(private datosPortafolio:PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.aptitudesList=data.aptitudes;
    });
  }

}
