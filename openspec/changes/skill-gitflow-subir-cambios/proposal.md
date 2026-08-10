## Why

Subir cambios al repositorio es una tarea repetitiva con reglas de seguridad (nunca tocar `main`, no trabajar directo sobre `dev`), y sin una guía estandarizada el agente puede cometer push directos a ramas protegidas o commits desordenados. Se necesita una skill de opencode que, ante una frase de intención como "subamos" / "subamos los cambios", ejecute el flujo git correcto de forma consistente: rama nueva corta e identificativa desde `dev` actualizado, commit, merge a `dev` y push, sin tocar `main`.

## What Changes

- **Nueva skill de opencode** en `.opencode/skills/gitflow-skill-personalize/SKILL.md` (nombre de carpeta y frontmatter `name` en kebab-case, que describa qué hace y cuándo dispararse).
- **Trigger por frase**: la skill se activa cuando el usuario diga "subamos", "subamos los cambios" u otras frases equivalentes atribuyendo ese significado (no solo la palabra literal).
- **Flujo git seguro**:
  - Verificar que no haya temporales ni secrets en el stage (respetar `.gitignore`; avisar si hay artefactos como `.playwright-mcp/` staged).
  - Crear rama nueva desde `dev` actualizado (`git status` limpio, `git pull` de dev).
  - Nombre de rama corto e identificativo con prefijo de tipo: `feature/<corto>` para features, `fix/<corto>` para fixes.
  - Commit en la rama con mensaje conventional (`feat:`/`fix:`/`chore:`), confirmado con el usuario.
  - Merge `--no-ff` hacia `dev` y push de la rama y de `dev`.
  - **NUNCA** mergear/pushear a `main` salvo pedido explícito del usuario.
- **Detenerse ante fallos**: si un comando falla (conflicto de merge, push rechazado, working tree sucio), parar y reportar; no forzar push ni `--force`.

## Capabilities

### New Capabilities

- `gitflow-subir-cambios`: comportamiento observable del flujo de subida de cambios al repositorio: activación por intención ("subamos"), creación de rama corta con prefijo de tipo desde `dev` actualizado, commit con mensaje conventional confirmado, merge `--no-ff` a `dev`, push de rama y dev, y prohibición de tocar `main` salvo pedido explícito.

### Modified Capabilities

<!-- Ninguna: es una skill nueva; no existen specs principales previas en el repo. -->

## Impact

- **Nuevo archivo**: `.opencode/skills/gitflow-skill-personalize/SKILL.md` (skill de proyecto para opencode).
- **Sin cambios** en `opencode.json`: la skill se autodescubre por ubicación en `.opencode/skills/`.
- **Sin cambios** en código de la aplicación, dependencias ni CI.
- **Nota**: `.gitignore` no excluye `.playwright-mcp/`; la skill debe advertir si hay artefactos staged no deseados antes de commitear (no amplía el scope a modificar `.gitignore`).
