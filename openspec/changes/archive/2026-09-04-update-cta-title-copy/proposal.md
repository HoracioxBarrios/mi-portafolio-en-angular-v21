## Why

El titular del CTA de contacto de la landing ("¿Te interesa mi perfil?" / "Interested in my profile?") suena poco amigable y centrado en el CV más que en el valor del trabajo. Se reemplaza por un copy más conversacional y orientado a la acción ("¿Te interesa lo que hago?"), que invita mejor al contacto.

## What Changes

- Reemplazar el titular del CTA de contacto en español `'home.cta.title'` de `'¿Te interesa mi perfil?'` a `'¿Te interesa lo que hago?'`.
- Reemplazar el titular correspondiente en inglés `'home.cta.title'` de `'Interested in my profile?'` a un copy que comunique el mismo mensaje amigable.
- Actualizar el spec `home` para reflejar el nuevo titular (el spec actual describe un titular desactualizado).

## Capabilities

### Modified Capabilities

- `home`: Modificar el requirement "CTA de contacto con correo electrónico" para reflejar el nuevo titular del CTA reemplazado.

## Impact

- Archivos afectados: `src/app/core/i18n/es.ts` y `src/app/core/i18n/en.ts` (clave `home.cta.title`).
- Sin cambios en APIs, dependencias ni datos. Solo cambio de copy observable en la UI.
