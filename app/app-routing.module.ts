import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './guards/ingresado.guard'
import { NoIngresadoGuard } from './guards/no-ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule),canActivate: [IngresadoGuard]
  },
  {
    path: 'asist-qr',
    loadChildren: () => import('./pages/asist-qr/asist-qr.module').then(m => m.AsistQRPageModule), canActivate: [IngresadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),canActivate:[NoIngresadoGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./pages/splash/splash.module').then(m => m.SplashPageModule)
  },

  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then(m => m.DatosPageModule),canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule),canActivate:[NoIngresadoGuard]
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./pages/asistencia-alumno/asistencia-alumno.module').then(m => m.AsistenciaAlumnoPageModule),canActivate: [IngresadoGuard]
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then(m => m.ScannerPageModule),canActivate: [IngresadoGuard]
  },
  {
    path: 'feriado',
    loadChildren: () => import('./pages/feriado/feriado.module').then(m => m.FeriadoPageModule),canActivate: [IngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
