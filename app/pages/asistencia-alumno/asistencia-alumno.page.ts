import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, MenuController, Platform } from '@ionic/angular';
import { AsistenciaService}from '../../service/asistencia.service';
import { RegistroserviceService,AsistenciaTomada } from '../../service/registroservice.service';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-asistencia-alumno',
  templateUrl: './asistencia-alumno.page.html',
  styleUrls: ['./asistencia-alumno.page.scss'],
})
export class AsistenciaAlumnoPage implements OnInit {

  asistencia=[];
  datosAsistencia:AsistenciaTomada[]=[];

  constructor(
    private menuController: MenuController ,private loadCtrl:LoadingController,
    private asistenciaService:AsistenciaService) { 
 
    }

  ngOnInit() {
    this.loadAsistencia();
  }
  mostrarMenu() {
    this.menuController.enable(true,'first');
    this.menuController.open('first');
  }


  async loadAsistencia(event?:InfiniteScrollCustomEvent){
    const loading = await this.loadCtrl.create({
      message:"Cargando..",
      spinner:"bubbles"
    });
    await loading.present();

    this.asistenciaService.listadoAsistencia().subscribe(
      (resp)=>{
        loading.dismiss();
        console.log(resp);
        let listString =JSON.stringify(resp)
        this.asistencia=JSON.parse(listString)
        event?.target.complete();
        
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();

      }

    )

  }

}
