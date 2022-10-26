import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Usuario[] = [];

  constructor(private alertController: AlertController, 
              private navController: NavController,
              private registroService: RegistroserviceService, 
              private fb: FormBuilder) { 
                this.formularioLogin = this.fb.group({ 
                  'correo' : new FormControl("", Validators.required),
                  'password' : new FormControl ("", Validators.required)                
                })
              }

  ngOnInit() {
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getUsuarios().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.correoUsuario && f.password==obj.passUsuario ){
          a=1;     
          localStorage.setItem('ingresado','true');
          localStorage.setItem('infoUsuario',obj.nomUsuario)
          this.navController.navigateRoot('inicio');          
          if(obj.tipoUsuario=='alumno'){
            localStorage.setItem('esAlumno','true');
          }
          else(
            localStorage.setItem('esProfesor','true')
          )
        }
      }
      if(a==0){
        this.alertMsg();
      }
    })
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }

  

}
