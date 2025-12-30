import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink, 
    RouterLinkActive, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
 navLinks = [
    { path: '/home', 
      label: 'Inicio' 
    },
    { path: '/proyectos',
      label: 'Proyectos' 
    },
    { path: '/publicaciones',
      label: 'Publicaciones' 
    },
    { path: '/sobre-mi',
      label: 'Sobre Mí' 
    }
  ];


}
