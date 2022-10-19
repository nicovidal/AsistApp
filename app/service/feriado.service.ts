import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FeriadoService {

  constructor(private httpClient : HttpClient) { }


  getTopHeadLines(){
    return (this.httpClient.get<RespuestaTopHeadlines>('https://apis.digital.gob.cl/fl/feriados/2022'));

  }
}
