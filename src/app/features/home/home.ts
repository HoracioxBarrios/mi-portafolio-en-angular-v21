import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Skills } from '../../shared/components/skills/skills';
import { ProjectCard } from '../proyectos/components/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.mock';
import { Project } from '../../core/models/proyect.interface';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Skills, ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  featuredProjects: Project[] = [];

  constructor() {}

  ngOnInit() {
    this.featuredProjects = PROJECTS.filter(p => p.featured);
  }
}
