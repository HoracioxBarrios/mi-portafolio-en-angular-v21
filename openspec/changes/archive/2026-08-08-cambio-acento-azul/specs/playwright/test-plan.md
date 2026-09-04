# Test Plan — cambio-acento-azul

Generado: 2026-08-08 · Modo: change · Framework: Playwright + `@playwright/test` (TypeScript)

## File Location & Project

- Repo: `C:\Users\Hora\Desktop\Proyectos\mi-portafolio-en-angular-v21`
- Framework de test: Playwright (npx playwright test)
- Config: `playwright.config.ts` (baseURL `http://localhost:4200`, testDir `./tests`, projects chromium/firefox/webkit)
- Report: HTML (`playwright-report/`)
- Cobertura objetivo: **solo las superficies visuales afectadas por el cambio de acento** (no toda la app)

## Test Suite

- Suite única: **"Identidad de acento azul"** — valida que el sistema de color use el acento azul `#2196f3` (dark) / `#1769c4` (light) en links, botones primarios, tags, indicadores y CTA reservado; coherencia al alternar tema; contraste WCAG AA; y ausencia de restos lime en componentes Material.

## Test Files

| File | Propósito |
|------|-----------|
| `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts` | Tests E2E del cambio (archivo único a generar) |

No se requieren Page Objects (change mode): la suite usa `page` directamente con `getByRole`/`getByText` y `getComputedStyle` para leer colores reales del DOM.

## Test Specs & Scenarios

Mapeo escenario (spec `diseno-visual`) → test E2E:

| # | Escenario del spec | Test E2E (describe/it) | Aserciones clave |
|---|--------------------|------------------------|------------------|
| 1 | Acento azul en tema oscuro por defecto | `Tema oscuro por defecto usa acento azul` | `:root` sin `data-theme` → token `--accent` = `rgb(33, 150, 243)`; nav activo / marca / tags / CTA renderizados en azul; texto de UI con acento ≠ verde (no `rgb(124, 179, 66)` family) |
| 2 | Acento coherente al alternar tema | `El acento conserva identidad azul al alternar tema` | Toggle a claro: `--accent` = `rgb(23, 105, 196)`, tags/CTA en familia azul; toggle a oscuro de nuevo: vuelve a `#2196f3`. La identidad cromática (matiz azul) se mantiene en ambos temas |
| 3 | CTA reservado con acento azul | `CTA reservado usa acento pleno azul` | `.btn--primary` ("Escribime"), `.project-card__action--primary` ("Ver proyecto") y sticky CTA (móvil) usan `--cta-bg` pleno y texto de contraste |
| 4 | Contraste AA del acento en ambos temas | `Texto de acento cumple WCAG AA (≥4.5:1)` | Cálculo de ratio por luminancia (función helper) para pares acento/strong sobre fondo en dark y light; todos ≥ 4.5:1 |
| 5 | Componentes Material sin destaque verde | `No hay restos lime/verde en acentos renderizados` | Barrido de elementos visibles: ningún color de acento calculado coincide con palette lime `#c5d93d`/`#8bc34a`/`#d4e157`; foco/ripple/iconos sin verde |

### Consideraciones de implementación

- **Lectura de color**: siempre `getComputedStyle` (rgb/rgba); comparar con valores esperados normalizados (ej. `rgb(33, 150, 243)`).
- **Sticky CTA**: test en viewport móvil (`{ width: 390, height: 844 }`) con scroll hacia abajo antes de asertar.
- **Tema light**: activar haciendo clic en `.header__icon-btn` (aria-label `Activar tema claro`); el `aria-label` no cambia al alternar → detectar estado por el token `--bg-primary`.
- **Material sin verde**: los acentos de categoría de skill (backend `#2e9e6b`, tools `#8b5cf6`, ia `#e8833a`) son intencionales y NO deben marcar fallo; el barrido se limita a colores lime/verde chártreuse de la palette sustituida.
- **Selector de referencia para detección de estado del nav**: `[aria-current="page"]` + clase `is-active`.
- **Sin auth**: no aplica `auth.setup.ts`.

## Setup & Dependencies

- No se requieren nuevas dependencias.
- El servidor de dev debe estar activo en `http://localhost:4200` (validado con `seed.spec.ts`, que devuelve 4/4 passing).

## Riesgos

- Si los browsers no están instalados, `npx playwright install` será necesario (validado: seed corrió OK, browsers presentes).
- El único error de consola esperado es `favicon.ico` 404 (pre-existente, no relacionado).
