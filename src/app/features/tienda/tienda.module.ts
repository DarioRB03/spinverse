import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendaRoutingModule } from './tienda-routing.module';
import { TiendaPage } from './tienda.page';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [TiendaPage],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    IonicModule
  ]
})
export class TiendaModule { }
