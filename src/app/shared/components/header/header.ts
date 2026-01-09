import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { JoinTextPipe } from '../../pipes/join-text-pipe';

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

private userInfo = {
  name : "Horacio",
  secondName: "Javier",
  lastName : "Barrios",
  tecnologias: ["Desarrollador FullStack", "Html", "CSS", "Typescript", "Angular"],
  location: "Buenos Aires - Argentina",
  photo: 'images/user-profile.webp'
}


navLinks = [
  { id: 1, path: '/home', label: 'Inicio' },
  { id: 2, path: '/proyectos', label: 'Proyectos' },
  { id: 3, path: '/publicaciones', label: 'Publicaciones' },
  { id: 4, path: '/sobre-mi', label: 'Sobre Mí' }
];


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

}
