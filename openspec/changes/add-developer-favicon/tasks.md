## 1. Obtener el asset del icono

- [x] 1.1 Descargar el icono "code" de la colección Material Icons/Symbols de Google (licencia Apache 2.0) desde la fuente oficial (repo `google/material-design-icons` o la URL del SVG/PNG de Material)
- [x] 1.2 Guardar el SVG como `public/icons/favicon.svg` con el icono "code" de Material
- [x] 1.3 Generar el fallback `public/icons/favicon.ico` (p. ej. desde el PNG oficial o convirtiendo el SVG), reemplazando el favicon genérico actual

## 2. Referenciar el favicon en la página

- [x] 2.1 Actualizar `src/index.html` para referenciar el favicon SVG (`rel="icon" type="image/svg+xml"`) manteniendo el `.ico` como fallback
- [x] 2.2 Verificar que se mantiene la referencia heredada `/favicon.ico` para compatibilidad

## 3. Verificación

- [x] 3.1 Ejecutar el build de la aplicación para confirmar que no hay errores (el proyecto no tiene scripts de lint/typecheck)
- [x] 3.2 Verificar en el navegador que la pestaña muestra el nuevo icono de desarrollador/código (SVG) y que no se muestra el favicon genérico anterior
- [x] 3.3 Verificar que los assets (`favicon.svg` y `favicon.ico`) se sirven correctamente en el build
