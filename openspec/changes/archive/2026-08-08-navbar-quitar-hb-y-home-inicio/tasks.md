## 1. Header: eliminar la marca HB

- [x] 1.1 `header.html`: eliminar el bloque `<a class="header__brand" ...>HB</a>` (líneas 3-5) y su variable de plantilla `#brandRla`
- [x] 1.2 `header.scss`: eliminar los estilos de `.header__brand` y `.header__brand-name`
- [x] 1.3 Verificar que el navbar queda con solo los 3 links del `navLinks` y que el estado activo (`is-active` + `aria-current`) solo aparece en el tab correspondiente

## 2. i18n: etiqueta de inicio

- [x] 2.1 `es.ts`: cambiar `'nav.home': 'Home'` a `'nav.home': 'Inicio'`
- [x] 2.2 `en.ts`: confirmar que `'nav.home': 'Home'` se mantiene sin cambios

## 3. Tests E2E afectados

- [x] 3.1 `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`: quitar `.header__brand` de `SELECTORES_ACENTO` y del test `nav activo y marca usan azul` (aserciones de marca); conservar la validación del nav activo (`expect.poll` sobre `.header__nav-link.is-active`)
- [x] 3.2 Mismo spec: en `ningún elemento visible usa colores de la palette lime sustituida`, reemplazar la espera de visibilidad de `.header__brand` por `.header__nav-link` (o el nav activo) para que el barrido siga teniendo un ancla visible
- [x] 3.3 `tests/playwright/app-knowledge.md`: quitar/actualizar las filas de la marca (`a.header__brand`) en selectores de navegación y en la tabla de acento azul

## 4. Verificación

- [x] 4.1 `npm run build` (typecheck + compilación) sin errores
- [x] 4.2 Ejecutar `npx playwright test tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts` y `seed.spec.ts` → todos passing
- [x] 4.3 Revisión visual en navegador: navbar sin marca HB, tab "Inicio" en ES (y "Home" en EN), estado activo único
