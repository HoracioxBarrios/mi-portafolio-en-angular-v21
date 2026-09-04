## Context

El componente `src/app/features/sobre-mi/sobre-mi.scss` define la card "Quién soy" con la clase `.sobre-mi__header`, que contiene `.sobre-mi__title` y `.sobre-mi__description`. Hoy el bloque usa alineación a la izquierda (`text-align` por defecto) y la descripción restringe su ancho a 720px. Ver `proposal.md` para la motivación.

## Goals / Non-Goals

**Goals:**
- Centrar horizontalmente título y descripción dentro de la card "Quién soy" en todos los breakpoints.
- Conservar el ancho máximo de lectura (720px) de la descripción.

**Non-Goals:**
- No modificar los textos (i18n es/en) ni su traducción.
- No alterar las demás cards de la sección (Experiencia, Educación, Certificados, Skills).
- No cambiar el padding ni el fondo de la card.

## Decisions

**1. Centrar el bloque con `flex` column + `align-items: center` en `.sobre-mi__header`, y centrar solo el título.**
Se convierte el header en un contenedor flex en columna con `align-items: center`. Esto centra el bloque completo: el título queda como bloque centrado en la card, y la descripción (ancha hasta 720px) también. El `text-align: center` se aplica únicamente a `.sobre-mi__title`, de modo que el texto de la descripción permanece alineado a la izquierda — evita el efecto "escalonado" que produce centrar cada línea de un párrafo largo.
- Alternativa considerada: aplicar `text-align: center` a todo el header centrando cada línea del párrafo. Descartada: produce borde irregular ("letras escalonadas") en la descripción.
- El flex de una sola línea sigue el patrón ya usado en el componente (`__job-header`, `__edu-item`) y mantiene la estructura actual del template intacta.

**2. Mantener `max-width: 720px` en `.sobre-mi__description`.**
Con `align-items: center`, el párrafo conserva su ancho máximo y queda centrado; no se necesita `margin-inline: auto` adicional. Preserva la legibilidad del párrafo largo.

**3. Sin cambios en el template ni en las variables de tema.**
El centrado es puramente de estilos en `sobre-mi.scss`; funciona igual en tema claro y oscuro y no depende de variables nuevas.

## Risks / Trade-offs

- [Centrar un párrafo largo puede reducir el ritmo de lectura en desktop] → Se mantiene el ancho máximo de 720px y se valida visualmente en desktop y móvil durante la verificación del apply.
- [Overflow en pantallas muy angostas si el bloque de 720px excede el contenedor] → El responsive actual (`.sobre-mi__header { padding: … }` en `mobile-only`) y el `max-width` del contenedor evitan desbordes; el cierre es natural en flex.

## Migration Plan

Cambio de estilos contenido en un único archivo. No requiere migración ni estrategia de deploy específica más allá del commit/flujo git habitual; rollback = revert del diff de `sobre-mi.scss`.

## Open Questions

Ninguna.