import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';

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
export class MenuAlumnoPage implements OnInit{

  datosUsuario: Usuario;

  constructor( private navController:NavController,private menuController: MenuController,private registroService:RegistroserviceService) { }

  async ngOnInit() {

    this.datosUsuario = await this.registroService.getOnlyOneUser();

  }



  mostrarMenu() {
    this.menuController.open('first');
 
  }

  logout() {
    
    localStorage.clear();
    this.navController.navigateRoot('login')
    console.log(localStorage)
  }






 
}

