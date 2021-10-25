import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'imc',
    loadChildren: () => import('../imc/imc.page').then( m => m.ImcPage)
  },
  {
    path: 'peso',
    loadChildren: () => import('../pesoideal/pesoideal.page').then( m => m.PesoidealPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
