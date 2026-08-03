import { Component, Inject, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Translation } from '@app/core/services/translation';

export interface ProjectDetail {
  title: string;
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  repoUrl?: string;
  repoPrivate: boolean;
  liveUrl?: string;
  featured?: boolean;
}

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './project-detail-modal.html',
  styleUrl: './project-detail-modal.scss',
})
export class ProjectDetailModal {
  protected readonly tr = inject(Translation);

  /** Imágenes del slider: usa el array si existe, si no la imagen principal. */
  readonly slides: string[];
  readonly index = signal(0);

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailModal>,
    @Inject(MAT_DIALOG_DATA) public project: ProjectDetail
  ) {
    this.slides = project.images?.length ? project.images : [project.image];
  }

  next(): void {
    this.index.update(i => (i + 1) % this.slides.length);
  }

  prev(): void {
    this.index.update(i => (i - 1 + this.slides.length) % this.slides.length);
  }

  goTo(i: number): void {
    this.index.set(i);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
