## Why

El portafolio actual usa el look por defecto de Angular Material: paleta azul `$blue-palette` (`#2196f3`), tipografía Roboto en todo, degradados azul→púrpura fijos en hero y CTA, navegación por tabs Material crudas y un fondo plano sin carácter. Los reclutadores identifican ese aspecto como plantilla genérica o diseño generado por IA, lo que resta credibilidad como diseñador/frontend developer. Se busca una identidad visual propia, oscura y con carácter técnico ("developer"), que diferencie al portafolio, preserve la estructura actual (header, perfil, datos de perfil y secciones existentes) e incorpore: un efecto de partículas sutil de fondo y una nueva sección de Certificados dentro de "Sobre Mí".

## What Changes

- Reemplazar la paleta azul de Material por una identidad dark-first con acento neón propio (fuera de la paleta Material), conservando la identidad y estructura actuales (header, perfil, datos de perfil, secciones).
- Definir un sistema tipográfico con identidad: fuente display con carácter para títulos + fuente mono para detalles técnicos, abandonando Roboto como única familia, con escala de tamaños por breakpoint y tracking negativo en títulos (guía 2026).
- Rediseñar el hero y el CTA: eliminar los degradados azul→púrpura fijos y adoptar un sistema visual coherente con el tema oscuro (textura/patrón sutil, glows del acento, jerarquía editorial), con un copy de propuesta de valor específico (resultado + métrica concreta en lugar de "resuelvo problemas").
- **Nuevo**: reservar el color de CTA para las acciones primarias (botones de contacto/acción) y usar variantes suaves del acento en links, tags e indicadores, para que el CTA conserve protagonismo.
- Reemplazar los tabs Material del header por una navegación propia con nombre/monograma y links estilizados (markup mínimo en `header.html`).
- **Nuevo**: efecto de partículas de fondo — puntos flotantes sutiles con glow del acento neón, implementado con un canvas propio ligero (sin librerías externas), discreto, no interactivo y que respeta `prefers-reduced-motion`.
- **Nuevo**: micro-interacciones de scroll (reveal sutil y fade-in escalonado de secciones al entrar en viewport), respetando `prefers-reduced-motion`.
- **Nuevo**: sticky CTA de contacto en móvil — botón flotante visible tras el primer scroll, con el mismo color de CTA reservado.
- **Nuevo**: sección de Certificados dentro de "Sobre Mí" (tras Formación académica) con tarjetas que listan certificados (Udemy, Claude Code, Claude Code in Action, curso de C#, Curso de Angular, etc.), con datos i18n ES/EN y placeholders `TODO(user)` para URLs/imágenes reales.
- Unificar un sistema de radios, espaciados y elevaciones en tokens CSS consistentes entre componentes.
- Mantener el tema claro/oscuro existente y la i18n ES/EN sin cambios de comportamiento.
- Preservar la funcionalidad y los selectores accesibles (aria-labels) de los componentes existentes.

## Capabilities

### New Capabilities
- `diseno-visual`: sistema de diseño visual del portafolio — tokens de color/tema (dark-first con acento neón y color de CTA reservado), sistema tipográfico (display + mono, escala y tracking), navegación del header, hero con propuesta de valor específica, tarjetas de proyectos, secciones de "Sobre Mí" (incluida la nueva sección de Certificados), fondo con partículas sutiles, micro-interacciones de scroll, sticky CTA en móvil, footer y modales con estética coherente y no genérica.

### Modified Capabilities
- Ninguna (no existen specs previas en el repo).

## Impact

- `src/styles/`: `abstracts/_variables.scss`, `themes/_tokens.scss`, `themes/_dark-theme.scss`, `themes/_light-theme.scss`, `base/_typography.scss`, `styles.scss` (temas Material).
- `src/index.html`: carga de las nuevas fuentes.
- `src/app/shared/components/header/`: `header.html` (markup mínimo) y `header.scss`.
- `src/app/features/home/`: `home.html` y `home.scss` (hero + CTA).
- `src/app/features/proyectos/`: `proyectos.scss` y `project-card.scss`.
- `src/app/features/sobre-mi/`: `sobre-mi.html` y `sobre-mi.scss` (incluye la nueva sección de Certificados).
- **Nuevo** `src/app/shared/components/particles/`: componente/directiva de partículas de fondo (canvas + lógica de animación).
- **Nuevo** `src/app/shared/components/certificados/` (o componente dentro de `sobre-mi`): tarjetas de certificados.
- `src/app/core/i18n/`: `es.ts` y `en.ts` (nuevas claves de certificados y copy del hero).
- `src/app/core/data/`: datos de certificados con placeholders `TODO(user)`.
- `src/app/shared/components/`: `profile.scss`, `footer.scss`, `skills.scss`, `skills-group.scss`, `figma-inspiration-dialog.scss`, `project-detail-modal.scss`.
- Sin cambios de dependencias ni de comportamiento/API (canvas propio, sin librerías externas).
