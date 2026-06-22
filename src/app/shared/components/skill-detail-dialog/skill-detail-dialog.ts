import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '@app/core/models/skill.interface';
import { Translation } from '@app/core/services/translation';

export interface SkillDetailDialogData {
  skill: Skill;
}

@Component({
  selector: 'app-skill-detail-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './skill-detail-dialog.html',
  styleUrl: './skill-detail-dialog.scss',
})
export class SkillDetailDialog {
  protected readonly tr = inject(Translation);
  skill: Skill;

  constructor(
    private dialogRef: MatDialogRef<SkillDetailDialog>,
    @Inject(MAT_DIALOG_DATA) data: SkillDetailDialogData
  ) {
    this.skill = data.skill;
  }

  get stackLabel(): string {
    return this.tr.t('skills.group.' + this.skill.stack);
  }

  close(): void {
    this.dialogRef.close();
  }
}
