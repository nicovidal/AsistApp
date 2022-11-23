import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario {
  nomUsuario: string;
  apeUsuario: string;
  correoUsuario: string;
  tipoUsuario: string;
  passUsuario: string;
  repassUsuario: string;


}

const USERS_KEY = 'my-usuarios';


@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {
  
  private _storage: Storage;

  constructor(private storage: Storage) {
    this.init();
  }
  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async addUsuario(dato: Usuario): Promise<any> {
    return this.storage.get(USERS_KEY).then((datos: Usuario[]) => {
      if (datos) {
        datos.push(dato);    
        return this.storage.set(USERS_KEY, datos);
      }
      else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }

  
  async actualizar(dato:Usuario):Promise <any>{
    return this.storage.get(USERS_KEY).then((datos:Usuario[])=>{
      if(!datos||datos.length==0){
        return null;
      }
      let newDato:Usuario[]=[];
      for(let i of datos){
        if(i.correoUsuario===dato.correoUsuario){
          newDato.push(dato);
        }
        else{
          newDato.push(i)
        }
      }
      return this.storage.set(USERS_KEY,newDato)


    });
    
  }

 
  async getUsuarios(): Promise<Usuario[]> {
    return this.storage.get(USERS_KEY);
  }

  async getOnlyOneUser() {
    const nombre =localStorage.getItem('infoUsuario');
    if (nombre) {     
      const algo = await this.storage.get(USERS_KEY)
      const usuario = algo.findIndex(a => a.nomUsuario === nombre)
      return algo[usuario];
    }
    return null
    
  }
  

}


