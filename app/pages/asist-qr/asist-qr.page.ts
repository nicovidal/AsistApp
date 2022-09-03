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

  constructor(private menuController : MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
