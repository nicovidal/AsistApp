import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo:'/inicio'
    },
    {
      icon: 'book-outline',
      name: 'Datos',
      redirecTo:'/datos'
    },
    {
      icon:'calendar-number-outline',
      name: 'Asistencia',
      redirecTo:'/asistencia-alumno'
    },
    {
      icon:'apps-outline',
      name: 'Generar QR',
      redirecTo:'/asist-qr'
    },
    {
      icon:'newspaper-outline',
      name: 'Registro',
      redirecTo:'/registro'
    },
  ];



}
