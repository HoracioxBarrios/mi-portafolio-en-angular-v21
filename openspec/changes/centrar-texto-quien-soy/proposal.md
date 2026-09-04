## Why

La card principal de la sección "Sobre Mí" ("Quién soy") muestra actualmente su título y descripción alineados a la izquierda. Se solicita centrar el texto dentro de la card para lograr una presentación más armoniosa y equilibrada, acorde al estilo visual del portafolio.

## What Changes

- Modificar los estilos del bloque "Quién soy" de la sección "Sobre Mí" para que el **título quede centrado** y la **descripción quede centrada como bloque** (con su texto alineado a la izquierda) dentro de la card.
- Mantener el ancho máximo de lectura de la descripción (720px) para conservar la legibilidad.
- No cambia el contenido del texto (se mantienen los mismos textos en ES y EN) ni el resto de las cards de la sección (Experiencia, Educación, Certificados, Skills).

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `perfil`: nuevo requerimiento de presentación — el bloque "Quién soy" de la sección "Sobre Mí" debe mostrar su título y descripción centrados horizontalmente dentro de la card.

## Impact

- `src/app/features/sobre-mi/sobre-mi.scss` (estilos del bloque `__header` y sus hijos `__title` y `__description`).
- Sin cambios en archivos de i18n (`es.ts`/`en.ts`), ni en servicios, APIs o dependencias.