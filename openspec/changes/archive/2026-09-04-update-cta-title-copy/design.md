## Context

Change de copy puramente textual: se edita únicamente la clave `home.cta.title` en los archivos de traducción (`es.ts` → "¿Te interesa lo que hago?" y `en.ts` → "Interested in what I do?"). Ver proposal.md - Why. No hay lógica, componentes ni estilos afectados.

## Goals / Non-Goals

**Goals:**
- Reemplazar el titular del CTA de contacto en ambos idiomas manteniendo el resto del copy intacto

**Non-Goals:**
- No se modifica el botón "Escribime", el texto de apertura, ni el diseño de la sección
- No se cambia la estructura de i18n

## Decisions

### Decisión 1: Editar sólo la clave `home.cta.title` en i18n

**Rationale**: El titular se renderiza desde la clave de traducción. Cambiar únicamente el valor es la mínima intervención, sin tocar plantillas ni componentes. Una sola fuente de verdad por idioma.

**Alternativa descartada**: Hardcodear el texto en el template → rompe el sistema de i18n y obligaría a duplicar el copy.

### Decisión 2: Copy en inglés propuesto "Interested in what I do?"

**Rationale**: Equivalente amigable y conversacional al español "¿Te interesa lo que hago?" elegido por el usuario, coherente con la skill de landing (tono anti-marketing/humano).

## Risks / Trade-offs

- **[Riesgo bajo]** Que el copy en inglés propuesto no sea el deseado por el usuario. **Mitigación**: Es trivial de ajustar en `en.ts`; se registra en el spec y puede revisarse durante apply.
