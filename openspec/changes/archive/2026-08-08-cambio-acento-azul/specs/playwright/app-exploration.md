# App Exploration — cambio-acento-azul

Generado: 2026-08-08 (Playwright MCP sobre `http://localhost:4200`)

## Base

- BASE_URL: `http://localhost:4200` (HTTP 200, dev server)
- Framework: Angular 21 SPA, i18n ES/EN, tema dark-first con `data-theme` en `<html>`
- Auth: no requiere (landing pública, guest-only)
- Errores de consola: solo `favicon.ico` 404 (no crítico)

## Rutas exploradas

| Route | Status | Notas |
|-------|--------|-------|
| `/home` | OK | Hero + CTAs, `h1` "Hola, soy Hora" (ES) |
| `/proyectos` | OK | 4 cards, 28 tags, 4 botones "Ver más..." |
| `/sobre-mi` | OK | Skills (25 imgs), canvas de partículas presente |

## Selectores verificados (colores computados en dark)

| Elemento | Selector | Valor dark | Fuente token |
|----------|----------|-----------|--------------|
| Marca | `.header__brand` | `#1e88e5` | `--accent-strong` |
| Nav activo | `.header__nav-link.is-active` / `[aria-current="page"]` | `#2196f3` | `--accent` |
| Botón primario hero | `.btn--primary` ("Conóceme más", "Escribime") | bg `#2196f3`, texto `#0b0f0d` | `--cta-bg`/`--cta-text` |
| CTA card | `.project-card__action--primary` ("Ver proyecto") | bg `#2196f3`, texto `#0b0f0d` | `--accent`/`--text-on-accent` |
| Tag | `.project-card__tag` | bg `rgba(33,150,243,0.1)`, texto `#1e88e5` | `--accent-soft-bg`/`--accent-strong` |
| Sticky CTA (móvil, tras scroll) | `.sticky-cta` | bg `#2196f3`, texto `#0b0f0d` | `--cta-bg`/`--cta-text` |
| Partículas | `canvas` | píxeles azules (`rgb(35,156,241)`), 100% azulados | `--accent`/`--accent-glow` |
| Dot activo modal | `.figma-modal__dot.is-active` | `#1e88e5` | `--accent-strong` |
| Nav modal proyecto | `.modal__nav` | bg `#2196f3`, icono `#0b0f0d` | `--accent`/`--text-on-accent` |
| Tag modal | `.modal__tag` | bg `rgba(33,150,243,0.1)`, texto `#1e88e5` | `--accent-soft-bg`/`--accent-strong` |
| Stack skill | `.skill-dialog__stack` (frontend) | bg `rgba(33,150,243,0.1)`, texto `#2196f3` | `--accent-soft-bg`/`--accent` |

## Selectores verificados (light)

| Elemento | Selector | Valor light |
|----------|----------|-------------|
| Tokens raíz | `:root[data-theme=light]` | `--accent: #1769c4`, `--accent-strong: #115293`, `--cta-bg: #1769c4`, `--cta-text: #ffffff` |
| CTA hero/card | `.btn--primary`, `.project-card__action--primary` | bg `#1769c4`, texto `#ffffff` |
| Tag | `.project-card__tag` | bg `rgba(23,105,196,0.1)`, texto `#115293` |

## Tokens runtime (dark)

```
--accent: #2196f3
--accent-strong: #1e88e5
--accent-soft-bg: rgba(33,150,243,0.10)
--accent-soft-border: rgba(33,150,243,0.28)
--accent-glow: rgba(33,150,243,0.35)
--cta-bg: #2196f3
--cta-bg-hover: #1e88e5
--cta-text: #0b0f0d
```

## Tokens runtime (light)

```
--accent: #1769c4
--accent-strong: #115293
--accent-soft-bg: rgba(23,105,196,0.10)
--accent-glow: rgba(23,105,196,0.18)
--cta-bg: #1769c4
--cta-bg-hover: #115293
--cta-text: #ffffff
```

## Contraste WCAG AA (verificado con cálculo de luminancia)

| Par | Ratio | AA (≥4.5) |
|-----|-------|-----------|
| `#2196f3` sobre `#0b0f0d` (dark texto) | 6.18:1 | ✅ |
| `#1e88e5` sobre `#0b0f0d` (dark strong) | 5.24:1 | ✅ |
| `#0b0f0d` sobre `#2196f3` (CTA dark) | 6.18:1 | ✅ |
| `#1769c4` sobre `#ffffff` (light texto) | 5.45:1 | ✅ |
| `#115293` sobre `#ffffff` (light strong) | 7.92:1 | ✅ |
| `#ffffff` sobre `#1769c4` (CTA light) | 5.45:1 | ✅ |

## Controles (header)

| Control | Selector | Dark (ES) | Light | EN |
|---------|----------|-----------|-------|----|
| Tema | `.header__icon-btn` (`aria-label="Activar tema claro"`) | icono `light_mode` | `aria-label="Activar tema claro"` (mismo) | — |
| Idioma | `.header__lang-btn` (`aria-label="Switch to English"`) | texto `EN` | — | texto `ES` |

> Nota: el `aria-label` del botón de tema no cambia al alternar (`Activar tema claro`); el estado se lee vía token `--bg-primary` o el icono (`light_mode`/`dark_mode`).

## Riesgos / convenciones

- El sticky CTA solo existe en móvil (<769px) y tras scroll: testear con viewport móvil.
- Los acentos por categoría de skill (backend `#2e9e6b`, tools `#8b5cf6`, ia `#e8833a`) son intencionales; no son restos lime.
- Los colores de acento se leen por `getComputedStyle`, no por selector de clase de color.
