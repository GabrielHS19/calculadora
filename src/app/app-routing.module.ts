import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'imc',
    loadChildren: () => import('./imc/imc.module').then( m => m.ImcPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'pesoideal',
    loadChildren: () => import('./pesoideal/pesoideal.module').then( m => m.PesoidealPageModule)
  },
  {
    path: 'geb',
    loadChildren: () => import('./geb/geb.module').then( m => m.GebPageModule)
  },
  {
    path: 'tmb',
    loadChildren: () => import('./tmb/tmb.module').then( m => m.TmbPageModule)
  },
  {
    path: 'faf',
    loadChildren: () => import('./faf/faf.module').then( m => m.FafPageModule)
  },
  {
    path: 'eta',
    loadChildren: () => import('./eta/eta.module').then( m => m.EtaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
