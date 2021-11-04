import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FafPageRoutingModule } from './faf-routing.module';

import { FafPage } from './faf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FafPageRoutingModule
  ],
  declarations: [FafPage]
})
export class FafPageModule {}
