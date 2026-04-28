import { Component, OnInit } from '@angular/core';
import { Skills } from '../../shared/components/skills/skills';
import { ProjectCard } from '../proyectos/components/project-card/project-card';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
}

@Component({
  selector: 'app-home',
  imports: [Skills, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  featuredProjects: Project[] = [];

    projects = [
    {
      title: 'Calvin',
      description: 'TheColvinCo.com es una tienda online especializada en la venta y envío de flores, plantas y regalos a domicilio, con enfoque en ramos y arreglos florales para ocasiones especiales como cumpleaños, aniversarios, celebraciones, fechas señaladas y momentos de detalle.',
      image: 'images/calvin_web_venta_flores.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Node.js'],
      repoUrl: 'https://github.com/Horacioxbarrios',
      liveUrl: 'https://www.thecolvinco.com/',
    },
    {
      title: 'Viajeros con B',
      description: 'Viajeros con B es una plataforma de contenido de viajes vinculada a B travel, enfocada en inspirar a los usuarios a través de artículos, experiencias y recomendaciones sobre destinos, turismo y estilos de viaje, presentada en formato editorial y audiovisual.',
      image: 'images/viajeros_con_B_web_de_viajes.webp',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      repoUrl: 'https://github.com/usuario/demo',
      liveUrl: 'https://viajerosconb.btravel.com/',
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
    
    // Datos temporales para visualización
    this.featuredProjects = this.projects ?? [];
  }
}
