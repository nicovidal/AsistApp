import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {DatePipe}from '@angular/common'

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
  qrFecha= 'string ';
  scannedResult:any;
  scannedResultDate:any;
  date=new Date();
  stringDate:string=this.date.toString()
  fechaFormateada=this.datepipe.transform(this.stringDate,'dd-MM-YYYY HH:mm')||null;
  


  constructor(private datepipe:DatePipe,private menuController : MenuController) { }

  ngOnInit() {
   
   this.fechaFormateada

  }
  mostrarMenu() {
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }

  usuario={
    modulo:'',
    fecha:this.stringDate,
  }

  generaScan(){
    this.qrCodeString= this.usuario.modulo;
    this.qrFecha=this.usuario.fecha;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
    this.scannedResultDate=this.fechaFormateada;

  }

}
