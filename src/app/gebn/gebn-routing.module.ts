import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GebnPage } from './gebn.page';

const routes: Routes = [
  {
    path: '',
    component: GebnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GebnPageRoutingModule {}
