import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '@app/core/models/skill.interface';

export interface SkillDetailDialogData {
  skill: Skill;
}

const STACK_LABELS: Record<Skill['stack'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Herramientas',
};

@Component({
  selector: 'app-skill-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './skill-detail-dialog.html',
  styleUrl: './skill-detail-dialog.scss',
})
export class SkillDetailDialog {
  skill: Skill;
  stackLabel: string;

  constructor(
    private dialogRef: MatDialogRef<SkillDetailDialog>,
    @Inject(MAT_DIALOG_DATA) data: SkillDetailDialogData
  ) {
    this.skill = data.skill;
    this.stackLabel = STACK_LABELS[this.skill.stack];
  }

  close(): void {
    this.dialogRef.close();
  }
}
