## 1. Restaurar tabbar de Material en el header

- [x] 1.1 En `src/app/shared/components/header/header.ts` restaurar la lógica del commit `38721bd^`: imports (`MatTabsModule`, `MatToolbarModule`, `MatButtonModule`, `Router`, `DestroyRef`, `takeUntilDestroyed`), inyección de `Router`/`DestroyRef`, `navLinks` con `id`, `activeIndex`, `onTabChange(index)` y `syncTabWithRoute()` (ruta desconocida → índice 0)
- [x] 1.2 En `src/app/shared/components/header/header.html` restaurar el markup del tabbar de Material: `mat-tab-group` con `[selectedIndex]` y `(selectedIndexChange)`, `mat-tab` por cada link con `ng-template mat-tab-label` con `tr.t(link.key)`, conservando el `aria-label` y los botones de idioma y tema del working tree
- [x] 1.3 En `src/app/shared/components/header/header.scss` restaurar los estilos del tabbar original: quitar el grid de 3 columnas del `__container`, quitar `&__nav-link` y su `.is-active`, devolver `&__nav` con el bloque `::ng-deep` (cursor pointer en las clases de tab y ocultar `.mat-mdc-tab-body-wrapper`), y quitar `grid-column`/`justify-self` de `__controls`; conservar los estilos actuales de `__icon-btn` y `__lang-btn`

## 2. Alinear pruebas E2E y documentación

- [x] 2.1 En `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts` reemplazar el selector `.header__nav-link.is-active` por el tab activo de Material (`[role="tab"][aria-selected="true"]`), en `SELECTORES_ACENTO` y en los tests de nav activo (líneas 43, 139, 142, 145 y 270 del archivo actual)
- [x] 2.2 En `tests/playwright/app-knowledge.md` actualizar la sección "Navegación (header propio, sin tabs de Material)": selectores `getByRole('tab', { name: 'Inicio' | 'Proyectos' | 'Sobre Mí' })`, estado activo `[aria-selected="true"]`, y mantener los selectores de botón de idioma y tema

## 3. Verificación

- [x] 3.1 Ejecutar lint y typecheck del proyecto (verificar scripts en `package.json`) y resolver cualquier fallo
- [x] 3.2 Ejecutar los E2E de acento azul y de navegación; verificar visualmente que la pestaña activa usa el azul del tema y ajustar, solo si difiere del esperado `#2196f3`, el valor esperado en `cambio-acento-azul.spec.ts` tras confirmación del usuario
