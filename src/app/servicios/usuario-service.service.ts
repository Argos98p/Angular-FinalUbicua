import { Injectable } from '@angular/core';
import { USUARIOS } from '../db/usuarios.db';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor() { }

  getByCI(ci:string):Promise<Usuario>{
    return new Promise((resolve,reject)=>{      
      const persona=USUARIOS.filter(user=>{
        return user.ci===ci;
        
      });
      resolve(persona[0]);
    })
  }
}
