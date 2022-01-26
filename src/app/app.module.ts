import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { AplicacionComponent } from './aplicacion/aplicacion.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ReactiveFormsModule } from '@angular/forms';

export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    AplicacionComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LottieModule.forRoot({ player: playerFactory }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
