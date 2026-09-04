## Why

El rediseño visual (`rediseno-visual-portafolio`) reemplazó los tabs de Material del header (Inicio / Proyectos / Sobre Mí) por enlaces propios (`header__nav-link`). El usuario quiere recuperar el tabbar original basado en `mat-tab-group`, que consideraba mejor para la navegación. Los cambios posteriores (acento azul y eliminación de la marca `HB` con renombrado a "Inicio") se mantienen.

## What Changes

- **Restaurar el tabbar de Material en el header**: volver a usar `mat-tab-group` con `mat-tab` para la navegación principal (Inicio / Proyectos / Sobre Mí), con sincronización de la pestaña activa con la ruta activa (`activeIndex`, `onTabChange`).
- **Reemplazar la lógica de links por la lógica de tabs**: eliminar los estilos y markup de `header__nav-link` (con `routerLinkActive` / `aria-current`) y restaurar los imports de `MatTabsModule`, `MatToolbarModule`, `MatButtonModule` y la sincronización con el router.
- **Mantener**:
  - El botón de idioma y el botón de tema (controles del header) tal como están.
  - El cambio `navbar-quitar-hb-y-home-inicio` ya aplicado: sin marca `HB`, y el tab de inicio etiquetado como "Inicio" (ES) / "Home" (EN).
  - El acento azul del cambio `cambio-acento-azul` ya aplicado.
- **Actualizar pruebas y documentación** que referencian los enlaces propios:
  - `tests/playwright/app-knowledge.md` (selector de navegación).
  - `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts` (selector `.header__nav-link.is-active` → tab activo de Material).

## Capabilities

### New Capabilities

- `navegacion`: comportamiento observable de la navegación principal del header como tabs de Material: pestañas localizadas, pestaña activa sincronizada con la ruta y controles de idioma/tema presentes. Se crea como spec nueva porque no existen specs principales previas en el repo; refleja el comportamiento resultante tras restaurar el tabbar original.

### Modified Capabilities

<!-- Ninguna: no hay specs principales previas en el repo (solo deltas archivados). -->

## Impact

- **Código**:
  - `src/app/shared/components/header/header.ts` (lógica de tabs + imports).
  - `src/app/shared/components/header/header.html` (markup `mat-tab-group`).
  - `src/app/shared/components/header/header.scss` (estilos de tabs y ocultamiento del tab body; remover estilos de `header__nav-link` y del grid de 3 columnas).
- **Pruebas E2E**:
  - `tests/playwright/app-knowledge.md`.
  - `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`.
- **Sin cambios** en `src/app/core/i18n/es.ts` (el renombrado a "Inicio" ya está aplicado en el working tree).
- **Sin cambios** en dependencias: `@angular/material/tabs` ya está disponible en el proyecto.
