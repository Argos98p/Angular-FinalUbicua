import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from './servicios/usuario-service.service';
import { Usuario } from './modelo/usuario';
import { ProductosService } from './servicios/productos.service';
import { Producto } from './modelo/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display_persona=true;
  animacion_celular=false;
  verDatosUsuario=false;
  id='';
  usuario:Usuario;
  productos:any;

  cedula = new FormControl('');
  title = 'front-ubicua';

  options: AnimationOptions = {
    path: '/assets/25061-shopping-woman.json',
  };

  load:AnimationOptions ={
    path:'/assets/85244-wave.json'
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  person:AnimationOptions={
    path:'/assets/44985-social-media.json'
  };

  
  constructor(
    private usuarioService:UsuarioServiceService,
    private productosService:ProductosService,
    private activateRoute: ActivatedRoute
  ){
    this.usuario=new Usuario();
    this.productos=[]
  }
  
 

  async onBuscar(){
    
    const user = await this.usuarioService.getByCI(this.cedula.value)
    if(user != undefined){
      this.animacion_celular=true
      this.verDatosUsuario=true
      this.usuario=user
    }
    console.log(this.usuario);            
  }
  
  async onClickSeccion(id:string,seccion:string){
//    $event.target.parentNode.children[1].classList.toggle('oculto')
    this.id=id

    const productosByCat = await this.productosService.getProductsByCategory(seccion)
    this.productos=productosByCat
  }


}
