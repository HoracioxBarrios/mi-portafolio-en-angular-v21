## Context

Ver proposal.md - Why. El portafolio es una app Angular que actualmente usa un favicon genérico (`public/icons/favicon.ico`) referenciado en `src/index.html:8` con `<link rel="icon" type="image/x-icon" href="favicon.ico">`. La UI/página ya carga Material Icons como fuente en `index.html`; el icono elegido ("code") proviene de la misma familia (Material Icons/Symbols de Google, Apache 2.0).

## Goals / Non-Goals

**Goals:**
- Favicon final en **SVG** (icono "code" de Material) + **ICO** de fallback
- Referenciar en `index.html` de forma que los navegadores modernos usen el SVG y los legacy el ICO

**Non-Goals:**
- No modificar la fuente de Material Icons ni otros assets de la UI
- No cambiar el logo/identidad del resto del sitio (solo el favicon)

## Decisions

### Decisión 1: Obtener el SVG del icono "code" de la colección Material oficial

**Rationale**: El icono "code" de Material es exactamente un icono de desarrollador/código, es de la misma familia visual que el resto de la UI, y su licencia Apache 2.0 permite uso comercial sin atribución obligatoria. Se obtiene el SVG desde la colección oficial de Google (Material Icons/Symbols) o de su repo `google/material-design-icons` (Apache 2.0).

**Alternativa descartada**: Iconos de terceros sin licencia clara → riesgo legal; iconos pagos → innecesario. Los SVGs de skills ya presentes en el repo no incluyen un favicon apto para la pestaña del navegador.

### Decisión 2: Generar el ICO de fallback a partir del SVG

**Rationale**: Los navegadores modernos soportan SVG como favicon, pero algunos navegadores/páginas de favoritos anteriores requieren `.ico`. El `.ico` se genera desde el mismo SVG (por ejemplo, convirtiendo a PNG en tamaño p. ej. 32x32 o 16/32 multi-resolución) y se coloca en `public/icons/`.

**Nota de implementación**: La conversión no debe inventar datos; usará el SVG oficial descargado. Si no hay herramienta de conversión disponible en el entorno al momento de aplicar, se evaluará un método local (p. ej. ImageMagick, sharp, o el PNG descargable del propio sitio de Material).

### Decisión 3: Referencia en `index.html` con SVG + fallback ICO

**Rationale**: Se sustituye el `<link rel="icon">` actual por dos links: uno al SVG (`type="image/svg+xml"`) y el `<link rel="icon" href="favicon.ico">` existente como fallback. El orden y los tipos permiten que el navegador elija el mejor formato disponible.

**Alternativa descartada**: Solo SVG → sin fallback legacy; solo reemplazar el `.ico` → pierde la nitidez del SVG.

## Risks / Trade-offs

- **[Riesgo]** La herramienta de conversión SVG→ICO puede no estar instalada en el entorno. **Mitigación**: Verificar disponibilidad durante apply; usar el PNG descargable oficial de Material como fuente para el ICO, o instalar una herramienta local. No se inventa el asset.
- **[Trade-off]** Un favicon multicapa/complejo se vería borroso como `.ico` pequeño; el icono "code" de Material es simple y de trazo, por lo que se representa bien en 16/32px.
