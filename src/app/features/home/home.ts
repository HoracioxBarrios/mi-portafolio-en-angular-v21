import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from '../proyectos/components/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.mock';
import { Project } from '../../core/models/proyect.interface';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  protected readonly tr = inject(Translation);
  featuredProjects: Project[] = [];

  ngOnInit() {
    this.featuredProjects = PROJECTS.filter(p => p.featured);
  }
}
