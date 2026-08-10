## Context

El header actual (working tree) navega con enlaces propios `header__nav-link` (`routerLinkActive`/`aria-current`), resultado del rediseño visual (`rediseno-visual-portafolio`). El usuario quiere recuperar el tabbar de Material original (`mat-tab-group` con `mat-tab`) que existía antes de ese rediseño. El tema Material ya usa la palette azul (`$azul-palette`, styles.scss:24), por lo que la pestaña activa heredará el color azul del tema sin trabajo adicional. Ya están aplicados y archivados: acento azul (`cambio-acento-azul`) y eliminación de marca `HB` + renombrado a "Inicio" (`navbar-quitar-hb-y-home-inicio`). Ver proposal.md - Why.

## Goals / Non-Goals

**Goals:**
- Restaurar la navegación del header como tabbar de Material (`mat-tab-group`), idéntico al comportamiento pre-rediseño (commit `38721bd^`).
- Mantener intactos los controles de idioma y tema del header actual.
- Mantener el resultado del cambio `navbar-quitar-hb-y-home-inicio` (sin marca `HB`, tab de inicio = "Inicio"/"Home").
- Mantener el acento azul heredado del tema Material en la pestaña activa.
- Alinear pruebas E2E y documentación con el nuevo selector de navegación.

**Non-Goals:**
- Revertir el resto del rediseño visual (solo cambia la navegación del header).
- Cambiar etiquetas i18n (`es.ts` ya tiene "Inicio").
- Agregar marca/logo de vuelta.
- Cambiar el tema o la palette de Material.

## Decisions

### 1. Restaurar `mat-tab-group` con sincronización de ruta (header.ts + header.html)
Se restaura la lógica original del commit `38721bd^`:
- `activeIndex` + `onTabChange(index)` que navega por `router.navigate([link.path])`.
- `syncTabWithRoute()` vía `router.events` con `takeUntilDestroyed(this.destroyRef)`, que pone `activeIndex = 0` para rutas desconocidas.
- Imports: `MatTabsModule`, `MatToolbarModule`, `MatButtonModule`, `Router`, `DestroyRef`, `takeUntilDestroyed`.

**Alternativa considerada:** mantener enlaces propios y solo cambiar su apariencia. Descartada porque el usuario pidió explícitamente el tabbar original de Material.

**Detalle:** `navLinks` mantiene `id` como `track` (el original usaba `track link.id`); se conserva la key `nav.home` → "Inicio" (ES) / "Home" (EN) del working tree actual.

### 2. Restaurar estilos de tabs en header.scss
- `&__container`: volver a `display: flex; flex-direction: row; align-items: center; gap: $spacing-sm;` y quitar el grid de 3 columnas.
- `&__nav`: restaurar el bloque `::ng-deep` con `cursor: pointer` en `.mat-mdc-tab`, `.mat-mdc-tab-label`, `.mdc-tab`, `.mdc-tab__text-label`, y ocultar `.mat-mdc-tab-body-wrapper` (evita el salto del navbar por el cuerpo vacío del tab group).
- Eliminar `&__nav-link` y su selector `.is-active`.
- `&__controls`: quitar `grid-column: 3; justify-self: end;`.
- Conservar los estilos actuales de `__icon-btn` y `__lang-btn` (usa `--radius-pill`, `--overlay-bg`, `--accent` azul).

### 3. Alinear pruebas E2E y documentación con tabs de Material
- `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`: reemplazar el selector `.header__nav-link.is-active` (líneas ~43, 139, 142, 145, 270) por el tab activo de Material `[role="tab"][aria-selected="true"]`. El color del texto del tab activo en MD3 dark con primary `$azul-palette` debe ser `#2196f3` (`rgb(33, 150, 243)`); el helper `colorDe` apuntará al `tab__text-label` o al propio tab según el color computado real.
- `tests/playwright/app-knowledge.md`: sección "Navegación (header propio, sin tabs de Material)" → "Navegación (tabbar de Material)": selectores `getByRole('tab', { name: 'Inicio' })`, estado activo `[aria-selected="true"]`, y mantener los selectores de los botones de idioma/tema.
- Verificar el color real del tab activo al aplicar (los tokens MD3 pueden usar tonos de la palette) y ajustar el valor esperado en el test solo si difiere, con confirmación del usuario.

### 4. Sin cambios en i18n ni dependencias
`@angular/material/tabs` ya está disponible (los imports del commit `38721bd^` compilan). No se toca `es.ts` ni `en.ts`.

## Risks / Trade-offs

- **El color de la pestaña activa puede no ser exactamente `#2196f3`** → MD3 aplica tonalidades de la palette a `--mat-tab-active-label-text-color`. Si difiere del esperado en el test de acento, se actualiza el valor esperado tras verificación visual/E2E y confirmación del usuario (no inventar el color).
- **`::ng-deep` en header.scss** es necesario para alcanzar las clases internas de Material → ya se usaba en el original; se conserva solo el mínimo (cursor + ocultar tab body).
- **Los tests E2E del cambio `cambio-acento-azul` quedarían desincronizados si no se actualizan** → tarea explícita para reemplazar el selector `.header__nav-link.is-active`.
- **Ruta desconocida / deep-link** → `syncTabWithRoute` ya contempla `index = -1 → 0` (inicio); se mantiene el comportamiento original.

## Migration Plan

1. Aplicar el change (header.ts, header.html, header.scss).
2. Actualizar `cambio-acento-azul.spec.ts` y `app-knowledge.md`.
3. Ejecutar `lint + typecheck` (verificar comando del proyecto en `package.json`).
4. Ejecutar E2E de acento y navegación; ajustar color esperado del tab activo si el tema MD3 lo requiere.
5. Rollback: revertir el commit del change; el tabbar no introduce migraciones de datos ni de dependencias.

## Open Questions

Ninguna. El alcance está definido por los cambios archivados previos y la restauración del comportamiento pre-rediseño.
