export interface Project {
  title: string;
  /** Clave de traducción para la descripción (ver i18n/es.ts · en.ts). */
  descKey: string;
  image: string;
  technologies: string[];
  repoUrl?: string;
  repoPrivate: boolean;
  liveUrl?: string;
  featured?: boolean;
}
