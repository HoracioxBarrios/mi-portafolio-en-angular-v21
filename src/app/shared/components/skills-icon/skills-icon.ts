import { Component, inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from '@app/core/models/skill.interface';
import { SkillDetailDialog } from '../skill-detail-dialog/skill-detail-dialog';

@Component({
  selector: 'app-skills-icon',
  imports: [],
  templateUrl: './skills-icon.html',
  styleUrl: './skills-icon.scss',
})
export class SkillsIcon {
  @Input({ required: true }) skill!: Skill;

  private readonly dialog = inject(MatDialog);

  openSkillModal(): void {
    this.dialog.open(SkillDetailDialog, {
      data: { skill: this.skill },
      panelClass: 'skill-detail-dialog-panel',
      backdropClass: 'skill-detail-dialog-backdrop',
      maxWidth: '95vw',
    });
  }
}
