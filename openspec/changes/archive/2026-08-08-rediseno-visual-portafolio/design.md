## Context

El portafolio es una SPA Angular 21 con Angular Material (MD3), temas dark/light vía tokens CSS (`data-theme`), i18n ES/EN y componentes BEM por feature. El look actual usa la paleta azul por defecto de Material (`$blue-palette`), Roboto y degradados azul→púrpura fijos. Ver `proposal.md` — Why para la motivación. El usuario confirmó: dirección **dark-first con acento lima/verde neón**, **efecto de partículas sutiles** (puntos flotantes con glow, sin líneas de conexión, canvas propio sin librerías) y **sección de Certificados dentro de "Sobre Mí"** con datos provistos por el usuario (`TODO(user)` para URLs/imágenes reales).

## Goals / Non-Goals

**Goals:**
- Identidad visual propia (acento neón, tipografía display+mono) que elimine el aspecto "plantilla Material/IA".
- Sistema de tokens unificado (color, radios, espaciado, elevación) reutilizable por todos los componentes.
- Color de CTA reservado: el acento pleno solo en acciones primarias; links/tags/indicadores con variantes suaves.
- Escala tipográfica con tracking negativo y jerarquía clara por breakpoint (guía landing-page-mastery 2026).
- Copy del hero con propuesta de valor específica (resultado/métrica), no genérica.
- Micro-interacciones de scroll (reveal sutil) y sticky CTA en móvil, ambos accesibles (`prefers-reduced-motion`).
- Efecto de partículas de fondo sutil, de bajo costo de renderizado, que no interfiera con el contenido ni con la accesibilidad.
- Sección de Certificados dentro de "Sobre Mí" con estructura de datos clara, i18n ES/EN y datos reales cargados por el usuario.
- Cambios de markup mínimos y localizados (header, hero, sobre-mi) sin reestructurar rutas ni lógica de negocio.

**Non-Goals:**
- No cambiar contenido, rutas, i18n, ni funcionalidad (modales, galerías, i18n, tema).
- No reemplazar Angular Material por otra librería de UI.
- No rediseñar el sistema de grid/responsive de las páginas.
- No añadir librerías externas de partículas (tsParticles, particles.js): el efecto se implementa con canvas nativo para evitar dependencias y el look genérico.
- No inventar datos de certificados: las URLs/imágenes reales las carga el usuario.

## Decisions

### D1. Tipografía: Space Grotesk + JetBrains Mono
- Cargar en `src/index.html` vía Google Fonts (`display=swap` + `preconnect`): **Space Grotesk** (títulos/marca/body) y **JetBrains Mono** (elementos técnicos: tags, labels de sección, períodos, navegación, código). Alineado con la guía landing-page-mastery (Space Grotesk recomendada para headlines "Bold/Creative"; Roboto prohibido como genérica).
- `_typography.scss`: títulos con `font-family: 'Space Grotesk'`; clase utilidad `.font-mono` y aplicación a `project-card__tag`, `proyectos__label`, `sobre-mi__section-title`, `sobre-mi__job-period`, `sobre-mi__edu-inst`, `.header__nav a`.
- **Escala tipográfica** (guía 2026): H1 48–60px desktop / 32–40px móvil con weight 700–900; H2 32–40px / 24–32px; H3 24–28px / 20–24px; body 16–18px; letter-spacing negativo en títulos (`-0.4px` a `-1px`). Centralizar en `_typography.scss` con `clamp()` y quitar tamaños sueltos de componentes (hero `font-size: 3rem`, títulos de sección `2rem`).
- **Alternativa descartada**: Fraunces/Playfair (serif editorial, otra dirección), Roboto seguir como única (no aporta identidad).
- **Riesgo**: fuente serif/none con fallback sans genérico; en offline cae a `sans-serif`. Aceptable en Vercel.

### D2. Paleta: acento lima neón + fondo oscuro con matiz
- Redefinir `src/styles/themes/_tokens.scss` y `abstracts/_variables.scss`:
  - **Dark**: `--bg-primary: #0b0f0d` (negro con matiz oliva, no `#0a0a0a` puro), `--surface: #131a16`, `--surface-raised: #1b241e`; acento `--accent: #bef264` (lime neón), `--accent-strong: #a3e635`, `--accent-soft-bg: rgba(190, 242, 100, 0.10)`, `--accent-soft-border: rgba(190, 242, 100, 0.28)`; añadir `--accent-glow: rgba(190, 242, 100, 0.35)` para glows.
  - **Light**: fondo `#f4f6f0` (claro con matiz), acento `#65a30d` (lime-600, cumple WCAG AA sobre claro).
  - **Token de CTA reservado**: `--cta-bg` (dark: `#bef264` lime pleno con texto `#0b0f0d`; light: `#65a30d` lime-600 con texto blanco) y `--cta-bg-hover`. Regla de uso: `--accent`/`--accent-strong` se reservan para CTAs y elementos activos clave; links, tags e indicadores usan `--accent-soft-bg`/`--accent-soft-border` para no competir con el botón primario (guía landing-page-mastery: "CTA color used ONLY for CTAs").
- En `styles.scss`, reemplazar `mat.$blue-palette` por una **palette Material custom del acento** (tonos lime) para que los componentes Material restantes (dialogs, iconos, ripple) no destaquen en azul. El color visible de la UI lo mandan los tokens CSS propios.
- **Alternativa descartada**: cyan/teal neón y magenta (menos asociados a "developer terminal"); verde Material genérico (sigue pareciendo plantilla).
- **Riesgo**: contraste en light. Mitigación: validar los pares elegidos contra WCAG AA (4.5:1) durante implementación.

### D3. Hero y CTA: tratamiento oscuro con glow neón + grid sutil + copy específico
- Eliminar los gradientes fijos. `home.scss`:
  - Hero: fondo `--bg-primary` con un **grid sutil** de 1px (dos `linear-gradient` cruzados, opacidad baja) y un **glow radial** del acento (`radial-gradient` + `--accent-glow`) detrás del título; tipografía display grande (H1 con escala de D1); badge mono opcional ("Angular Developer").
  - CTA: mismo lenguaje (glow + grid) sin degradado púrpura.
- `home.html`: mínimo — añadir contenedores decorativos (`.hero__badge`, `.hero__glow`) si hace falta; el resto por CSS.
- **Copy del hero**: refinar `home.hero.subtitle` en `es.ts`/`en.ts` para comunicar propuesta de valor específica (resultado o métrica concreta, por ejemplo "primer asistente conversacional con IA generativa en producción" o la reducción de errores), en lugar de "resuelvo problemas". Mantener el tono directo y la i18n ES/EN.

### D4. Header: navegación propia con links (sin tabs Material)
- Reemplazar `<mat-tab-group>` en `header.html` por `<nav class="header__nav">` con `<a routerLink routerLinkActive="is-active">` por cada link de `navLinks`, más una marca (nombre "Hora Barrios" o monograma `HB`) con fuente display.
- `header.ts`: quitar `MatTabsModule` y la lógica de `activeIndex`/`onTabChange` (el estado activo lo resuelve `routerLinkActive`); conservar `navLinks`, `theme` y `tr`.
- **Impacto E2E**: la navegación cambia de `role=tab` a `role=link`. Documentado en `tests/playwright/app-knowledge.md`; los Page Objects deberán usar `getByRole('link')`.

### D5. Radios y elevaciones en tokens
- Añadir en `_tokens.scss` (runtime) y `_variables.scss` (SCSS) una escala única: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-pill: 999px`.
- Migrar los componentes con valores sueltos actuales (6px botones, 12px cards, 14px secciones, 16px skills) a la escala: botones → `--radius-md`, cards/secciones → `--radius-lg`, pills → `--radius-pill`, chips/inputs → `--radius-sm`.

### D6. Partículas de fondo: canvas propio ligero (sin librerías)
- **Nuevo componente** `src/app/shared/components/particles/particles.ts` + `particles.scss` que monta un `<canvas>` fijo (`position: fixed; inset: 0; z-index: 0; pointer-events: none`) detrás del `main-layout`.
- Implementación:
  - Bucle con `requestAnimationFrame`, ~40–60 puntos en desktop, ~15–25 en móvil (`matchMedia('(max-width: 768px)')`), redibujando solo con `devicePixelRatio` escalado.
  - Cada punto: posición, radio (2–4px), velocidad lenta y suave (opcional parpadeo de opacidad conglow). Sin líneas de conexión para evitar el look genérico de "particles.js".
  - Color desde `--accent` / `--accent-glow` leídos del CSS (runtime), re-leyendo al cambiar tema (observador de `data-theme` o re-evaluación al alternar).
  - **Accesibilidad**: respetar `prefers-reduced-motion` (estático o desactivado) vía `matchMedia`; el canvas es decorativo (`aria-hidden="true"`).
  - Limpieza: cancelar `requestAnimationFrame` y desconectar listeners en `ngOnDestroy`.
- **Alternativa descartada**: tsParticles/particles.js (look genérico, bundle extra), CSS-only con múltiples divs animados (pesado en móvil, menos control).
- **Riesgo**: rendimiento en dispositivos de gama baja. Mitigación: reducir partículas en móvil, usar `will-change` mínimo, no animar propiedades CSS por partícula (todo en canvas), y ofrecer `prefers-reduced-motion` para desactivar.

### D7. Sección de Certificados dentro de "Sobre Mí"
- **Nuevo componente** `src/app/shared/components/certificados/` (o sub-sección directa en `sobre-mi`): una lista de tarjetas de certificado.
- Estructura de datos en `src/app/core/data/certificados.ts` con un modelo `Certificado`:
  - `titulo` (clave i18n o texto), `plataforma` (emisor: Udemy, Claude Code, etc.), `anio` opcional, `url` opcional, `imagen` opcional.
  - Los campos sin dato real quedan `undefined` y la tarjeta se renderiza sin enlace/imagen, con `TODO(user)` documentado en el archivo de datos. **Prohibido inventar datos.**
- i18n: nuevas claves en `es.ts` y `en.ts` (`about.certificados.title`, `about.certificados.subtitle`, `about.certificados.verCertificado`, etc.).
- Estilo: tarjetas con radios de la escala D5, acento neón en el emisor, fuente display en el título, mono en el año/plataforma, hover con `--accent-glow` sutil; grid responsive (1 columna móvil, 2–3 desktop) reutilizando el patrón de `project-card`/`sobre-mi`.
- Colocación en `sobre-mi.html`: bloque `.sobre-mi__certificados` después de `.sobre-mi__educacion` y antes de `.sobre-mi__skills-section`.
- **Alternativa descartada**: ruta propia `/certificados` (cambia navegación y rutas, fuera del alcance confirmado); acordeón plegado (más clics, menor visibilidad).
- **Riesgo**: datos incompletos. Mitigación: el componente es tolerante a campos opcionales; los `TODO(user)` dejan clara la acción pendiente.

### D8. Micro-interacciones de scroll (reveal sutil)
- **Directiva** `src/app/shared/directives/reveal.ts` (o atributo CSS en secciones): al entrar en viewport (`IntersectionObserver`, umbral ~0.1–0.15), la sección hace un fade-in breve (300–500ms `ease-out`) con ligero desplazamiento vertical (≤16px).
- Aplicar de forma escalonada (stagger) a tarjetas hijas con `transition-delay` incremental (50–100ms) dentro de la sección, sin animar propiedades de layout (solo `opacity` + `transform`).
- **Accesibilidad**: si `matchMedia('(prefers-reduced-motion: reduce)')` coincide, la directiva aplica el estado visible sin animación. `IntersectionObserver` se desconecta en `ngOnDestroy` y solo observa lo necesario (no animar elementos fuera de viewport con coste).
- **Alternativa descartada**: librerías de scroll-reveal (AOS/GSAP) — bundle extra; animaciones CSS puras más simples y controladas. Parallax agresivo en hero (puede marear y complicar `prefers-reduced-motion`).
- **Riesgo**: CLS (layout shift) si se anima con retraso mal medido. Mitigación: animar solo `opacity/transform`, no alturas ni márgenes.

### D9. Sticky CTA de contacto en móvil
- **Componente** `src/app/shared/components/sticky-cta/` (o bloque dentro de `main-layout`): barra/botón flotante fijo al fondo en viewports móviles (`position: fixed; bottom`, `z-index` por encima del contenido), con el color de CTA reservado (`--cta-bg`) y el mismo destino que el CTA actual (`mailto:`).
- Visible solo tras el primer scroll (`IntersectionObserver` o listener de scroll con umbral, por ejemplo `scrollY > ~200px`), oculto al volver arriba. `aria-label` claro ("Contactar a Horacio Barrios"). No cubrir el contenido: botón compacto en el corner con `pointer-events` solo en sí mismo y `padding-bottom` extra en `main` para que el footer no quede tapado.
- **Desktop**: no se muestra (solo móvil, `matchMedia('(max-width: 768px)')`).
- **Alternativa descartada**: barra sticky de ancho completo con precio/oferta (típica de landing e-commerce; en un portafolio un botón compacto es más sobrio); sticky header CTA (ya hay header sticky).
- **Riesgo**: tapar contenido del footer en móvil. Mitigación: espaciado de reserva (`padding-bottom` en layout) y botón discreto en esquina.

## Risks / Trade-offs

- [La navegación cambia de role `tab` a `link` y puede romper selectores E2E existentes] → Actualizar `app-knowledge.md` y los Page Objects; los selectores pasan a `getByRole('link', ...)`.
- [Fuentes de Google Fonts dependen de red] → `preconnect` + `display=swap` + fallbacks (Space Grotesk → sans-serif; JetBrains Mono → monospace).
- [El glow neón puede cansar visualmente si se abusa] → Aplicar glows solo en áreas clave (hero, hover, marca) y con opacidad moderada.
- [Contraste del lime sobre fondos claros] → Elegir tono oscuro (`#65a30d`) en light y validar AA al implementar.
- [Cambiar la palette Material puede alterar estados internos de Material (ripple, focus)] → Mantener la API de temas existente (`mat.define-theme`) y validar dialogs/modales tras el cambio.
- [El canvas de partículas puede consumir batería/CPU en móvil] → Reducir partículas en viewports pequeños, `pointer-events: none`, detener el bucle en pestaña oculta (visibilidad de documento) y con `prefers-reduced-motion`.
- [Datos de certificados incompletos al implementar] → Campos opcionales, tolerancia en el template y `TODO(user)`; el usuario carga URLs/imágenes reales antes de publicar.
- [El acento pleno usado en muchos lugares diluye el CTA] → Token `--cta-bg` reservado; links/tags/indicadores usan `--accent-soft-*`.
- [El reveal de scroll puede provocar CLS o molestar con `prefers-reduced-motion`] → Animar solo `opacity/transform`, sin layout; respetar la media query de movimiento reducido.
- [El sticky CTA móvil puede tapar contenido del footer] → Espaciado de reserva en `main` y botón compacto en esquina.

## Migration Plan

1. Tokens: paleta + CTA reservado + radios + fuentes + escala tipográfica (`index.html`, `_tokens.scss`, `_variables.scss`, `_typography.scss`, `styles.scss`).
2. Header: reemplazo de tabs por nav propio (`header.ts`, `header.html`, `header.scss`).
3. Hero/CTA de Home: tratamiento visual + copy específico (`home.html`, `home.scss`, `es.ts`/`en.ts`).
4. Partículas: componente `particles` + integración en `main-layout`.
5. Micro-interacciones: directiva `reveal` + aplicación en secciones; sticky CTA móvil.
6. Certificados: modelo + datos (`certificados.ts`), i18n, componente de tarjetas, sección en `sobre-mi`.
7. Componentes restantes: `project-card`, `proyectos`, `profile`, `footer`, `skills`, modales → aplicar tokens y ajustes visuales.
8. Verificación: `lint + typecheck` por cambio; revisión visual en navegador (dark/light, ES/EN, responsive, `prefers-reduced-motion`, sin errores de consola).
- **Rollback**: cambios aislados por componente; revertir por commit de estilo sin afectar lógica.

## Open Questions

- Datos exactos de certificados (URLs, imágenes, año): se resuelven con `TODO(user)` al implementar; no afectan la arquitectura.
- Intensidad exacta de las partículas (cantidad/velocidad/opacidad): ajustable en implementación sin alterar las specs.
