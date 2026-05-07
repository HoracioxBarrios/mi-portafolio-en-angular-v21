import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

export interface ProjectDetail {
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
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './project-detail-modal.html',
  styleUrl: './project-detail-modal.scss',
})
export class ProjectDetailModal {
  constructor(
    public dialogRef: MatDialogRef<ProjectDetailModal>,
    @Inject(MAT_DIALOG_DATA) public project: ProjectDetail
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
