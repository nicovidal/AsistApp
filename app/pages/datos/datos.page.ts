import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
})
export class DatosPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  
  mostrarMenu(){
    if(localStorage.getItem('esAlumno')){
      this.menuController.open('first');
    }else{
      this.menuController.open('second')
    }   
  }
}
