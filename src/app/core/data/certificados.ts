import { Certificado } from '../models/certificado.interface';

/**
 * Certificaciones de la sección "Sobre Mí".
 * Lista provista por el usuario (actualizada).
 * TODO(user): completar `anio`, `url` e `imagen` con datos reales antes de publicar.
 * Los campos opcionales sin dato quedan `undefined` y la tarjeta se renderiza
 * sin enlace/imagen (el componente es tolerante a ello).
 */
export const CERTIFICADOS: Certificado[] = [
  {
    tituloKey: 'about.certificados.angular.title',
    plataforma: 'Udemy',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.cSharp.title',
    plataforma: 'Udemy',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.claude101.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.claudeCodeInAction.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.claudeCode101.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.mcp.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.agentSkills.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.subAgents.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.devinFoundations.title',
    plataforma: 'Devin AI · Cognition',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
  {
    tituloKey: 'about.certificados.mcpAdvanced.title',
    plataforma: 'Anthropic',
    // TODO(user): agregar anio, url e imagen reales del certificado.
  },
];
