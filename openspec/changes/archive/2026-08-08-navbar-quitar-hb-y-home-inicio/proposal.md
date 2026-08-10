## Why

El navbar duplica la navegación a la página de inicio: la marca `HB` y el tab "Home" apuntan ambos a `/home` y ambos se marcan como activos (`aria-current`), lo que confunde al usuario. Además, el tab "Home" queda en inglés mientras el resto del menú está en español ("Proyectos", "Sobre Mí"), rompiendo la coherencia idiomática del navbar en español.

## What Changes

- **BREAKING (visual)**: eliminar la marca/logo `HB` del navbar (deja de existir como elemento del header; no es un enlace a `/home`).
- Renombrar el tab de la ruta `/home` a "Inicio" en español (en inglés sigue "Home").
- El navbar queda compuesto únicamente por: "Inicio", "Proyectos", "Sobre Mí" (según idioma).
- El `aria-label` del nav ("Navegación principal") se mantiene; el estado activo queda solo en el tab correspondiente.

## Capabilities

### New Capabilities
- `navegacion`: comportamiento de la navegación principal del header (rutas del menú, etiquetas localizadas y estado activo de cada enlace).

### Modified Capabilities
- Sin cambios: no existen main specs previas para esta superficie (la marca HB solo existía en la implementación del header).

## Impact

- `src/app/shared/components/header/header.html`: eliminar el `<a class="header__brand">` y su estado activo.
- `src/app/shared/components/header/header.scss`: eliminar los estilos de `.header__brand`/`.header__brand-name`.
- `src/app/shared/components/header/header.ts`: sin cambios funcionales (los `navLinks` no incluyen la marca).
- `src/app/core/i18n/es.ts`: `nav.home` pasa de `'Home'` a `'Inicio'`.
- `src/app/core/i18n/en.ts`: `nav.home` se mantiene en `'Home'`.
- `tests/playwright/`: `app-knowledge.md` documenta `.header__brand` como selector conocido → actualizar; revisar specs E2E previos que referencien `.header__brand`.
- Afecta al cambio previo `cambio-acento-azul` (sus tests de navbar asertan `.header__brand`): revisar/ajustar en la fase de implementación.
