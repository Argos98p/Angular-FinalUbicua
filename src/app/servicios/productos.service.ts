import { Injectable } from '@angular/core';
import { PRODUCTOS } from '../db/productos.db';
import { Producto } from '../modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  getProductsByCategory(seccion:string){
    return new Promise((resolve,reject)=>{      
      const persona=PRODUCTOS.filter(producto=>{
        return producto.seccion===seccion;
        
      });
      resolve(persona);
    })
  }
}
