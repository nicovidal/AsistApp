import { Component } from '@angular/core';
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

  


  constructor(private registroService: RegistroserviceService) { }

   tipo() {
    this.registroService.getOnlyOneUser().then(datos => {
      this.dato = datos;
      if (!datos || datos.length == 0) {
        return null;
      }

    })
  } 
 

  componenteAlumno: Componente[] =localStorage.getItem('esAlumno')? [
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
  ]:[]
  componenteProfesor: Componente[] = localStorage.getItem('esProfesor')? [
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
  ]:[]

}
