import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from '../servicios/usuario-service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private usuarioService:UsuarioServiceService,
    private activateRoute: ActivatedRoute
    ) { 

  }

  ngOnInit(): void {
    console.log('entra');
    
    this.activateRoute.parent?.params.subscribe(async params=>{
      console.log('params'+params);
      
      const user= await this.usuarioService.getByCI(params['ci']);
      console.log(user);
      
    })
  }

}
