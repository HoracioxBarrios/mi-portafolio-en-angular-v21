import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  private router = inject(Router);
  private destroyRef = inject(DestroyRef);

  navLinks = [
    { id: 1, path: 'home', label: 'home' },
    { id: 2, path: 'proyectos', label: 'Proyectos' },
    { id: 3, path: 'publicaciones', label: 'Publicaciones' },
    { id: 4, path: 'sobre-mi', label: 'Sobre Mí' }
  ];
  activeIndex = 0;

  constructor() {
    this.router.events
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.syncTabWithRoute());
    this.syncTabWithRoute();
  }


  onTabChange(index: number) {
    const link = this.navLinks[index];
    if (link) {
      this.router.navigate([link.path]);
    }
  }

  private syncTabWithRoute() {
    const currentPath = this.router.url.split('/').pop();
    const index = this.navLinks.findIndex(l => l.path === currentPath);
    this.activeIndex = index !== -1 ? index : 0;
  }

}
