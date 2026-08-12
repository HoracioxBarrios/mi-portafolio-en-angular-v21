import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [  // ← IMPORTANTE: children aquí
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
            {
        path: 'inicio',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
      },
      {
        path: 'home',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./features/proyectos/proyectos').then(m => m.Proyectos)
      },
      {
        path: 'sobre-mi',
        loadComponent: () => import('./features/sobre-mi/sobre-mi').then(m => m.SobreMi)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];