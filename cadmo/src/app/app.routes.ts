import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'corsi',
    loadComponent: () => import('./corsi/corsi.page').then((m) => m.CorsiPage),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'chisiamo',
    loadComponent: () => import('./chisiamo/chisiamo.page').then((m) => m.ChiSiamoPage),
  },
  {
    path: 'contatti',
    loadComponent: () => import('./contatti/contatti.page').then( m => m.ContattiPage)
  },
  {
    path: 'impostazioni',
    loadComponent: () => import('./impostazioni/impostazioni.page').then( m => m.ImpostazioniPage)
  },
  {
    path: 'accesso',
    loadComponent: () => import('./accesso/accesso.page').then( m => m.AccessoPage)
  },
];
