import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../service/registroservice.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {


  constructor(private navController: NavController,) { }


  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (localStorage.getItem('esAlumno')) {
      return true;
    }
    else {
      this.navController.navigateRoot('inicio');
      return false;

    }

  }
  
}



