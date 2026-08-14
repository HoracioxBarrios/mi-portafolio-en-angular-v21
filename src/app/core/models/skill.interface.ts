export interface Skill {
  name: string;
  icon: string;
  description: string;
  stack: 'frontend' | 'backend' | 'tools' | 'ia';
  /** Marca un logo monocromático que debe pintarse adaptado al tema (no full-color). */
  monochrome?: boolean;
}
