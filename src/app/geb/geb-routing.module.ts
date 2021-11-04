import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GebPage } from './geb.page';

const routes: Routes = [
  {
    path: '',
    component: GebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GebPageRoutingModule {}
