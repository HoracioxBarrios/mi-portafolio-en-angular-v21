import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { JoinTextPipe } from '../../pipes/join-text-pipe';
import {RedSocial} from "../../../core/models/redSocial";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    RouterModule,       
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    JoinTextPipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  
  private router = inject(Router);

  private userInfo = {
    name : "Horacio",
    secondName: "Javier",
    lastName : "Barrios",
    tecnologias: ["Desarrollador FullStack", "Html", "CSS", "Typescript", "Angular"],
    location: "Buenos Aires - Argentina",
    photo: 'images/user-profile.webp',
    redesSociales: [
      { label: 'GitHub', link: 'https://github.com/HoracioxBarrios', icon: 'code' },
      { label: 'LinkedIn', link: 'https://linkedin.com/in/horacioxbarrios', icon: 'work' },
      { label: 'Instagram', link: 'https://instagram.com', icon: 'photo_camera' }
    ]

  }


  navLinks = [
    { id: 1, path: 'proyectos', label: 'Proyectos' },
    { id: 2, path: 'publicaciones', label: 'Publicaciones' },
    { id: 3, path: 'sobre-mi', label: 'Sobre Mí' }
  ];
  activeIndex = 0;


  constructor(){
    this.router.events.subscribe(()=> {
      this.syncTabWithRoute();
    });
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

  get fullName(): string {
    return [this.userInfo.name, this.userInfo.secondName, this.userInfo.lastName]
      .filter(Boolean)
      .join(' ');
  }

  get tecnologiasArr():any[]{
    return this.userInfo.tecnologias;
  }
  get location(){
    return this.userInfo.location;
  }
  get photo(){
    return this.userInfo.photo;
  }

  get redesSociales(): RedSocial[] {
    return this.userInfo?.redesSociales ?? [];
  }

}
