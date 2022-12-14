import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { asitencia, asitenciasAlumno } from '../../interfaces/asistencia';
import { AsistenciaService } from '../../service/asistencia.service';
import { RegistroserviceService, AsistenciaTomada } from '../../service/registroservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tomar-as',
  templateUrl: './tomar-as.page.html',
  styleUrls: ['./tomar-as.page.scss'],
})
export class TomarAsPage implements OnInit {

  newAsistencia: asitencia = {
    correo: "",
    fecha: "",
    modulo: ""
  }

  constructor(private menuController: MenuController,
              private router: Router, 
              private asistenciaService: AsistenciaService) {

  }

  ngOnInit() {

  }

  mostrarMenu() {
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }
  crearAsistencia(){
    this.asistenciaService.crearModulo(this.newAsistencia).subscribe();
    this.router.navigateByUrl("/asistencia-alumno");

  }

}


