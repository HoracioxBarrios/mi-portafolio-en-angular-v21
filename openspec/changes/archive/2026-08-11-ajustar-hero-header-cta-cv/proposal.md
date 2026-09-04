## Why

El hero actual tiene un subtitle métrico ("reduje los reportes de errores en un 40%") que no comunica la propuesta de valor ni la motivación del autor; el sidebar muestra un enlace "Portafolio" que apunta al mismo sitio desplegado (auto-enlace redundante) y no hay un acceso directo al CV, el elemento que los reclutadores buscan. Se mejora el copy del hero (conversión) y se agrega un botón de CV de alta visibilidad en el header.

## What Changes

- **Hero**: reemplazar el subtitle por copy de conversión orientado al cliente (propuesta B aprobada), en ES y EN.
- **Header**: agregar botón "Mi CV" (rectangular, con texto, en la zona de controles) que abre el CV en Google Drive en pestaña nueva.
- **Sidebar (perfil)**: quitar el enlace "Portafolio" (apunta al mismo sitio desplegado, redundante).
- **CTA de contacto**: se mantiene el texto "¿Buscás un Angular Developer?..." y el botón "Escribime" (mailto ya funcional); no requiere cambios.
- **Hero badge**: se mantiene "Software Developer | Angular & Ionic | AI Solutions & AI-Augmented Development" (ya existe en el hero y el sidebar; no se repite).

## Capabilities

### New Capabilities
- `home`: comportamiento observable del hero de la página de inicio (título, badge, subtitle de propuesta de valor y CTAs) y de la sección CTA de contacto.

### Modified Capabilities
- `navegacion`: se agrega el botón "Mi CV" en la zona de controles del header (nuevo requisito: botón de descarga de CV).
- `perfil`: se elimina el requisito "Mostrar enlace al portafolio público" (enlace redundante al mismo sitio).

## Impact

- `src/app/core/i18n/es.ts` y `en.ts`: nuevo subtitle del hero, texto del botón "Mi CV" y `aria-label`.
- `src/app/shared/components/header/header.html`, `header.ts`, `header.scss`: botón "Mi CV" en la zona de controles.
- `src/app/shared/components/profile/profile.html`, `profile.ts`: quitar el enlace de portafolio.
- `src/app/layout/main-layout/main-layout.html`, `main-layout.ts`: dejar de pasar `portafolioUrl` al profile.
- `src/app/features/home/home.html` y `home.scss`: sin cambios funcionales (el subtitle sale del diccionario i18n).
- URL del CV: `https://drive.google.com/file/d/1juiFa2ruwAO6TnKhPLkSBOxaKYLTNy_S/view?usp=sharing`.
