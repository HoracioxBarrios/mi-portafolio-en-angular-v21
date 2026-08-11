import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Translation } from '@app/core/services/translation';

export interface ProjectImageLightboxData {
  image: string;
  alt: string;
}

@Component({
  selector: 'app-project-image-lightbox',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './project-image-lightbox.html',
  styleUrl: './project-image-lightbox.scss',
})
export class ProjectImageLightbox {
  protected readonly tr = inject(Translation);

  constructor(
    private dialogRef: MatDialogRef<ProjectImageLightbox>,
    @Inject(MAT_DIALOG_DATA) public data: ProjectImageLightboxData
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
