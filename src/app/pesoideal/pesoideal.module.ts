import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesoidealPageRoutingModule } from './pesoideal-routing.module';

import { PesoidealPage } from './pesoideal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesoidealPageRoutingModule
  ],
  declarations: [PesoidealPage]
})
export class PesoidealPageModule {}
