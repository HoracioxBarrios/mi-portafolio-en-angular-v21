import { Component, OnInit } from '@angular/core';
import { Skills } from '../../shared/components/skills/skills';
import { ProjectCard } from '../proyectos/components/project-card/project-card';

interface Project {
  title: string;
  description: string;
  image: string;
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
    this.featuredProjects = [];
  }
}
