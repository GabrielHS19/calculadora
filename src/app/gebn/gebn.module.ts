import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GebnPageRoutingModule } from './gebn-routing.module';

import { GebnPage } from './gebn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GebnPageRoutingModule
  ],
  declarations: [GebnPage]
})
export class GebnPageModule {}
