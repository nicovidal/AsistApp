import { Component , OnInit} from '@angular/core';
import { RegistroserviceService, Usuario } from '../../src/app/service/registroservice.service';

interface Componente {
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

  dato: Usuario[];

  
  constructor() { }


  componenteProfesor: Componente[] =  [
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/menu-profesor'
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
/*   componenteAlumno:Componente[]=[
    {
      icon: 'wifi-outline',
      name: 'Inicio',
      redirecTo: '/menu-alumno'
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
  ] */
