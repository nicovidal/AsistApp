import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {asitencia, asitenciasAlumno}from '../interfaces/asistencia'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http: HttpClient) { }

  listadoAsistencia():Observable<asitenciasAlumno>{
    return this.http.get<asitenciasAlumno>(`${environment.apiUrl}/asistencia`)
  }

  crearModulo(newAsistencia: asitencia):Observable<asitencia>{
    return this.http.post<asitencia>(`${environment.apiUrl}/asistencia`,newAsistencia)
  }
}
