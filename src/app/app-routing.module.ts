import { PruebaPokerComponent } from './prueba-poker/prueba-poker.component';
import { PruebaKSComponent } from './prueba-ks/prueba-ks.component';
import { PruebaChiCuadradoComponent } from './prueba-chi-cuadrado/prueba-chi-cuadrado.component';
import { PruebaVarianzaComponent } from './prueba-varianza/prueba-varianza.component';
import { PruebaMediasComponent } from './prueba-medias/prueba-medias.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'prueba-de-medias', component: PruebaMediasComponent},
  { path: 'prueba-de-varianza', component: PruebaVarianzaComponent},
  { path: 'prueba-ks', component: PruebaKSComponent},
  { path: 'prueba-chi-cuadrado', component: PruebaChiCuadradoComponent},
  { path: 'prueba-de-poker', component: PruebaPokerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
