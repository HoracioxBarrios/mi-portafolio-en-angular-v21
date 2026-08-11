## Context

El perfil principal vive en `main-layout.ts` (datos `userInfo`), se renderiza con `app-profile` (profile.ts/html/scss) y los textos de hero y Sobre Mí están en los diccionarios i18n `es.ts`/`en.ts`. Hoy el perfil muestra "Frontend Developer (Angular) · AI-Augmented Development", incluye Instagram con un enlace genérico, y el periodo de experiencia dice "Abril 2024 – Actualidad". No hay infraestructura de datos externa: todo es local en el componente y los diccionarios. Ver proposal.md - Why para la motivación y specs/perfil/spec.md para los requisitos.

## Goals / Non-Goals

**Goals:**
- Unificar el puesto del CV en perfil, hero y rol de experiencia.
- Limpiar las redes sociales a las reales (GitHub + LinkedIn) y agregar el enlace de portafolio.
- Alinear el periodo de experiencia con el CV.

**Non-Goals:**
- Modificar proyectos, descripciones, tecnologías ni skills (el usuario lo pidió explícitamente).
- Agregar teléfono al contacto (el usuario eligió solo email + portafolio).
- Cambiar estilos de diseño ni el layout visual más allá del nuevo enlace de portafolio.
- Introducir datos externos (API, CMS) ni cambios de arquitectura.

## Decisions

### 1. Puesto completo como valor de perfil y badge
`userInfo.tecnologias` pasa a ser `["Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development"]` (un solo ítem, el puesto completo). El badge del hero (`home.hero.badge`) se actualiza al mismo texto completo, y el rol de experiencia (`about.experience.role`) a "Software Developer (Angular / Ionic)".

**Alternativa considerada:** mantener el badge corto ("Angular Developer · IA generativa") y solo actualizar el perfil — descartada: el usuario pidió el puesto completo en los tres lugares.

### 2. Enlace de portafolio como input opcional del componente
Se agrega un nuevo `@Input() portafolioUrl` (opcional, sin `required`) a `app-profile`, y en su template un enlace con ícono y label ("Portafolio"). El valor se pasa desde `main-layout.html` con el dato agregado en `userInfo` (`portafolio: 'https://mi-portafolio-horacio-barrios.vercel.app'`). Se reutiliza la clase `profile__social-link` existente para mantener el estilo de las redes, con un label traducible si es necesario.

**Alternativa considerada:** hardcodear el enlace en el template del perfil — descartada por consistencia con los demás datos que entran por inputs.

### 3. Redes sociales desde datos locales
Se elimina Instagram de `userInfo.redesSociales`, quedando GitHub y LinkedIn. No se requieren cambios de modelo (`RedSocial` sigue igual).

### 4. Textos i18n en ambos idiomas
Se actualizan `home.hero.badge`, `about.experience.role` y `about.experience.period` en `es.ts` y `en.ts` manteniendo la sincronización de claves entre idiomas.

## Risks / Trade-offs

- **[Puesto largo en el hero badge]** → El texto completo es más largo que el actual; el badge usa `font-mono` y podría desbordar en móvil → Mitigación: verificar visualmente el hero en viewport móvil; el badge es un elemento tipo pill que puede envolver o ajustarse con CSS sin cambios de layout.
- **[Enlace de portafolio sin label i18n]** → Si se agrega un label traducible, falta una clave nueva en ambos diccionarios → Mitigación: agregar clave `profile.portafolio` en `es.ts` y `en.ts`; si se decide usar texto fijo, documentar la elección en el código.
- **[Desincronización es/en]** → Al tocar claves en un idioma y no en otro se rompe la paridad → Mitigación: actualizar siempre las claves en ambos diccionarios en el mismo commit.

## Migration Plan

1. Actualizar `main-layout.ts` (datos) y `main-layout.html` (pasar `portafolioUrl`).
2. Agregar input `portafolioUrl` en `profile.ts` y render en `profile.html` (+ estilo en `profile.scss`).
3. Actualizar claves i18n en `es.ts` y `en.ts`.
4. Verificación: `npx tsc --noEmit -p tsconfig.app.json` + revisión visual en servidor local.
5. Rollback: revertir el commit; los cambios son de datos/texto, sin migraciones de datos.

## Open Questions

Ninguna. Las dudas de alcance (puesto completo, email + portafolio sin teléfono, quitar Instagram, periodo Agosto 2023) fueron resueltas con el usuario durante la fase de clarificación.
