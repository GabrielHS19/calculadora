import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TmbPage } from './tmb.page';

const routes: Routes = [
  {
    path: '',
    component: TmbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TmbPageRoutingModule {}
