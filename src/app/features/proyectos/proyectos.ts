import { Component, inject } from '@angular/core';
import { ProjectCard } from './components/project-card/project-card';
import { PROJECTS } from '../../core/data/projects.mock';
import { Project } from '../../core/models/proyect.interface';
import { Translation } from '@app/core/services/translation';
import { Reveal } from '@app/shared/directives/reveal';

@Component({
  selector: 'app-proyectos',
  imports: [ProjectCard, Reveal],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {
  protected readonly tr = inject(Translation);
  projects: Project[] = PROJECTS;
}
