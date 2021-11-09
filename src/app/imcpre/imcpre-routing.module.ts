import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImcprePage } from './imcpre.page';

const routes: Routes = [
  {
    path: '',
    component: ImcprePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImcprePageRoutingModule {}
