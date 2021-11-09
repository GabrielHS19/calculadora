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
  },
  {
    path: 'geb',
    loadChildren: () => import('../geb/geb.page').then( m => m.GebPage)
  },
  {
    path: 'tmb',
    loadChildren: () => import('../tmb/tmb.page').then( m => m.TmbPage)
  },
  {
    path: 'faf',
    loadChildren: () => import('../faf/faf.page').then( m => m.FafPage)
  },
  {
    path: 'eta',
    loadChildren: () => import('../eta/eta.page').then( m => m.EtaPage)
  },
  {
    path: 'vet',
    loadChildren: () => import('../vet/vet.page').then( m => m.VetPage)
  },
  {
    path: 'distridiabe',
    loadChildren: () => import('../distridiabe/distridiabe.page').then( m => m.DistridiabePage)
  },
  {
    path: 'imcpre',
    loadChildren: () => import('../imcpre/imcpre.page').then( m => m.ImcprePage)
  },
  {
    path: 'gebn',
    loadChildren: () => import('../gebn/gebn.page').then( m => m.GebnPage)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
