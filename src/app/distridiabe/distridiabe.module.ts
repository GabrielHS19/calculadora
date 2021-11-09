import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { IonicModule } from '@ionic/angular';

import { DistridiabePageRoutingModule } from './distridiabe-routing.module';

import { DistridiabePage } from './distridiabe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistridiabePageRoutingModule,
    ScrollingModule
  ],
  declarations: [DistridiabePage]
})
export class DistridiabePageModule {}
