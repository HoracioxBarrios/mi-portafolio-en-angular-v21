import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/main-layout/main-layout').then(m => m.MainLayout),
    children: [// al tener estas rutas hijas definidas para main layout, podremos usar otro router oulet en este main-layout para renderizar -> home, proyectos, publicaciones, sobre mí
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.Home)
      },
      {
        path: 'proyectos',
        loadComponent: () => import('./features/proyectos/proyectos').then(m => m.Proyectos)
      },
      {
        path: 'publicaciones',
        loadComponent: () => import('./features/publicaciones/publicaciones').then(m => m.Publicaciones)
      },
      {
        path: 'sobre-mi',
        loadComponent: () => import('./features/sobre-mi/sobre-mi').then(m => m.SobreMi)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];