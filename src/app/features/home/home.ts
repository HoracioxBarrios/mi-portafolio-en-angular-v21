import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skills } from '../../shared/components/skills/skills';
import { ProjectCard } from '../proyectos/components/project-card/project-card';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl?: string;
  repoPrivate: boolean;
  liveUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, Skills, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  featuredProjects: Project[] = [];

  projects: Project[] = [
    {
      title: 'Lineage 2 Eternal',
      description: 'Aplicación web para el servidor Lineage 2 Eternal, desarrollada en Angular 21 con detalles específicos del juego.',
      image: 'images/lineage2-eternal.png',
      technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
      repoUrl: 'https://github.com/HoracioxBarrios/Lineage2-Eternal-web-angular-21-responsive.git',
      repoPrivate: true,
      liveUrl: 'https://lineage2-eternal-web-angular-21-res.vercel.app/home',
      featured: true,
    },
        {
      title: 'Lineage 2 Alika',
      description: 'Aplicación web para el servidor Lineage 2 Alika, desarrollada en Angular 21 con detalles específicos del juego.',
      image: 'images/lineage2-alika.png',
      technologies: ['Angular 21', 'TypeScript', 'SCSS', 'Node.js'],
      repoUrl: 'https://github.com/HoracioxBarrios/lineage2-Alika-web-angular-21-responsive.git',
      repoPrivate: true,
      liveUrl: 'https://lineage2-alika-web-angular-21-respo-lilac.vercel.app/',
      featured: true,
    },
    {
      title: 'Calvin',
      description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
      image: 'images/calvin_web_venta_flores.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
      repoUrl: 'https://github.com/Horacioxbarrios',
      repoPrivate: false,
      liveUrl: 'https://www.thecolvinco.com/',
      featured: true,
    },
    {
      title: 'Viajeros con B',
      description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
      image: 'images/viajeros_con_B_web_de_viajes.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/usuario/demo',
      repoPrivate: false,
      liveUrl: 'https://viajerosconb.btravel.com/',
      featured: false,
    }
  
  ];

  constructor() {}

  ngOnInit() {
    this.loadFeaturedProjects();
  }

  private loadFeaturedProjects() {
    // TODO: Integrar con ProjectsService para obtener proyectos destacados
    // this.projectsService.getFeaturedProjects().subscribe(projects => {
    //   this.featuredProjects = projects.slice(0, 3);
    // });
    
    this.featuredProjects = this.projects.filter(project => project.featured) ?? [];
  }
}
