import { Component, Input, inject } from '@angular/core';
import { SkillsIcon } from '../skills-icon/skills-icon';
import { SkillGroup } from '@app/core/models/skill-group.interface';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-skills-group',
  imports: [SkillsIcon],
  templateUrl: './skills-group.html',
  styleUrl: './skills-group.scss',
})
export class SkillsGroup {
  protected readonly tr = inject(Translation);

  @Input({ required: true }) group!: SkillGroup;
}
