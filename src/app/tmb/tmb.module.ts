import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TmbPageRoutingModule } from './tmb-routing.module';

import { TmbPage } from './tmb.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TmbPageRoutingModule
  ],
  declarations: [TmbPage]
})
export class TmbPageModule {}
