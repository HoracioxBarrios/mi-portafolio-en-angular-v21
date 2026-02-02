import { Component, Input } from '@angular/core';
import { SkillsIcon } from '../skills-icon/skills-icon';
import { SkillGroup } from '@app/core/models/skill-group.interface';

@Component({
  selector: 'app-skills-group',
  imports: [SkillsIcon],
  templateUrl: './skills-group.html',
  styleUrl: './skills-group.scss',
})
export class SkillsGroup {
@Input({ required: true }) group!: SkillGroup;



}
