import { Certificado } from '../models/certificado.interface';

/**
 * Certificados de la sección "Sobre Mí".
 * Los títulos provienen del proposal (datos provistos por el usuario).
 * TODO(user): completar `anio`, `url` e `imagen` con datos reales antes de publicar.
 * Los campos opcionales sin dato quedan `undefined` y la tarjeta se renderiza
 * sin enlace/imagen (el componente es tolerante a ello).
 */
export const CERTIFICADOS: Certificado[] = [
  {
    tituloKey: 'about.certificados.claudeCode.title',
    plataforma: 'Claude Code (Anthropic)',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.claudeCodeInAction.title',
    plataforma: 'Udemy',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.cSharp.title',
    plataforma: 'Udemy',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.angular.title',
    plataforma: 'Udemy',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
];
