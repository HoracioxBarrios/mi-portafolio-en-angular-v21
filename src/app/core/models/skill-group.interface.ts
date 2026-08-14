import { Skill } from './skill.interface';

export interface SkillGroup {
  title: string;
  stack: 'frontend' | 'backend' | 'tools' | 'ia';
  skills: Skill[];
}
