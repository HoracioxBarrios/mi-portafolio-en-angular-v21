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

  /** Se pintan por CSS (mask) los íconos del grupo IA y los logos monocromáticos
   *  (GitHub, Miro), para darles su color de marca o adaptarse al tema. El resto usa <img>. */
  get tinted(): boolean {
    return this.skill.stack === 'ia' || !!this.skill.monochrome;
  }

  get glyphUrl(): string {
    return `url(${this.skill.icon})`;
  }

  get tint(): string {
    // Claude: color de marca. Monocromáticos (Copilot, Cursor, GitHub, Miro): se
    // adaptan al tema. Metodologías de IA sin logo (Spec-Driven, BMAD): ámbar del grupo.
    if (this.skill.name === 'Claude Code') return '#d97757';
    if (this.skill.monochrome) return 'var(--text-primary)';
    if (this.skill.stack === 'ia') return '#e8833a';
    return 'var(--text-primary)';
  }

  openSkillModal(): void {
    this.dialog.open(SkillDetailDialog, {
      data: { skill: this.skill },
      panelClass: 'skill-detail-dialog-panel',
      backdropClass: 'skill-detail-dialog-backdrop',
      maxWidth: '95vw',
    });
  }
}
