export interface Skill {
  name: string;
  icon: string;
  /** Clave de traducción de la descripción de la tecnología. */
  descKey: string;
  stack: 'frontend' | 'backend' | 'tools' | 'ia';
  /** Marca un logo monocromático que debe pintarse adaptado al tema (no full-color). */
  monochrome?: boolean;
  /** Fuerza la renderización como `<img>` full-color (para logos con fondo propio). */
  fullColor?: boolean;
}
