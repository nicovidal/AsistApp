import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    if(localStorage.getItem('esAlumno')){
      this.menuController.open('first');
    }else{
      this.menuController.open('second')
    }   
  }
}
