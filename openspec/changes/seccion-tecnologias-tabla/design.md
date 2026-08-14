## Context

La sección "Herramientas y tecnologías" (`src/app/shared/components/skills/`) hoy renderiza un grid de iconos agrupados por stack (`skills-group` → `skills-icon`). El componente `skills.ts` mantiene un dataset de 4 grupos (frontend, backend, herramientas, IA) con `Skill { name, icon, description, stack }`. El modal `skill-detail-dialog` ya muestra nombre, stack y descripción localizada, y las claves `skills.group.*` existen en `es.ts`/`en.ts`. Los iconos viven en `public/icons/skills/**`. Ver proposal.md — Why para la motivación y specs/skills/spec.md para los requerimientos.

## Goals / Non-Goals

**Goals:**
- Reemplazar el grid de iconos por una tabla de 4 columnas: icono, nombre, stack, descripción.
- Unificar el dataset: skills del CV (datos ya presentes en `skills.ts`) + tecnologías de `projects.mock.ts`.
- Reutilizar `skill-detail-dialog` y el sistema de traducción existente (`Translation`, claves `skills.group.*`).

**Non-Goals:**
- No rediseñar `skill-detail-dialog` ni el sistema de temas.
- No tocar la página de proyectos, las cards ni las descripciones de proyectos.
- No cambiar el comportamiento de otras secciones (hero, perfil, contacto).

## Decisions

### 1. Tabla semántica real (`<table>`) en lugar de grid/divs

Se reemplaza el markup de `skills.html` por una `<table>` semántica con `<thead>` (icono, nombre, stack, descripción) y `<tbody>` con una `<tr>` por tecnología. Razón: accesibilidad nativa (ARIA de tabla gratuito), compatibilidad con lectores de pantalla y claridad estructural. La fila abre el modal `skill-detail-dialog` al hacer clic (manteniendo el comportamiento actual de `skills-icon`).
- Alternativa considerada: grid de CSS con `display: grid` y roles ARIA `role="table"`. Se descarta por ser menos robusto para lectores de pantalla y exigir ARIA manual.

### 2. Dataset plano unificado en `skills.ts`

Se reemplaza `groups: SkillGroup[]` por un único `skills: Skill[]` plano con la unión de:
- Las 30+ skills actuales del CV (ya en `skills.ts`).
- Tecnologías de `projects.mock.ts` no cubiertas: NestJS, Express, MongoDB, Groq (LLM), Zod, JWT, TypeORM, SQLite, Puppeteer, Vercel, Angular Material, Angular 21/22/9–22 (normalizadas a "Angular"), SCSS (ya cubierto como Sass).

Cada ítem conserva la interface `Skill { name, icon, description, stack }`, reutilizando los stacks existentes (`frontend | backend | tools | ia`). La columna stack usa `tr.t('skills.group.' + skill.stack)` para localización. La columna descripción usa la traducción existente en `es.ts`/`en.ts` (mismas claves que hoy usa el modal).
- Alternativa: mantener grupos y aplanarlos en el template. Se descarta porque complica el template y no aporta valor: la tabla no necesita agrupación visual.

### 3. Reutilizar `skill-detail-dialog` como modal de detalle de fila

La fila de la tabla dispara `MatDialog.open(SkillDetailDialog, { data: { skill } })`, idéntico al flujo actual de `skills-icon.openSkillModal()`. No se toca el modal. La columna stack de la tabla y el stack del modal usan la misma clave de traducción.
- Alternativa: crear un modal nuevo. Se descarta: duplicación innecesaria.

### 4. Responsive con tabla de columnas fijas y overflow horizontal

En desktop la tabla muestra las 4 columnas en línea. En móvil se mantiene la tabla con `min-width` en el `<table>` y `overflow-x: auto` en un wrapper, permitiendo scroll horizontal sin cortar contenido ni apilar. Esto cumple "conservar legibilidad de las 4 columnas" (spec) de la forma más simple.
- Alternativa: en móvil ocultar la descripción o convertir en cards. Se descarta: pierde información y contradice el requerimiento de "conservar las cuatro columnas".

### 5. Eliminación de `skills-group` y `skills-icon`

`skills-group` y `skills-icon` solo se usan dentro de `skills` (verificado por grep). Al reemplazar el grid por la tabla dejan de usarse; se eliminan sus archivos y las referencias. La lógica de tintado de iconos monocromáticos (propiedad `tinted`/`tint` de `skills-icon`) se conserva: el icono de la tabla se renderiza igual (se reutiliza la misma lógica en la celda del icono, ya sea inline en `skills.html` o un subcomponente mínimo).
- Riesgo: la lógica de color de marca de los iconos IA (Claude `#d97757`, monocromáticos, ámbar `#e8833a`) está en `skills-icon.ts`. No se debe perder. Ver Riesgos.

### 6. Iconos faltantes de tecnologías de proyectos

Tecnologías de proyectos sin icono en `public/icons/skills/`: NestJS, Express, MongoDB (hay `mongodb-icon-2.svg`), Groq, Zod, JWT, TypeORM, SQLite, Puppeteer, Vercel, Angular Material. Decisión del usuario: **agregar SVGs nuevos** desde fuentes oficiales (`simple-icons`, webs oficiales). Los stacks se asignan así: NestJS/Express/TypeORM/SQLite/JWT/Zod/MongoDB → backend; Puppeteer/Vercel → tools; Groq → ia; Angular Material → frontend.

## Risks / Trade-offs

- **Pérdida de la lógica de tintado de iconos** al eliminar `skills-icon` → Reutilizar la misma lógica (helper o inline) en la celda del icono de la tabla; agregar tarea de verificación visual de los iconos IA y monocromáticos.
- **Tabla ancha con descripciones largas** en móvil → `overflow-x: auto` + `min-width`; verificación con Playwright en viewport móvil.
- **Cambio estructural rompe selectores CSS y tests** existentes (`skills.scss`, selectores de test de skills) → actualizar estilos y revisar tests Playwright existentes de la sección de skills.
- **Datos nuevos sin icono** → si no se agregan SVGs, usar icono placeholder; documentado en el proposal/design, no inventar descripciones falsas.
