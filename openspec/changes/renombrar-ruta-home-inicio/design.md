# Diseño: renombrar-ruta-home-inicio

## Context

Ver proposal.md - Why. La ruta de la landing es `home` y aparece en: `app.routes.ts` (path `home`, redirects de `''` y `'**'`), el nav link del `header` (`{ id: 1, path: 'home' }`) y varios tests e2e que navegan con `page.goto('/home')`. El componente vive en `features/home` y la capability `home` ya existe en las specs principales. La URL `liveUrl` de `projects.mock.ts` pertenece a otro proyecto y queda fuera de alcance.

## Goals / Non-Goals

**Goals:**
- Exponer la landing en `/inicio` manteniendo `/home` como alias con redirección (sin 404).
- Mantener coherentes el router, el nav del header y los tests e2e que navegan a la landing.

**Non-Goals:**
- No renombrar el componente `features/home/*` ni el selector `app-home` (nombres internos, sin impacto observable).
- No renombrar las claves i18n `nav.home` / `home.*` (son claves de traducción, no rutas; el label ES ya es "Inicio").
- No tocar `projects.mock.ts` (`liveUrl` es de otro proyecto).

## Decisions

- **Alias `/home` → `redirectTo: 'inicio'` en el router**: evita romper bookmarks y links externos. Alternativa descartada: eliminar `/home` por completo (provocaría 404 en URLs ya publicadas). El wildcard `'**'` y la raíz `''` pasan a redirigir a `inicio`, quedando `/home` como ruta explícita dedicada al alias.
- **Actualizar el path del nav link en el header** (`'home'` → `'inicio'`): la pestaña navega por ruta real; `syncTabWithRoute()` sigue funcionando sin cambios porque compara contra `this.router.url`.
- **Actualizar en el mismo change los tests que navegan a `/home`**: `HomePage.ts`, `cambio-acento-azul.spec.ts` (9 usos) y el regex template de `auth.setup.ts` (plantilla genérica; se ajusta por coherencia, sin impacto funcional en este proyecto). Sin este paso, la suite e2e rompería por 404.
- **No tocar el componente ni las claves i18n**: separación clara entre ruta (URL) e identidad interna (selector, claves de traducción); evita churn sin valor observable.

## Risks / Trade-offs

- [Bookmarks/links externos apuntando a `/home`] → Mitigado con el alias `redirectTo`, sin cambio breaking.
- [Suite e2e de cambios archivados navegando a `/home`] → Se actualiza dentro de este change para que siga pasando.
- [Reescritura de URLs en motores de búsqueda] → `/inicio` es la URL canónica nueva; `/home` redirige (301-equivalente a nivel SPA), manteniendo accesibilidad de contenido previo.
- [URL externa de `projects.mock.ts` (otro proyecto)] → Se excluye explícitamente; no es parte de esta app.
