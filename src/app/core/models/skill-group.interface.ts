import { Skill } from './skill.interface';

export interface SkillGroup {
  title: string;
  stack: 'frontend' | 'backend' | 'tools';
  skills: Skill[];
}
