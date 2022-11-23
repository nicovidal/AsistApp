import { Component, NgModule, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@NgModule({
  declarations:[
    BarcodeScanner,
  ]
})



@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.page.html',
  styleUrls: ['./menu-alumno.page.scss'],
})
export class MenuAlumnoPage implements OnInit {

  datosUsuario: Usuario;

  constructor(private barcodeScanner: BarcodeScanner,private navController: NavController, private menuController: MenuController, private registroService: RegistroserviceService) { 

  
  }

  async ngOnInit() {

    this.datosUsuario = await this.registroService.getOnlyOneUser();

  }

  mostrarMenu() {
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }

  logout() {
    localStorage.clear();
    this.navController.navigateRoot('login')
  }

  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}


