import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { RegistroserviceService, AsistenciaTomada } from '../../service/registroservice.service';


@Component({
  selector: 'app-tomar-as',
  templateUrl: './tomar-as.page.html',
  styleUrls: ['./tomar-as.page.scss'],
})
export class TomarAsPage implements OnInit {


  constructor(private menuController: MenuController) {

  }

  ngOnInit() {

  }

  mostrarMenu() {
    if (localStorage.getItem('esAlumno')) {
      this.menuController.open('first');
    } else {
      this.menuController.open('second')
    }
  }


}


