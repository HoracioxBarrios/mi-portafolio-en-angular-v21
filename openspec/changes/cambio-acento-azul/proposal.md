## Why

El portafolio acaba de adoptar una identidad visual dark-first con acento lime/verde neón (`#bef264`), pero el usuario prefiere volver a la identidad azul que ya tenía el sitio: el círculo de la foto de perfil usaba tonalidades de azul Material (family `#2196f3`). Se busca cambiar el acento del sistema de tokens de verde neón a azul, manteniendo toda la estructura visual y de accesibilidad recién construida.

## What Changes

- Cambiar el acento de los design tokens runtime (`_tokens.scss`) de la familia lime/verde neón a la familia azul previa del círculo del perfil:
  - **Dark**: `--accent: #2196f3`, `--accent-strong: #1976d2`, soft-bg/border/glow derivados de `rgba(33, 150, 243, …)`.
  - **Light**: `--accent: #1769c4`, `--accent-strong: #115293`, soft derivados de `rgba(23, 105, 196, …)`.
- Ajustar el token de CTA reservado (`--cta-bg` / `--cta-bg-hover`) y `--cta-text` a la familia azul, manteniendo WCAG AA (≥4.5:1) en ambos temas (el azul previo `#1769c4`/`#115293` ya cumple sobre fondos claros).
- Reemplazar la palette Material custom lime (`mat.$chartreuse-palette`) en `styles.scss` por la palette Material azul correspondiente, para que componentes Material (dialogs, ripples, iconos) no destaquen en verde.
- Actualizar `_variables.scss` (colores SCSS) al azul.
- El círculo del perfil (conic-gradient) y el glow pasan automáticamente al azul vía tokens; sin cambios estructurales.
- Mantener intactos: tipografía Space Grotesk + JetBrains Mono, partículas, reveal, sticky CTA, certificados, i18n, radios y accesibilidad.

## Capabilities

### New Capabilities

- Ninguna.

### Modified Capabilities

- `diseno-visual`: Cambia el color del acento neón (lime/verde) por la paleta azul previa del círculo del perfil, manteniendo la misma estructura de tokens (acento pleno en CTA, variantes suaves en links/tags/indicadores) y los mismos requisitos de contraste AA en ambos temas.

## Impact

- `src/styles/themes/_tokens.scss`: reemplazo de la familia de colores del acento (dark + light) y de los tokens de CTA.
- `src/styles/abstracts/_variables.scss`: `$color-primary` y `$color-accent` (usados por `profile.scss`) pasan a la familia azul.
- `src/styles.scss`: `mat.$chartreuse-palette` → palette Material azul para los temas Material.
- `src/app/shared/components/particles/particles.ts`: valores por defecto del color del acento (`#bef264`) → azul, aunque el runtime ya lee `--accent` del CSS.
- Sin cambios de markup, rutas, lógica, i18n ni estructura de componentes.
