import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FafPage } from './faf.page';

const routes: Routes = [
  {
    path: '',
    component: FafPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FafPageRoutingModule {}
