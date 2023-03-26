import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaMediasComponent } from './prueba-medias/prueba-medias.component';
import { PruebaVarianzaComponent } from './prueba-varianza/prueba-varianza.component';
import { PruebaKSComponent } from './prueba-ks/prueba-ks.component';
import { PruebaChiCuadradoComponent } from './prueba-chi-cuadrado/prueba-chi-cuadrado.component';
import { PruebaPokerComponent } from './prueba-poker/prueba-poker.component';
import { FormsModule } from '@angular/forms';
import { ListaNumerosComponent } from './lista-numeros/lista-numeros.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaMediasComponent,
    PruebaVarianzaComponent,
    PruebaKSComponent,
    PruebaChiCuadradoComponent,
    PruebaPokerComponent,
    ListaNumerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
