export interface Certificado {
  /** Clave i18n del título (about.certificados.nombre.*). */
  tituloKey: string;
  /** Emisor/plataforma del certificado (Udemy, Claude Code, etc.). */
  plataforma: string;
  /** Año de obtención (opcional; sin dato real → undefined). */
  anio?: number;
  /** URL de verificación del certificado (opcional; sin dato real → undefined). */
  url?: string;
  /** URL de la imagen del certificado (opcional; sin dato real → undefined). */
  imagen?: string;
}
