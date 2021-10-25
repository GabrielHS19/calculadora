import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesoidealPage } from './pesoideal.page';

const routes: Routes = [
  {
    path: '',
    component: PesoidealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesoidealPageRoutingModule {}
