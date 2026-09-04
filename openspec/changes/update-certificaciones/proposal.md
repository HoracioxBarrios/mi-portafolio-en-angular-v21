## Why

El portafolio muestra hoy 4 certificados obsoletos en la sección "Sobre Mí", quedando desactualizado ante los nuevos logros de formación (cursos de Claude/Anthropic, MCP, Agent Skills, SubAgents y Devin AI). El usuario entregó la lista completa y actual de sus certificaciones para reemplazar la actual.

## What Changes

- Reemplazar la lista de certificados de la sección "Sobre Mí" (actualmente 4: Angular, C#, Claude Code, Claude Code in Action) por la lista actualizada de **9** certificaciones provista por el usuario.
- **BREAKING**: se retiran los certificados que ya no aplican y se ajusta la plataforma/emisor de "Claude Code in Action" (de Udemy a Anthropic, según la lista del usuario).
- Agregar las claves i18n (ES/EN) necesarias para los títulos de las nuevas certificaciones (Claude 101, Claude Code 101, MCP, Agent Skills, SubAgents, Devin Foundations Badge) y actualizar las existentes según corresponda.
- Los certificados sin `anio`, `url` o `imagen` reales (el usuario no las proveyó) quedan con esos campos opcionales en `undefined`.

## Capabilities

### New Capabilities

- `certificaciones`: describe el comportamiento observable de la sección de certificados de "Sobre Mí": reúne y muestra las certificaciones y cursos del usuario, con título, plataforma/emisor y enlaces/atributos opcionales. No existe spec previa que la describa en `openspec/specs/` (la implementación actual quedó contenida en un change archivado sin archivar su spec).

### Modified Capabilities

Ninguna.

## Impact

- Datos: `src/app/core/data/certificados.ts` (nueva lista de 9 certificados con sus plataformas reales).
- i18n: `src/app/core/i18n/es.ts` y `src/app/core/i18n/en.ts` (nuevas claves de títulos).
- Modelo: `src/app/core/models/certificado.interface.ts` (sin cambios, salvo confirmar que soporta los casos; si se requiere, se documenta en design).
- Componente: `src/app/shared/components/certificados/certificados.html` (sin cambios de estructura; consume la lista).
- Sin cambios de APIs externas, rutas ni dependencias.
