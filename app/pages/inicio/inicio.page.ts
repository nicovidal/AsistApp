import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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

  datosUsuario: Usuario;

  constructor(private navController:NavController,private menuController: MenuController, private registroService: RegistroserviceService) { }

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
