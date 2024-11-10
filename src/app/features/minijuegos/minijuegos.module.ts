import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MinijuegosRoutingModule } from './minijuegos-routing.module';
import { IonicModule } from '@ionic/angular';
import { MinijuegosPage } from './minijuegos.page';


@NgModule({
  declarations: [MinijuegosPage],
  imports: [
    CommonModule,
    MinijuegosRoutingModule,
    IonicModule
  ]
})
export class MinijuegosModule { }
