import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [  // ← IMPORTANTE: children aquí
      {
        path: '',
        redirectTo: 'publicaciones',
        pathMatch: 'full'
      },
      {
        path: 'publicaciones',
        loadComponent: () => import('./features/publicaciones/publicaciones').then(m => m.Publicaciones)
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
    redirectTo: 'publicaciones'
  }
];