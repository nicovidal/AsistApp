import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  usuario = {
    nombre:'',
    apellido:'',
    rut:'',
    email: '',
    password:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
