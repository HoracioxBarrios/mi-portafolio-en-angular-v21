## Context

El portafolio acabó de migrar a una identidad dark-first con acento lime/verde neón (cambio `rediseno-visual-portafolio`, ya implementado). Todos los componentes (header, hero, cards, certificados, modales, partículas, sticky CTA) consumen el acento vía tokens CSS (`src/styles/themes/_tokens.scss`), SCSS (`src/styles/abstracts/_variables.scss`) y la palette Material (`src/styles.scss`). El usuario quiere volver al azul que tenía antes el círculo de la foto de perfil: familia Material Blue. Ver `proposal.md` — Why para la motivación.

Los valores históricos del círculo (verificado en git, commit `db0a272`): `$color-primary: #2196F3`, `--accent: #2196f3` (dark) / `#1769c4` (light), `--accent-strong: #1976d2` (dark) / `#115293` (light), soft con `rgba(33,150,243,…)` / `rgba(23,105,196,…)`.

## Goals / Non-Goals

**Goals:**
- Sustituir la familia lime/verde por la familia azul del círculo en los tres niveles de color (tokens runtime, variables SCSS, palette Material) manteniendo la misma arquitectura de tokens.
- Conservar la regla "acento pleno solo en CTA/acciones primarias; variantes suaves en links/tags/indicadores".
- Mantener WCAG AA (≥4.5:1) en ambos temas para texto normal con el acento.
- Cero cambios de markup, rutas, lógica, i18n ni estructura de componentes: los estilos ya leen tokens.

**Non-Goals:**
- No rediseñar componentes ni alterar tipografía, partículas, reveal, sticky CTA o certificados (solo cambia el color que consumen).
- No agregar azules "neón más brillante" (el usuario confirmó la paleta exacta del círculo).
- No tocar fondo/tema base (`--bg-primary`, superficies, textos neutros), salvo que un par de contraste lo exija.

## Decisions

### D1. Tokens runtime en `_tokens.scss`
Reemplazar la familia lime por la familia azul Material previa del círculo:
- **Dark**: `--accent: #2196f3`, `--accent-strong: #1e88e5` (ver D4), `--accent-soft-bg: rgba(33,150,243,0.10)`, `--accent-soft-border: rgba(33,150,243,0.28)`, `--accent-glow: rgba(33,150,243,0.35)`.
- **Light**: `--accent: #1769c4`, `--accent-strong: #115293`, `--accent-soft-bg: rgba(23,105,196,0.10)`, `--accent-soft-border: rgba(23,105,196,0.28)`, `--accent-glow: rgba(23,105,196,0.18)`.
- **CTA reservado** (regla de acento pleno intacta):
  - Dark: `--cta-bg: #2196f3`, `--cta-bg-hover: #1e88e5`, `--cta-text: #0b0f0d` (6.18:1 sobre azul).
  - Light: `--cta-bg: #1769c4`, `--cta-bg-hover: #115293`, `--cta-text: #ffffff` (5.45:1 y 7.92:1).
- `--text-on-accent` mantiene los valores actuales según tema (dark `#0b0f0d`, light `#ffffff`).
- **Alternativa descartada**: mantener `#1976d2` como strong en dark → rompe AA (4.19:1); se sube un tono a `#1e88e5` conservando la familia.

### D2. Variables SCSS en `_variables.scss`
`$color-primary: #2196f3` y `$color-accent: #1976d2` (usadas por `profile.scss` y mixins) pasan a la familia azul. Revisar usos para no romper la regla de CTA reservado.

### D3. Palette Material en `styles.scss`
Reemplazar `mat.$chartreuse-palette` por la palette Material custom del acento azul (tonos blue, ej. generada con `mat.define-theme` sobre la paleta blue M3 o una custom de 50–900 alrededor de `#2196f3`), para que dialogs, ripples, iconos y estados de foco de Material no destaquen en verde. Verificar que modales (figma, project-detail, skill-detail) sigan funcionando.

### D4. Ajuste de contraste documentado
`#1976d2` (blue-700) sobre `#0b0f0d` da 4.19:1 (< 4.5). Se usa `#1e88e5` (blue-600, 5.24:1) como `--accent-strong` en dark. El resto de la paleta previa se conserva exacta. Verificado con cálculo de ratio WCAG (función de luminancia relativa).

### D5. Fallbacks en componentes con valores hardcodeados
- `particles.ts`: defaults `#bef264` y glow lime → `#2196f3` y `rgba(33,150,243,0.35)` (el runtime ya relee `--accent`/`--accent-glow` del CSS, así que el cambio solo afecta al valor por defecto).
- Grep global de `bef264`, `a3e635`, `65a30d`, `4d7c0f`, `3f6212`, `chartreuse` para detectar restos en código y specs.

## Risks / Trade-offs

- [Restos de la paleta lime en comentarios, specs o valores hardcodeados fuera de `_tokens.scss`] → Grep exhaustivo de los hex lime y `chartreuse`; corregir todo lo que afecte render.
- [Cambiar la palette Material puede alterar estados internos de Material (ripple, focus)] → Mantener la API `mat.define-theme` y validar dialogs/modales tras el cambio (mismo riesgo ya mitigado en `rediseno-visual-portafolio`).
- [El azul del CTA sobre fondos claros pierde protagonismo vs. el lime] → El requisito de acento pleno reservado se mantiene; el contraste AA verificado compensa.
- [`--accent-strong` en dark con `#1e88e5` (blue-600) difiere un tono del histórico `#1976d2`] → Desviación mínima y documentada (D4), necesaria para AA; el usuario aprobó la familia del círculo, no un hex específico de strong.

## Migration Plan

1. Editar `_tokens.scss` (dark + light): acento, strong, soft-bg/border/glow y tokens de CTA.
2. Editar `_variables.scss`: `$color-primary` / `$color-accent`.
3. Editar `styles.scss`: palette Material lime → azul.
4. Editar `particles.ts`: valores por defecto de color/glow.
5. Grep de restos lime/verde y corrección de cualquier hardcode.
6. `npm run build` (typecheck + compilación) y revisión visual dark/light + ES/EN (navegador).
- **Rollback**: revertir por commit de estilo sin afectar lógica; los cambios son aislados a tokens/palette.

## Open Questions

- Ninguna para implementar: la paleta azul exacta ya fue confirmada por el usuario (opción "Paleta azul exacta del círculo").
