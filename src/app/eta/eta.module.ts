import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EtaPageRoutingModule } from './eta-routing.module';

import { EtaPage } from './eta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EtaPageRoutingModule
  ],
  declarations: [EtaPage]
})
export class EtaPageModule {}
