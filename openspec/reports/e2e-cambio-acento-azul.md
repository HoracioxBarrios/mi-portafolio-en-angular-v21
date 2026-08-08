# Reporte E2E — cambio-acento-azul

Fecha: 2026-08-08
Cambio: `cambio-acento-azul`
Comando: `npx playwright test tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`

## Resumen

| Métrica | Valor |
|---------|-------|
| Tests | 11 |
| Chromium | ✅ 11/11 |
| Firefox | ✅ 11/11 |
| WebKit | ✅ 11/11 |
| Total | ✅ 33/33 |
| Resultado | PASADO |

## Spec

`tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`

Plan previo: `openspec/changes/cambio-acento-azul/specs/playwright/test-plan.md`
Exploración: `openspec/changes/cambio-acento-azul/specs/playwright/app-exploration.md`
Fuente de verdad: `openspec/changes/cambio-acento-azul/specs/diseno-visual/spec.md`

## Cobertura por escenario

| Escenario (spec) | Tests | Estado |
|------------------|-------|--------|
| Acento azul en tema oscuro por defecto | 3 (tokens, nav/marca, tags) | ✅ |
| Acento coherente al alternar tema | 1 (dark→light→dark) | ✅ |
| CTA reservado con acento azul | 3 (hero, card, sticky móvil) | ✅ |
| Contraste AA del acento en ambos temas | 2 (dark, light) | ✅ |
| Componentes Material sin destaque verde | 2 (barrido selectores, dialog) | ✅ |

## Detalle de ejecución

### Nota de paralelismo

- Primera corrida multi-browser con 8 workers: Firefox falló con timeouts en `page.goto`
  (saturación del dev server con 8 navegadores simultáneos).
- Re-ejecución Firefox con `--workers=4`: 11/11 ✅. No es bug del cambio ni del spec.

### Lecciones registradas en app-knowledge.md

- Los tokens CSS (`--accent`, `--cta-bg`, ...) se leen como hex (`#2196f3`).
- Los colores computados (`getComputedStyle`) se leen como `rgb(...)`/`rgba(...)`.
- `page.evaluate` no serializa closures: pasar argumentos en objeto `{ sel, prop }`.
- El nav activo transiciona su color al cargar → usar `expect.poll` para esperar el valor final.
- El modal de proyecto es `mat-dialog-container[role="dialog"]` > `.project-detail-modal`.
- El `aria-label` del toggle de tema no cambia al alternar (`Activar tema claro`); leer el estado por el atributo `data-theme` del `<html>`.

## Hallazgos / riesgos

- Único error de consola esperado: `favicon.ico` 404 (pre-existente, no relacionado).
- Firefox reporta además fallo de descarga de fuente Space Grotesk de `fonts.gstatic.com`
  (fuera de control del repo; no bloquea). No relacionado con el cambio.
- No se requirió Healer: sin reparaciones de selectores ni aserciones.

## Artefactos

- `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts` (nuevo)
- `openspec/changes/cambio-acento-azul/specs/playwright/test-plan.md` (nuevo)
- `openspec/changes/cambio-acento-azul/specs/playwright/app-exploration.md` (nuevo)
- `tests/playwright/app-knowledge.md` (actualizado: sección acento azul + lecciones)
