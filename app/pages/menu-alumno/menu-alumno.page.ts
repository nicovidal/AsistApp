import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
})
export class MenuAlumnoPage {

  constructor( private menuController: MenuController) { }


  componenteAlumno:Componente[]=[
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },
    {
      icon: 'book-outline',
      name: 'Modificar Datos',
      redirecTo: '/datos'
    },
    {
      icon: 'documents-outline',
      name: 'Asistencia',
      redirecTo: '/asistencia-alumno'
    },
  
    {
      icon: 'calendar-number-outline',
      name: 'Feriados',
      redirecTo: '/feriado'
    },
  ]

  mostrarMenu() {
    this.menuController.open('first');
  }

}


