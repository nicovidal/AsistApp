import { Component, OnInit } from '@angular/core';


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-menu-profesor',
  templateUrl: './menu-profesor.page.html',
  styleUrls: ['./menu-profesor.page.scss'],
})
export class MenuProfesorPage {

  constructor() { }

  componenteProfesor:Componente[]=[
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
      icon: 'apps-outline',
      name: 'Generar QR',
      redirecTo: '/asist-qr'
    },
    {
      icon: 'calendar-number-outline',
      name: 'Feriados',
      redirecTo: '/feriado'
    },
  ]




}
