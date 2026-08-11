## Context

Proyecto Angular 21 standalone, i18n por diccionario (`src/app/core/i18n/es.ts` / `en.ts`), perfil en `main-layout.ts` con datos hardcodeados que se pasan al `app-profile`. El header usa un `mat-tab-group` para navegación + zona de controles (idioma/tema). Ver `proposal.md - Why`.

## Goals / Non-Goals

**Goals:**
- Botón "Mi CV" visible en el header (todas las páginas), rectangular y con texto, abriendo Google Drive en pestaña nueva.
- Subtitle del hero con copy de conversión aprobado (opción B), en ES y EN.
- Quitar el enlace "Portafolio" del sidebar de perfil.

**Non-Goals:**
- No cambiar el badge del hero ni el texto del CTA "¿Buscás un Angular Developer?".
- No introducir nuevos servicios, dependencias ni rutas.
- No modificar la navegación por tabs.

## Decisions

**D1. Botón "Mi CV" en `header__controls` (derecha).** Se agrega un botón recto (no circular) con icono de descarga + texto "Mi CV"/"My CV", junto al botón de idioma y tema. Alternativa descartada: tab extra en el `mat-tab-group` — las tabs son navegación interna y un enlace externo a Drive no representa una ruta; además quedaría "activo" sin ruta que lo refleje.

**D2. Enlace directo al CV.** El botón es un `<a href="https://drive.google.com/file/d/1juiFa2ruwAO6TnKhPLkSBOxaKYLTNy_S/view?usp=sharing" target="_blank" rel="noopener">`. Usa el link de Drive tal cual (decisión del usuario: abrir Drive, no descarga directa). En EN el texto del botón es "My CV". Se agrega `aria-label` localizado para accesibilidad.

**D3. Datos del CV en `main-layout`.** El URL del CV se define en `userInfo` como `cvUrl` (single source of truth, igual que `portafolio`), se pasa al `app-header` como input `cvUrl`. Alternativa: hardcodear en el header — descartada por duplicar el dato en dos componentes.

**D4. Quitar `portafolioUrl` del profile.** Se elimina el `@if (portafolioUrl)` de `profile.html`, el input `portafolioUrl` de `profile.ts` y su uso en `main-layout.html`/`.ts` (propiedad `portafolio` del `userInfo` y getter `portafolioUrl`).

**D5. i18n.** Nuevas claves en `es.ts`/`en.ts`:
- `home.hero.subtitle` (reemplaza el texto métrico actual).
- `header.cvButton` y `header.cvAria` ("Mi CV"/"My CV" y el aria-label correspondiente).

**D6. Estilos.** En `header.scss`, clase `.header__cv-btn` reutilizando variables existentes (accento `--accent-strong`, `--radius-md`), estilo rectangular con texto, hover con `--accent-soft-bg`.

## Risks / Trade-offs

- **El enlace de Drive puede requerir confirmación de acceso** (quien vea el link debe poder acceder al archivo compartido) → El link es público según `?usp=sharing`; verificar manualmente al cerrar.
- **Overflow en móvil**: agregar un botón más a `header__controls` puede apretar la zona en pantallas chicas → El botón es compacto (icono + texto corto); ajustar `gap` y permitir que la nav flexione (`flex: 1 1 auto` ya está).
- **i18n desincronizado**: olvidar actualizar `en.ts` rompe el build si TS valida el tipo → Actualizar ambas claves juntas en el mismo cambio.
