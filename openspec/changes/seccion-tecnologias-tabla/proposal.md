## Why

La sección "Herramientas y tecnologías" del portafolio muestra hoy un grid de iconos agrupados que no permite ver de un vistazo el nombre, el stack y la descripción de cada tecnología. Además, el dataset actual no cubre las tecnologías realmente usadas en los proyectos publicados (NestJS, Express, MongoDB, Groq, Vercel, etc.). Un listado tipo tabla con columnas (icono, nombre, stack, descripción) es más escaneable, accesible y comunica mejor el alcance técnico real del autor.

## What Changes

- Reemplazar el grid de iconos de la sección "Herramientas y tecnologías" (`app-skills`) por un listado tipo tabla con cuatro columnas: **icono**, **nombre**, **stack** y **descripción**.
- Ampliar el dataset de la sección con la **unión** de las skills del CV del autor y las tecnologías usadas en los proyectos publicados (`src/app/core/data/projects.mock.ts`).
- Mantener la localización ES/EN del título de sección y de los valores de stack (frontend, backend, herramientas, IA).
- Conservar el modal de detalle de cada tecnología al hacer clic en su fila (comportamiento actual del grid).
- Agregar los iconos SVG faltantes de las tecnologías de proyectos que aún no tienen icono en `public/icons/skills/`.
- La tabla será responsive: en móvil permite scroll horizontal o apilado de columnas sin romper el layout.

## Capabilities

### New Capabilities

- `skills`: Comportamiento observable de la sección "Herramientas y tecnologías" como listado tipo tabla (icono, nombre, stack, descripción) con el dataset unificado de skills del CV y tecnologías de los proyectos.

### Modified Capabilities

Ninguna. Las specs existentes (`cards`, `home`, `navegacion`, `perfil`) no cambian sus requerimientos a nivel de comportamiento observable.

## Impact

- `src/app/shared/components/skills/*` (TS, HTML, SCSS): se reemplaza el renderizado del grid de iconos por la tabla.
- `src/app/shared/components/skills-group/*` y `src/app/shared/components/skills-icon/*`: se revisa si siguen siendo necesarios o se integran al nuevo renderizado.
- `src/app/core/models/skill.interface.ts`: se extiende si la tabla lo requiere (p. ej. campo opcional de descripción localizada).
- `src/app/core/i18n/es.ts` y `en.ts`: nuevas claves para descripciones de tecnologías de proyectos y encabezados de la tabla.
- `public/icons/skills/**`: nuevos SVGs para tecnologías sin icono (NestJS, Express, MongoDB, Groq, Vercel, Zod, JWT, TypeORM, SQLite, Puppeteer, Supabase, Capacitor, etc.).
