import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RuletaPage } from './ruleta.page';
import { RuletaRoutingModule } from './ruleta-routing.module';
import { SharedModule } from '../../shared/shared.module'; 

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RuletaRoutingModule,
    SharedModule 
  ],
  declarations: [RuletaPage]
})
export class RuletaModule { }
