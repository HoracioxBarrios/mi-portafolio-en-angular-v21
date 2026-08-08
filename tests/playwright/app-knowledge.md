# App Knowledge — MiPortafolioEnAngularV21

Generated: 2026-08-07
Last updated: 2026-08-08

Conocimiento E2E transversal a changes. Actualizado por la exploración (Paso 4), leído por los Pasos 5/6.

## Routes

Rutas descubiertas desde `src/app/app.routes.ts` (sitemap.xml no existe). Usadas por el modo "all" para generar Page Objects.

| Route | Auth | Page Object | Notes |
|-------|------|-------------|-------|
| `/` | guest | `HomePage.ts` | Redirect a `/home` |
| `/home` | guest | `HomePage.ts` | Landing + hero, `h1` "Hola, soy Hora" (ES) |
| `/proyectos` | guest | `ProyectosPage.ts` | Grid de proyectos, botones "Ver más..." |
| `/sobre-mi` | guest | `SobreMiPage.ts` | Links sociales |

## Credential Format

| Field | Format | Source |
|-------|--------|--------|
| username | `<pattern>` | e.g. `email@example.com` or `test_user_001` |
| password | `<pattern>` | |
| login endpoint | `<path>` | e.g. `/api/auth/login` |

> **Nota**: esta app no requiere autenticación (landing pública). No aplicar auth setup.

## Common Selector Patterns

Prioridad: `[data-testid]` > `getByRole` > `getByLabel` > `getByText` > CSS

### Forms

| Element | Selector | Notes |
|---------|----------|-------|
| submit btn | `[data-testid="..."]` or `getByRole('button', { name: '...' })` | |
| text input | `getByLabel('...')` or `[data-testid="..."]` | |
| password input | `getByLabel('...')` or `[name="..."]` | |

### Navegación (header propio, sin tabs de Material)

| Element | Selector | Notes |
|---------|----------|-------|
| marca | `a.header__brand` | link a `/home`, texto `HB`, `aria-current="page"` cuando activo |
| nav Home | `getByRole('link', { name: 'Home' })` | `.header__nav-link`, `routerLinkActive="is-active"`, `aria-current="page"` cuando activo |
| nav Proyectos | `getByRole('link', { name: 'Proyectos' })` | |
| nav Sobre Mí | `getByRole('link', { name: 'Sobre Mí' })` | |
| botón idioma | `[aria-label="Switch to English"]` | `.header__lang-btn`, texto `EN` (en ES) / `ES` (en EN) |
| botón tema | `[aria-label="Activar tema claro"]` | `.header__icon-btn`, icono `light_mode` (dark) / `dark_mode` (light) |

### Links

| Element | Selector | Notes |
|---------|----------|-------|
| link GitHub | `a[href*="github.com"]` | header/footer |
| link LinkedIn | `a[href*="linkedin.com"]` | |
| link Instagram | `a[href*="instagram.com"]` | |
| link email | `a[href^="mailto:"]` | "Escribime" |

### Feedback

| Element | Selector | Notes |
|---------|----------|-------|
| error msg | `[data-testid="error-msg"]` or `.error` | |
| success msg | `[data-testid="success-msg"]` | |
| loading spinner | `[data-testid="loading"]` | |

## Architecture

| Aspect | Value | Notes |
|--------|-------|-------|
| Architecture | frontend-only | SPA Angular 21 sin backend propio (verificado en `package.json`) |
| Backend server | — | No requiere backend para E2E |
| How to restart backend | — | No aplica |

## SPA Routing

- Framework: Angular 21 (Router)
- URL changes without page reload: sí
- History API: sí
- Hash routing: no

## Dynamic Content Conventions

- User-specific data: use `toContainText`, never `toHaveText`
- Timestamps: normalize or use regex
- Random IDs: avoid asserting on auto-generated values
- Pagination: test first/last page, boundary conditions
- Textos bilingües (ES/EN): los selectores de texto pueden cambiar al alternar idioma (`EN`); usar `aria-label` o `data-testid` cuando aplique.

## Project Conventions

| Convention | Value | Notes |
|------------|-------|-------|
| BASE_URL | `http://localhost:4200` | Default de `playwright.config.ts` |
| auth method | — | No requiere auth |
| multi-user roles | — | Sin roles |
| Framework UI | Angular + Angular Material | Nav propia en header (sin tabs), Material Icons, i18n ES/EN |

## Selector Fixes (Healer memory)

Persists selector repairs across sessions. Prevents the same selector from being healed repeatedly.

| Date | Route | Old Selector | New Selector | Reason |
|------|-------|-------------|-------------|--------|
| | | | | |

---

## Acento azul (cambio-acento-azul)

Cambio de identidad de acento: lime/verde → azul Material (`#2196f3` family). Tokens en `src/styles/themes/_tokens.scss` y `src/styles/abstracts/_variables.scss`.

### Tokens runtime dark (`<html data-theme="dark">`)

| Token | Valor |
|-------|-------|
| `--accent` | `#2196f3` |
| `--accent-strong` | `#1e88e5` |
| `--accent-soft-bg` | `rgba(33,150,243,0.10)` |
| `--accent-soft-border` | `rgba(33,150,243,0.28)` |
| `--accent-glow` | `rgba(33,150,243,0.35)` |
| `--cta-bg` | `#2196f3` |
| `--cta-bg-hover` | `#1e88e5` |
| `--cta-text` | `#0b0f0d` |

### Tokens runtime light

| Token | Valor |
|-------|-------|
| `--accent` | `#1769c4` |
| `--accent-strong` | `#115293` |
| `--accent-soft-bg` | `rgba(23,105,196,0.10)` |
| `--cta-bg` | `#1769c4` |
| `--cta-bg-hover` | `#115293` |
| `--cta-text` | `#ffffff` |

### Selectores con acento (verificados)

| Elemento | Selector | dark | light |
|----------|----------|------|-------|
| Marca | `.header__brand` | `#1e88e5` | `#115293` |
| Nav activo | `.header__nav-link.is-active` / `[aria-current="page"]` | `#2196f3` | `#1769c4` |
| CTA hero | `.btn--primary` | bg `#2196f3`, texto `#0b0f0d` | bg `#1769c4`, texto `#ffffff` |
| CTA card | `.project-card__action--primary` | bg `#2196f3` | bg `#1769c4` |
| Tag | `.project-card__tag` | bg `rgba(33,150,243,0.1)`, texto `#1e88e5` | bg `rgba(23,105,196,0.1)`, texto `#115293` |
| Sticky CTA (móvil, tras scroll) | `.sticky-cta` | bg `#2196f3`, texto `#0b0f0d` | — |
| Dot activo modal | `.figma-modal__dot.is-active` | `#1e88e5` | — |
| Nav modal | `.modal__nav` | bg `#2196f3` | — |
| Tag modal | `.modal__tag` | bg `rgba(33,150,243,0.1)`, texto `#1e88e5` | — |
| Stack skill | `.skill-dialog__stack` | bg `rgba(33,150,243,0.1)`, texto `#2196f3` | — |

### Controles

| Control | Selector | Notas |
|---------|----------|-------|
| Tema | `.header__icon-btn` (`aria-label="Activar tema claro"`) | El `aria-label` NO cambia al alternar; leer estado por token `--bg-primary` o icono |
| Idioma | `.header__lang-btn` (`aria-label="Switch to English"`) | texto `EN` (ES) / `ES` (EN) |

### Convenciones de aserción de color

- Leer colores con `getComputedStyle` (rgb/rgba), comparar con valores esperados como rgb.
- Los acentos de categoría de skill (backend `#2e9e6b`, tools `#8b5cf6`, ia `#e8833a`) son intencionales, no restos lime.
- CTA en light usa texto `#ffffff`; CTA en dark usa texto `#0b0f0d`.
- Sticky CTA solo en viewport móvil (<769px) y tras scroll.

---

## Assertion Fixes (Healer memory)

Persists assertion repairs (typos, spec drift) across sessions.

| Date | Test | Old Assertion | New Assertion | Reason |
|------|------|-------------|-------------|--------|
| | | | | |

---

## Changelog

| Date | Change | By |
|------|--------|-----|
| | | |

---

> **Updating this file**: After each E2E exploration (Step 4), extract new shared patterns and update this file. Generator (Step 6) reads this before writing tests. After Healer repairs (Step 9): append selector fixes to **Selector Fixes** table, append assertion fixes to **Assertion Fixes** section.
