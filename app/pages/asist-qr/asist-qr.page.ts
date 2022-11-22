import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-asist-qr',
  templateUrl: './asist-qr.page.html',
  styleUrls: ['./asist-qr.page.scss'],
})
export class AsistQRPage implements OnInit {

  qrCodeString='This is a secret qr code message';
  scannedResult:any;
  
  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    if(localStorage.getItem('esAlumno')){
      this.menuController.open('first');
    }else{
      this.menuController.open('second')
    }   
  }

  usuario={
    nom:'',
  }

  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }

}
