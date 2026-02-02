import { Component, Input } from '@angular/core';
import { Skill } from '@app/core/models/skill.interface';

@Component({
  selector: 'app-skills-icon',
  imports: [],
  templateUrl: './skills-icon.html',
  styleUrl: './skills-icon.scss',
})
export class SkillsIcon {
 @Input({ required: true }) skill!: Skill;



 openSkillModal(){
  
 }
}
