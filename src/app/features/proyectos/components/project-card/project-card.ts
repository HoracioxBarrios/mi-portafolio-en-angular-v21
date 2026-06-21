import { Component, HostListener, Input, inject } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetailModal, ProjectDetail } from '../project-detail-modal/project-detail-modal';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-project-card',
  imports: [MatIcon],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {

  protected readonly tr = inject(Translation);

  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) image!: string;

  @Input() technologies: string[] = [];
  @Input() repoUrl?: string;
  @Input() repoPrivate = false;
  @Input() liveUrl?: string;
  @Input() showDetailButton = true;

  showPrivateRepoMsg = false;

  constructor(private dialog: MatDialog) {}

  onPrivateRepoClick(event: MouseEvent): void {
    event.stopPropagation();
    this.showPrivateRepoMsg = true;
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    if (this.showPrivateRepoMsg) this.showPrivateRepoMsg = false;
  }

  openProjectDetail(): void {
    const projectData: ProjectDetail = {
      title: this.title,
      description: this.description,
      image: this.image,
      technologies: this.technologies,
      repoUrl: this.repoUrl,
      repoPrivate: this.repoPrivate,
      liveUrl: this.liveUrl,
    };

    this.dialog.open(ProjectDetailModal, {
      data: projectData,
      width: '90%',
      maxWidth: '950px',
      panelClass: 'project-detail-panel',
    });
  }
}
