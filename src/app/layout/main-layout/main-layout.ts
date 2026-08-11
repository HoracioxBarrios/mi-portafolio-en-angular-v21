import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { Profile } from "@app/shared/components/profile/profile";
import { RedSocial } from '@app/core/models/redSocial';
import { Particles } from '@app/shared/components/particles/particles';
import { StickyCta } from '@app/shared/components/sticky-cta/sticky-cta';


@Component({
  selector: 'app-main-layout',
  imports: [
    Footer, 
    RouterOutlet, 
    Header, 
    Profile,
    Particles,
    StickyCta
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {

  private userInfo = {
    name : "Horacio",
    secondName: "Javier",
    lastName : "Barrios",
    tecnologias: ["Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development"],
    location: "Buenos Aires - Argentina",
    photo: 'images/user-profile.webp',
    cvUrl: 'https://drive.google.com/file/d/1juiFa2ruwAO6TnKhPLkSBOxaKYLTNy_S/view?usp=sharing',
    redesSociales: [
      { label: 'GitHub', link: 'https://github.com/HoracioxBarrios', icon: 'code' },
      { label: 'LinkedIn', link: 'https://linkedin.com/in/horacioxbarrios', icon: 'work' }
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

  get cvUrl(): string {
    return this.userInfo.cvUrl;
  }

  get redesSociales(): RedSocial[] {
    return this.userInfo?.redesSociales ?? [];
  }
}
