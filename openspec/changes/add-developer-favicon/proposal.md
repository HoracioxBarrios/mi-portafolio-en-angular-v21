## Why

El favicon actual del portafolio es un `.ico` genérico que no representa la identidad del proyecto. El usuario pidió un icono acorde que identifique el portafolio, y eligió un icono de desarrollador/código: el icono "code" de la colección Material Icons/Symbols de Google (licencia Apache 2.0, libre incluso para uso comercial), coherente con el lenguaje de diseño que ya usa el sitio.

## What Changes

- Agregar el icono "code" de Material (Apache 2.0) como favicon del portafolio en formato **SVG**.
- Mantener/convertir una variante **ICO** para compatibilidad con navegadores que solo soportan `.ico`.
- Actualizar `src/index.html` para referenciar el nuevo favicon SVG con fallback al `.ico`.
- Reemplazar el favicon genérico actual (`public/icons/favicon.ico`).

## Capabilities

### New Capabilities

- `branding`: Cubre el favicon e identidad del portafolio (el icono que se muestra en la pestaña del navegador), incluyendo su fuente y formato. No existe spec previa que describa el favicon/branding global del sitio.

### Modified Capabilities

Ninguna.

## Impact

- Archivos afectados: `src/index.html` (referencia al favicon), `public/icons/favicon.ico` (reemplazo), y se agrega un archivo `favicon.svg` (o similar) en `public/icons/`.
- Se incorpora un asset externo (icono "code" de Material) bajo licencia Apache 2.0. Fuente: colección oficial de Material Icons de Google.
- Sin cambios en APIs, dependencias, ni lógica de la aplicación.
