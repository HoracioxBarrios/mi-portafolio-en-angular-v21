## Context

Cambio de contenido localizado (copy) en el portafolio Angular: se reemplazan dos strings del diccionario i18n — la descripción del autor en "Sobre Mí" (`about.description`) y el subtítulo del hero de Inicio (`home.hero.subtitle`). La motivación y alcance están en `proposal.md` → Why. No hay cambios estructurales, de componentes, tipos, rutas ni dependencias; solo se editan cadenas en `es.ts` y `en.ts`.

## Goals / Non-Goals

**Goals:**
- Actualizar el copy del perfil y del hero con el nuevo posicionamiento del autor (Angular/Ionic, 3+ años, sector público, migraciones, arquitectura frontend, rendimiento, accesibilidad, IA generativa, SDD/BMAD/OpenSpec).
- Mantener el contenido sincronizado entre ES y EN (mismo mensaje, traducción equivalente).

**Non-Goals:**
- No se rediseña la sección ni se cambia layout o componentes.
- No se altera la especificación de otras capabilities (navegación, cards, etc.).
- No se introducen nuevas claves i18n: se reutilizan `about.description` y `home.hero.subtitle`.

## Decisions

- **Reutilizar claves i18n existentes en lugar de añadir nuevas.** `about.description` y `home.hero.subtitle` ya están renderizadas por los componentes correspondientes; solo cambia su valor. Evita tocar templates y mantiene el mapeo de idiomas intacto.
- **El subtitle del hero (Inicio) se ajusta de forma armónica con el nuevo perfil** en lugar de conservar el texto anterior, que mencionaba únicamente "productos sólidos" y "trabajar más rápido y mejor". El nuevo copy destaca la especialización (Angular/Ionic), la experiencia (más de 3 años creando y manteniendo aplicaciones web y móviles) y la experiencia en proyectos del sector público de gran escala. La redacción fue afinada posteriormente con el autor (versión más concisa), manteniendo el enfoque y sin cambiar el alcance. Alternativa considerada: dejar el subtitle sin cambios → se descartó porque el autor pidió armonizarlo.
- **Corrección ortográfica mínima del texto aportado** ("publico" → "público"), sin alterar el contenido. Se mantiene fiel a la redacción del autor.

## Risks / Trade-offs

- [El copy del subtitle fue confirmado por el autor (propuesta de armonización aceptada)] → Al no darse el texto exacto, se validó con el autor y se adoptó la propuesta. Cambios futuros de redacción no afectan estructura ni tareas.
- [Posible desincronización ES/EN en redacción precisa] → Mitigación: los artefactos requieren que EN comunique el mismo mensaje que ES; se verifica en la revisión de implementación.

## Open Questions

Ninguna. El texto del subtítulo de Inicio fue acordado con el autor.

