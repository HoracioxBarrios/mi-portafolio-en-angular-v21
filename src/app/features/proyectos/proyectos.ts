import { Component } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.mock';
import { Project } from '../../core/models/proyect.interface';

@Component({
  selector: 'app-proyectos',
  imports: [ProjectCard],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  projects: Project[] = PROJECTS;
}
