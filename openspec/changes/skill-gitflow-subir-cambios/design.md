## Context

La skill se aloja en `.opencode/skills/<nombre>/SKILL.md` (formato opencode: frontmatter con `name` y `description`, cuerpo en Markdown). El repo ya tiene skills de opencode en `.opencode/skills/` (las de openspec) que sirven de referencia de formato. El flujo git del proyecto usa `dev` como rama de integración y `main` está protegido de facto (regla del usuario: nunca mergear/pushear a `main` sin pedido explícito). Ver proposal.md - Why para la motivación y specs/gitflow-subir-cambios/spec.md para los requisitos.

## Goals / Non-Goals

**Goals:**
- Una sola skill de opencode, autodetectable por ubicación en `.opencode/skills/`, que implemente el flujo completo de subida.
- Flujo determinista y verificable: verificación previa → rama desde `dev` → commit → merge → push, con detención ante errores.
- Nombre de rama corto con prefijo de tipo (`feature/`|`fix/`).

**Non-Goals:**
- Modificar `.gitignore` (el warning de `.playwright-mcp/` se maneja en la skill, no se amplía el scope).
- Cambiar `opencode.json` (la skill se autodescubre).
- Implementar PRs, rebase interactivo, tags ni releases.
- Modificar reglas de protección de ramas en el remoto (GitHub/GitLab).

## Decisions

### 1. Formato y ubicación de la skill
Archivo `.opencode/skills/gitflow-skill-personalize/SKILL.md` con frontmatter:
- `name: gitflow-skill-personalize` (kebab-case, coincide con la carpeta).
- `description`: debe frontalizar los triggers ("subamos", "subamos los cambios") y describir el flujo, en tercera persona, para que el modelo la cargue al detectar la intención.

**Alternativa considerada:** `.claude/skills/` — descartada; el usuario eligió `.opencode/skills/` del proyecto.

### 2. Detección de intención vs palabra literal
La skill se dispara por **intención semántica** ("subamos", "subamos los cambios", "subí los cambios", "commitear y subir") y no por un comando fijo. En la `description` del frontmatter se listan los triggers y se aclara que cubre frases equivalentes. El cuerpo de la skill incluye una sección de triggers explícitos.

### 3. Secuencia git (con gate de errores)
Pasos obligatorios en el cuerpo de la skill:
1. `git status --short` y `git branch --show-current`: detectar staged no deseados (p.ej. `.playwright-mcp/`) y avisar.
2. Asegurar rama base: `git checkout dev` + `git pull` (si no hay un remote configurado, avisar y seguir solo con local).
3. Nombrar rama: `feature/<corto>` o `fix/<corto>` según el tipo; `<corto>` derivado del cambio (2-4 palabras, kebab).
4. `git checkout -b <rama>`.
5. Commit: mensaje conventional (`feat:`/`fix:`/`chore:`) **confirmado con el usuario**; `git add` solo de lo relevante.
6. `git push -u origin <rama>`.
7. `git checkout dev`, `git merge --no-ff <rama>`, `git push origin dev`.
8. Nunca tocar `main` salvo que el usuario lo pida explícitamente en el mismo pedido.
9. Cualquier error (conflicto, push rechazado, working tree sucio) → **detenerse y reportar**, sin `--force`.

**Alternativa considerada:** merge fast-forward sin `--no-ff` — descartada por la sugerencia de conservar la historia de la rama.

### 4. Confirmación previa al commit
El cuerpo exige mostrar el resumen (rama, mensaje, archivos) y esperar confirmación del usuario antes de `git commit`. Esto evita commits con archivos no deseados.

## Risks / Trade-offs

- **Push de `dev` rechazado por cambios remotos** → Mitigación: detener, reportar y sugerir `git pull --rebase` o merge manual; nunca `--force`.
- **Rama con nombre colisionante** → Mitigación: verificar `git branch --list <rama>` antes de crearla y proponer variante.
- **Conflicto de merge en `dev`** → Mitigación: detener y pedir decisión al usuario (resolver manualmente o abortar con `git merge --abort`).
- **Sin remote configurado** → Mitigación: la skill avisa y puede completar la parte local; el push se omite con advertencia.
- **Falsa activación por palabra suelta** → Mitigación: la description acota la activación a frases con intención de subir cambios.

## Migration Plan

1. Crear `.opencode/skills/gitflow-skill-personalize/SKILL.md`.
2. Reiniciar opencode para que la skill se cargue (las skills se cargan al inicio; el resto de la sesión usa la config ya cargada).
3. Verificación manual: invocar la skill con una frase de prueba ("subamos") en un cambio trivial y revisar que la secuencia git respeta `dev`/`main`.
4. Rollback: eliminar el archivo de la skill; no hay migraciones de datos ni dependencias.

## Open Questions

Ninguna. Los detalles de activación, nombre de rama y flujo de push quedaron fijados por las respuestas del usuario en la fase de clarificación.
