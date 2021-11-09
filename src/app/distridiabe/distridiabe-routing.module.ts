import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DistridiabePage } from './distridiabe.page';

const routes: Routes = [
  {
    path: '',
    component: DistridiabePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistridiabePageRoutingModule {}
