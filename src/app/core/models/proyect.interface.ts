export interface Project {
  title: string;
  /** Clave de traducción para la descripción (ver i18n/es.ts · en.ts). */
  descKey: string;
  /** Imagen principal (thumbnail de la card). */
  image: string;
  /** Imágenes adicionales para el slider del modal de detalle (opcional). */
  images?: string[];
  technologies: string[];
  repoUrl?: string;
  repoPrivate: boolean;
  liveUrl?: string;
  featured?: boolean;
}
