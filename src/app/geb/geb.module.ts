import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GebPageRoutingModule } from './geb-routing.module';

import { GebPage } from './geb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GebPageRoutingModule
  ],
  declarations: [GebPage]
})
export class GebPageModule {}
