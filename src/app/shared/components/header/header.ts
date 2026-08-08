import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Theme } from '@app/core/services/theme';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    MatIconModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  protected readonly theme = inject(Theme);
  protected readonly tr = inject(Translation);

  navLinks = [
    { path: 'home', key: 'nav.home' },
    { path: 'proyectos', key: 'nav.proyectos' },
    { path: 'sobre-mi', key: 'nav.sobreMi' }
  ];
}
