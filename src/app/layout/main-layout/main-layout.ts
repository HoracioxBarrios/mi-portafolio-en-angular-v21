import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Profile } from "@app/shared/components/profile/profile";
import { RedSocial } from '@app/core/models/redSocial';


@Component({
  selector: 'app-main-layout',
  imports: [
    Footer, 
    RouterOutlet, 
    Header, 
    Profile
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

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
