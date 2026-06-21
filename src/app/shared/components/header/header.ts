import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { Theme } from '@app/core/services/theme';
import { Translation } from '@app/core/services/translation';

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
  protected readonly theme = inject(Theme);
  protected readonly tr = inject(Translation);

  navLinks = [
    { id: 1, path: 'home', key: 'nav.home' },
    { id: 2, path: 'proyectos', key: 'nav.proyectos' },
    { id: 3, path: 'sobre-mi', key: 'nav.sobreMi' }
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
