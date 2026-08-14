## 1. Dataset unificado de tecnologías

- [x] 1.1 Reemplazar `groups: SkillGroup[]` por un array plano `skills: Skill[]` en `src/app/shared/components/skills/skills.ts`, conservando todas las skills actuales del CV con sus stacks
- [x] 1.2 Agregar las tecnologías de `projects.mock.ts` no cubiertas: NestJS, Express, MongoDB, Groq (LLM), Zod, JWT, TypeORM, SQLite, Puppeteer, Vercel, Angular Material, con stack asignado según design.md (Sección 6)
- [x] 1.3 Normalizar versiones de Angular (21/22/9–22) a una sola entrada "Angular" en el dataset

## 2. Iconos SVG de las nuevas tecnologías

- [x] 2.1 Agregar SVGs nuevos en `public/icons/skills/` para NestJS, Express, MongoDB, Groq, Zod, JWT, TypeORM, SQLite, Puppeteer, Vercel y Angular Material desde fuentes oficiales (simple-icons o webs oficiales)
- [x] 2.2 Verificar que los SVGs nuevos son monocromáticos o full-color y, si corresponde, marcarlos con `monochrome` según el patrón existente

## 3. Tabla de tecnologías

- [x] 3.1 Reemplazar el markup de `src/app/shared/components/skills/skills.html` por una `<table>` semántica con `<thead>` (icono, nombre, stack, descripción) y `<tbody>` con una fila por tecnología
- [x] 3.2 Hacer que la fila de la tabla abra `SkillDetailDialog` con la skill correspondiente (reutilizando `MatDialog.open` y `skill-detail-dialog`)
- [x] 3.3 Reutilizar la lógica de tintado de iconos (IA/monocromáticos) de `skills-icon` en la celda del icono de la tabla, sin perder colores de marca ni adaptación al tema

## 4. Estilos responsive

- [x] 4.1 Actualizar `src/app/shared/components/skills/skills.scss` para la tabla: columnas alineadas, header destacado, separadores de fila y hover de fila clickeable
- [x] 4.2 Implementar responsive: desktop con 4 columnas en línea; móvil con `min-width` en la tabla y `overflow-x: auto` en el contenedor para scroll horizontal sin cortar contenido

## 5. Limpieza y verificación

- [x] 5.1 Eliminar los componentes `skills-group` y `skills-icon` (y sus archivos TS/HTML/SCSS) que quedan sin uso tras el reemplazo
- [x] 5.2 Verificar que no queden imports o referencias huérfanas a `SkillsGroup`, `SkillsIcon`, `app-skills-group` o `app-skills-icon`
- [x] 5.3 Revisar tests Playwright existentes de la sección de skills y actualizar los selectores si el cambio estructural los rompe
- [x] 5.4 Ejecutar lint + typecheck (ESLint + `tsc`) y verificar visualmente en desktop y móvil (Playwright, `ng serve` en :4200) que la tabla muestra icono, nombre, stack y descripción localizados
