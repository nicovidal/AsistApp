import { Component, OnInit } from '@angular/core';
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


export class InicioPage implements OnInit {

  datosUsuario: Usuario[] = [];

  constructor(private menuController: MenuController, private registroService: RegistroserviceService) { }

  ngOnInit() {
    this.registroService.getOnlyOneUser().then(datos=>{
      this.datosUsuario=datos;
      if (!datos || datos.length==0){
        return null;
      }
      for(let da of this.datosUsuario){
        if(da.nomUsuario==da.nomUsuario){
          let nombreUser=da.nomUsuario;
          console.log(nombreUser)
        }
      }

    })
/*     if(localStorage.getItem('ingresado')){
      return true;
      let data =JSON.parse(localStorage.getItem('infoUsuario'));
      console.log(data)
    }
    else{
      return false;
    } */
    
  }
  mostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    localStorage.clear();
    console.log(localStorage)
  }

  
  


}
