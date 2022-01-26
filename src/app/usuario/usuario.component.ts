import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from '../servicios/usuario-service.service';





@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  


  cedula = new FormControl('');

  constructor(
    private usuarioService:UsuarioServiceService,
    private activateRoute: ActivatedRoute
    ) { 

  }

  ngOnInit(): void {
    
  } 

  async onBuscar(){
    const user = await this.usuarioService.getByCI(this.cedula.value)
    console.log(user);
            
  }

}
