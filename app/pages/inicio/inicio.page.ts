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
  }
  mostrarMenu() {
    this.menuController.open('first');
  }

  logout() {
    localStorage.clear();
    console.log(localStorage)
  }

  datito = [{
    
    
  }]

}
