import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImcprePageRoutingModule } from './imcpre-routing.module';

import { ImcprePage } from './imcpre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImcprePageRoutingModule
  ],
  declarations: [ImcprePage]
})
export class ImcprePageModule {}
