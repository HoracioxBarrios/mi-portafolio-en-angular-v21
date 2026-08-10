## 1. Tokens de color (runtime y SCSS)

- [x] 1.1 `_tokens.scss` (dark): `--accent: #2196f3`, `--accent-strong: #1e88e5`, soft-bg/border/glow con `rgba(33,150,243,…)`, y `--cta-bg`/`--cta-bg-hover`/`--cta-text` de la familia azul (texto `#0b0f0d`)
- [x] 1.2 `_tokens.scss` (light): `--accent: #1769c4`, `--accent-strong: #115293`, soft-bg/border/glow con `rgba(23,105,196,…)`, y `--cta-bg`/`--cta-bg-hover`/`--cta-text` de la familia azul (texto `#ffffff`)
- [x] 1.3 `_variables.scss`: `$color-primary` y `$color-accent` a la familia azul (revisar usos de `$color-accent` para no romper la regla de CTA reservado)

## 2. Palette Material

- [x] 2.1 Reemplazar `mat.$chartreuse-palette` por la palette Material custom del acento azul en `styles.scss`
- [x] 2.2 Verificar que dialogs/modales (figma, project-detail, skill-detail) sigan funcionando tras el cambio de palette

## 3. Valores por defecto y restos

- [x] 3.1 `particles.ts`: valores por defecto del color (`#bef264` → `#2196f3`) y glow (`rgba(190,242,100,…)` → `rgba(33,150,243,…)`)
- [x] 3.2 Grep de restos lime/verde (`bef264`, `a3e635`, `65a30d`, `4d7c0f`, `3f6212`, `chartreuse`) en `src/` y corregir cualquier hardcode que afecte render

## 4. Verificación

- [x] 4.1 `npm run build` (typecheck + compilación) sin errores
- [x] 4.2 Revisión visual en navegador: dark/light, ES/EN (hero, header, cards, sobre-mi con certificados, partículas, sticky CTA, modales)
- [x] 4.3 Verificar contraste AA del acento en ambos temas (≥4.5:1 para texto normal) y que el acento pleno sigue solo en CTAs/acciones primarias

## 5. E2E (Playwright)

- [x] 5.1 `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`: 11 tests cubriendo los 5 escenarios del spec (tokens dark, nav/marca, tags, coherencia al alternar tema, CTA hero/card/sticky, contraste AA dark/light, sin restos lime)
- [x] 5.2 Ejecución: 33/33 passing (chromium, firefox, webkit). Reporte en `openspec/reports/e2e-cambio-acento-azul.md`
