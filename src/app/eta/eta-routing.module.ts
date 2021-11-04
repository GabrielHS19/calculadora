import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EtaPage } from './eta.page';

const routes: Routes = [
  {
    path: '',
    component: EtaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EtaPageRoutingModule {}
