## Context

Ver `proposal.md` — Why. La sección de Certificados de "Sobre Mí" hoy muestra 4 certificados en `src/app/core/data/certificados.ts`, renderizados por el componente `certificados.html` (consumidor de la lista vía `certificados.ts`). El modelo `Certificado` (`certificado.interface.ts`) expone: `tituloKey` (clave i18n), `plataforma` (string) y opcionales `anio?`, `url?`, `imagen?`. Los títulos se resuelven por i18n (ES/EN).

## Goals / Non-Goals

**Goals:**
- Sustituir los datos de la lista por las 9 certificaciones provistas por el usuario, con sus plataformas reales.
- Ajustar la plataforma de "Claude Code in Action" a Anthropic.
- Agregar las claves i18n (ES/EN) para los nuevos títulos, manteniendo la localización actual.

**Non-Goals:**
- No cambiar la estructura visual ni el comportamiento del componente de tarjetas ni del modelo `Certificado`.
- No inventar `anio`, `url` ni `imagen` (el usuario no las proveyó → quedan `undefined` con `TODO(user)`).
- No añadir rutas, APIs ni dependencias nuevas.

## Decisions

### Decisión 1: Mantener el modelo `tituloKey` (i18n) para todos los títulos

**Rationale**: La arquitectura actual resuelve los títulos por clave i18n. Mantener `tituloKey` evita tocar el modelo ni el template. Los nombres oficiales en inglés de las nuevas certificaciones se registran como claves i18n con el mismo texto en ES y EN (no se traducen), y los títulos de cursos preexistentes (Angular, C#) conservan su traducción actual.

**Alternativa descartada**: Cambiar el modelo a un campo `titulo` de texto directo. Requiere tocar el modelo y el template, y rompe la localización para el subtítulo/enlace. Innecesario.

### Decisión 2: Las certificaciones sin datos opcionales quedan `undefined` (tolerancia existente)

**Rationale**: El componente ya es tolerante a `url`/`imagen`/`anio` ausentes (ver `certificados.html`). Se respeta AGENTS.md §5 (no inventar datos): no se inventan años, URLs ni imágenes.

**Alternativa descartada**: Generar datos ficticios → prohibido.

### Decisión 3: La plataforma es texto literal en `plataforma`

**Rationale**: El modelo ya usa `plataforma` como string directo (no i18n). Se rellena con el emisor real provisto por el usuario: "Udemy", "Anthropic", "Devin AI · Cognition".

## Risks / Trade-offs

- **[Riesgo]** Dejar muchos certificados sin `url`/`imagen` degrada la apariencia. **Mitigación**: El diseño actual ya contempla tarjetas sin imagen/enlace; se listan los `TODO(user)` para que el usuario cargue datos reales después.
- **[Trade-off]** Los nombres oficiales en inglés no se traducen; si más adelante se quieren localizar, bastará con editar las claves i18n sin cambiar la implementación.

## Migration Plan

- Cambio de datos + i18n, sin migración de esquema. Rollback: revertir `certificados.ts` y las claves i18n agregadas/cambidas.
