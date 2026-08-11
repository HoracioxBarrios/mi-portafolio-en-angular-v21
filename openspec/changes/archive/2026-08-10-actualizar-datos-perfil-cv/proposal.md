## Why

Los datos personales y el puesto que muestra el portafolio están desactualizados respecto al CV actual del autor (puesto completo, periodo de experiencia, redes sociales), lo que da una imagen inconsistente para reclutadores y visitantes.

## What Changes

- Actualizar el puesto del perfil a **"Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development"** (puesto completo del CV), aplicado en el perfil principal (`main-layout.ts`), el hero badge y el rol de la experiencia en Sobre Mí.
- Actualizar el hero badge de "Angular Developer · IA generativa" al puesto completo del CV (en español e inglés).
- Actualizar el rol de la experiencia de "Desarrollador Frontend (Angular / Ionic)" a "Software Developer (Angular / Ionic)" en Sobre Mí (español e inglés).
- Actualizar el periodo de la experiencia de "Abril 2024 – Actualidad" a **"Agosto 2023 – Actualidad"** (español e inglés).
- Quitar la red social Instagram del perfil (enlace genérico sin perfil real), dejando GitHub y LinkedIn.
- Agregar enlace al portafolio público (`https://mi-portafolio-horacio-barrios.vercel.app`) en el perfil principal.
- **No se modifican**: proyectos, descripciones de proyectos, tecnologías/skills usadas en los proyectos ni las secciones de skills.

## Capabilities

### New Capabilities

- `perfil`: comportamiento observable del perfil principal del portafolio: datos personales del autor (nombre, puesto, ubicación, foto, redes sociales y enlace de portafolio) que el layout muestra al visitante.

### Modified Capabilities

- `navegacion`: sin cambios de comportamiento. No se lista aquí porque ninguna requirement de navegación cambia.

## Impact

- `src/app/layout/main-layout/main-layout.ts`: datos de perfil (`tecnologias` → puesto completo, `redesSociales` sin Instagram, `+ portafolioUrl`).
- `src/app/layout/main-layout/main-layout.html`: pasar el nuevo dato de portafolio a `<app-profile>`.
- `src/app/shared/components/profile/profile.ts` y `profile.html`: nuevo input opcional `portafolioUrl` y renderizado del enlace.
- `src/app/shared/components/profile/profile.scss`: estilos para el enlace de portafolio (reutilizando estilos de redes si aplica).
- `src/app/core/i18n/es.ts` y `en.ts`: actualizar `home.hero.badge`, `about.experience.role` y `about.experience.period` en ambos idiomas.
- Sin cambios en dependencias, configuración ni CI.
