import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUsuario: string;
  apeUsuario:string;
  correoUsuario:string;
  tipoUsuario:string;
  passUsuario:string;
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

 
    async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //se crea usuario
  async addUsuario(dato: Usuario):Promise<any>{
   return this.storage.get(USERS_KEY).then((datos: Usuario[])=>{ 
     if(datos){
       datos.push(dato);    //agregamos un objeto al storage
       return this.storage.set(USERS_KEY,datos);
     }
     else{
       return this.storage.set(USERS_KEY, [dato]);
     }
   })
  }

  //obtener todos los objetos desde el storage 
  async getUsuarios():Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }
  

  async getOnlyOneUser(){
    if(localStorage.hasOwnProperty('ingresado')){
    return this.storage.get(USERS_KEY);
  }

}
}


