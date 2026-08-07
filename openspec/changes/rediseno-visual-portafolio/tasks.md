## 1. Tokens, tipografía y temas

- [ ] 1.1 Cargar Space Grotesk y JetBrains Mono en `src/index.html` (Google Fonts, `preconnect` + `display=swap`) y quitar Roboto
- [ ] 1.2 Redefinir paleta en `src/styles/themes/_tokens.scss` (dark: `--bg-primary: #0b0f0d`, `--surface`, `--surface-raised`, acento lime `--accent: #bef264` con `--accent-strong`, `--accent-soft-bg`, `--accent-soft-border`, `--accent-glow`; light: fondo `#f4f6f0`, acento `#65a30d`) y añadir tokens de CTA reservado (`--cta-bg`, `--cta-bg-hover`) con texto de contraste adecuado
- [ ] 1.3 Añadir escala de radios en tokens runtime y en `src/styles/abstracts/_variables.scss` (`--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--radius-pill: 999px`)
- [ ] 1.4 Aplicar sistema tipográfico en `src/styles/base/_typography.scss` (títulos Space Grotesk, utilidad `.font-mono`) con escala por breakpoint (H1 48–60px desktop / 32–40px móvil, H2/H3, body 16–18px) y letter-spacing negativo (-0.4px a -1px) en títulos
- [ ] 1.5 Reemplazar `mat.$blue-palette` por palette Material custom del acento en `src/styles.scss` y verificar que dialogs/modales sigan funcionando
- [ ] 1.6 Ejecutar lint + typecheck tras los cambios de estilos

## 2. Header con navegación propia

- [ ] 2.1 Reemplazar `<mat-tab-group>` por `<nav class="header__nav">` con `<a routerLink routerLinkActive="is-active">` en `header.html`, más marca con fuente display
- [ ] 2.2 Limpiar `header.ts`: quitar `MatTabsModule`, `activeIndex`, `onTabChange` y `syncTabWithRoute` (estado activo resuelto por `routerLinkActive`); conservar `navLinks`, `theme`, `tr`
- [ ] 2.3 Actualizar `header.scss` (links estilizados, estado activo con acento neón, marca display, responsive mobile) y aplicar radios de la escala
- [ ] 2.4 Ejecutar lint + typecheck y verificar navegación entre las 3 rutas en dark y light

## 3. Hero y CTA de Home

- [ ] 3.1 Quitar degradados azul/púrpura en `home.scss`; añadir grid sutil (linear-gradients 1px) + glow radial con `--accent-glow` en hero y CTA
- [ ] 3.2 Ajustar markup mínimo en `home.html` si se necesitan contenedores decorativos (`.hero__badge`, `.hero__glow`)
- [ ] 3.3 Refinar copy del hero en `es.ts`/`en.ts` (`home.hero.subtitle`): propuesta de valor específica con resultado/métrica (ej. primera IA generativa en producción), sin promesas genéricas
- [ ] 3.4 Aplicar tokens de CTA reservado (`--cta-bg`) a los botones `btn--primary` y `btn--large` de home; usar acento suave en links/tags/indicadores
- [ ] 3.5 Ejecutar lint + typecheck

## 4. Partículas de fondo (canvas propio)

- [ ] 4.1 Crear componente `src/app/shared/components/particles/` (`particles.ts`, `particles.html`, `particles.scss`) con `<canvas aria-hidden="true">` fijo (`pointer-events: none`, `z-index: 0`)
- [ ] 4.2 Implementar bucle `requestAnimationFrame`: puntos flotantes con glow del acento (leído de `--accent`/`--accent-glow`), sin líneas de conexión; escalar por `devicePixelRatio`
- [ ] 4.3 Reducir cantidad de partículas en viewports móviles (`matchMedia`) y detener el bucle en pestaña oculta (visibilitychange) y con `prefers-reduced-motion`
- [ ] 4.4 Re-leer el color del acento al alternar tema (dark/light) y limpiar listeners/RAF en `ngOnDestroy`
- [ ] 4.5 Integrar el componente en `main-layout.html` (detrás del contenido) y ejecutar lint + typecheck

## 5. Micro-interacciones de scroll y sticky CTA móvil

- [ ] 5.1 Crear directiva `src/app/shared/directives/reveal.ts` con `IntersectionObserver` (umbral ~0.1–0.15): fade-in de 300–500ms `ease-out` con desplazamiento ≤16px, animando solo `opacity/transform`
- [ ] 5.2 Aplicar reveal a las secciones principales (home, proyectos, sobre-mi, perfil) y stagger (transition-delay incremental) a tarjetas hijas; respetar `prefers-reduced-motion` (sin animación) y desconectar el observer en `ngOnDestroy`
- [ ] 5.3 Crear componente `sticky-cta` para móvil (`position: fixed; bottom`), visible tras primer scroll (~200px), oculto al volver arriba, con `--cta-bg` y `aria-label`; solo en viewports móviles
- [ ] 5.4 Añadir `padding-bottom` de reserva en `main-layout` para que el sticky CTA no tape el footer, y ejecutar lint + typecheck

## 6. Sección de Certificados en Sobre Mí

- [ ] 6.1 Definir modelo `Certificado` e interfaz en `src/app/core/models/` (titulo, plataforma, anio?, url?, imagen?)
- [ ] 6.2 Crear `src/app/core/data/certificados.ts` con datos reales provistos por el usuario (Udemy, Claude Code, Claude Code in Action, curso de C#, Curso de Angular, etc.); campos sin dato real quedan `undefined` con `TODO(user)` — prohibido inventar datos
- [ ] 6.3 Añadir claves i18n en `es.ts` y `en.ts` (`about.certificados.*`: título de sección, subtítulo, texto del enlace)
- [ ] 6.4 Crear componente de tarjetas de certificado (o sub-sección) con radios de la escala, acento suave en plataforma, mono en año, hover con `--accent-glow` sutil; tolerante a `url`/`imagen` opcionales
- [ ] 6.5 Insertar `.sobre-mi__certificados` en `sobre-mi.html` tras educación y antes de skills; grid responsive (1 columna móvil, 2–3 desktop)
- [ ] 6.6 Ejecutar lint + typecheck y verificar sección en dark/light y ES/EN

## 7. Migración de componentes a tokens

- [ ] 7.1 `project-card.scss`: radios → `--radius-lg`, tags con mono + acento suave
- [ ] 7.2 `proyectos.scss` y `sobre-mi.scss`/`sobre-mi.html`: labels y períodos con `.font-mono`, radios de escala, acento suave en títulos y acento pleno solo en CTAs
- [ ] 7.3 `profile.scss`, `footer.scss`, `skills.scss`/`skills-group.scss`: acento suave en iconos/links, radios de escala, hover con `--accent-glow` sutil
- [ ] 7.4 Modales (`figma-inspiration-dialog`, `project-detail-modal`): radios y acento de la escala
- [ ] 7.5 Ejecutar lint + typecheck

## 8. Verificación final

- [ ] 8.1 Revisión visual en navegador: dark/light, ES/EN, desktop y móvil (hero, header, cards, sobre-mi incl. certificados, partículas de fondo, reveal de scroll, sticky CTA, footer) sin errores de consola
- [ ] 8.2 Verificar contraste WCAG AA (≥4.5:1) de acento/body/CTA en ambos temas
- [ ] 8.3 Verificar `prefers-reduced-motion` (partículas y reveal estáticos/desactivados) y rendimiento en móvil
- [ ] 8.4 Confirmar que el acento pleno del CTA solo se usa en acciones primarias y que links/tags usan variantes suaves
- [ ] 8.5 Confirmar que no se usan más los colores/valores antiguos (blue `#2196f3`, degradados hero) salvo restos de Material no visibles
- [ ] 8.6 Actualizar `tests/playwright/app-knowledge.md`: navegación ahora con `getByRole('link')` en vez de `tab`
- [ ] 8.7 Confirmar que los certificados no muestran datos inventados y que los `TODO(user)` quedan listados para que el usuario cargue URLs/imágenes reales
- [ ] 8.8 `openspec status` final y resumen del cambio al usuario
