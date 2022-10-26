import { Component, OnChanges, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';


interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit  {

  datosUsuario: Usuario;

  constructor(private menuController: MenuController, private registroService: RegistroserviceService) { }

  ngOnInit() {

    this.registroService.getOnlyOneUser().then(datos => {
      this.datosUsuario =datos;
      if (!datos || datos.length == 0) {
        let nombreUser = this.datosUsuario.nomUsuario;
        console.log(nombreUser)
        return null;
      } ;
       
       
    }).catch(err=>console.error(err))
 
  }


  
  mostrarMenu() {
    this.menuController.open('first');    
  }

  logout() {
    localStorage.clear();
    console.log(localStorage)
  }



 

}
