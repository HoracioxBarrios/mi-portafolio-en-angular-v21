# Propuesta: renombrar-ruta-home-inicio

## Why

La URL de la página de inicio usa el anglicismo `/home` mientras el resto del sitio usa rutas en español (`/proyectos`, `/sobre-mi`) y el label de navegación ya dice "Inicio" (ES). Estandarizar la URL a `/inicio` mantiene coherencia idiomática en todo el sitio.

## What Changes

- En `src/app/app.routes.ts`:
  - Cambiar el `path` de la página de inicio de `home` a `inicio`.
  - Actualizar los `redirectTo` de la ruta raíz `''` y del wildcard `'**'` a `inicio`.
  - Agregar `path: 'home'` con `redirectTo: 'inicio'` como **alias** para no romper URLs existentes (bookmarks/links externos). No es un cambio breaking.
- En `src/app/shared/components/header/header.ts`: cambiar el nav link `{ id: 1, path: 'home', key: 'nav.home' }` a `path: 'inicio'` (la clave i18n no cambia; su label ya es "Inicio"/"Home").
- Actualizar los tests e2e que navegan a la ruta:
  - `tests/playwright/pages/HomePage.ts`: `goto('/home')` → `goto('/inicio')`.
  - `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`: los 9 `page.goto('/home')` → `page.goto('/inicio')`.
  - `tests/playwright/auth.setup.ts`: el regex de ruta template `(dashboard|home|profile)` → `inicio`.
  - `tests/playwright/app-knowledge.md`: tabla de rutas (`/` y `/home` → `/inicio`).
- **No se tocan**: el componente `features/home/*` (nombre interno), las claves i18n `nav.home`/`home.*` (no son rutas), ni `projects.mock.ts` `liveUrl` (URL externa de otro proyecto).

## Capabilities

### New Capabilities

_ninguna_

### Modified Capabilities

- `home`: el comportamiento observable de la URL de la página de inicio cambia de `/home` a `/inicio`, manteniendo `/home` como redirección compatible.

## Impact

- Código: `src/app/app.routes.ts` y `src/app/shared/components/header/header.ts`.
- Pruebas: `tests/playwright/pages/HomePage.ts`, `tests/playwright/changes/cambio-acento-azul/cambio-acento-azul.spec.ts`, `tests/playwright/auth.setup.ts` y `tests/playwright/app-knowledge.md`.
- Comportamiento observable: la landing se sirve en `/inicio`; acceder a `/home` redirige a `/inicio` (sin 404). El nav marca "Inicio" activo en `/inicio`.
- Sin cambios de API, dependencias ni datos.
