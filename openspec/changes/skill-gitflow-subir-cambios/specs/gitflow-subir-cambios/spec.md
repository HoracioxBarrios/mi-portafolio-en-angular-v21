## Purpose

Define el comportamiento observable de la skill de gitflow que sube cambios al repositorio de forma segura: activación por intención ("subamos"), rama corta con prefijo de tipo desde dev actualizado, commit, merge a dev y push, sin tocar main salvo pedido explícito.

## ADDED Requirements

### Requirement: Activación por intención de subir cambios

La skill SHALL activarse cuando el usuario exprese la intención de subir cambios al repositorio, usando frases como "subamos", "subamos los cambios" u otras equivalentes que atribuyan ese significado, y NO únicamente la palabra literal aislada.

#### Scenario: Usuario pide subir los cambios con frase equivalente

- **WHEN** el usuario escribe "subamos los cambios del header"
- **THEN** la skill se activa y guía el flujo de subida de cambios

### Requirement: Rama nueva corta con prefijo de tipo desde dev actualizado

La skill SHALL crear una rama nueva a partir de `dev` actualizado, nunca commitear directo sobre `dev`. El nombre de la rama SHALL ser corto, identificativo del cambio y con prefijo de tipo: `feature/<corto>` si es una funcionalidad y `fix/<corto>` si es una corrección. Antes de crear la rama, el working tree SHALL estar limpio (sin temporales ni secrets staged).

#### Scenario: Subir una funcionalidad

- **WHEN** el cambio a subir es una funcionalidad
- **THEN** la rama se nombra `feature/<corto>` y se crea desde `dev` actualizado

#### Scenario: Subir una corrección

- **WHEN** el cambio a subir es una corrección de errores
- **THEN** la rama se nombra `fix/<corto>` y se crea desde `dev` actualizado

#### Scenario: Working tree con temporales staged

- **WHEN** hay artefactos no deseados staged (por ejemplo archivos de `.playwright-mcp/`)
- **THEN** la skill avisa al usuario antes de commitear y no los incluye en el commit

### Requirement: Commit con mensaje conventional confirmado

El commit SHALL hacerse en la rama nueva con un mensaje conventional (`feat:`/`fix:`/`chore:`) derivado del cambio, y SHALL confirmarse con el usuario antes de ejecutarlo.

#### Scenario: Commit en la rama de feature

- **WHEN** la rama nueva está creada y el usuario confirma el mensaje
- **THEN** se ejecuta el commit con el mensaje conventional acordado

### Requirement: Merge a dev y push, sin tocar main

Tras el commit, la skill SHALL mergear la rama a `dev` con `--no-ff` y pushear la rama y `dev` al remoto. La skill SHALL NUNCA mergear ni pushear a `main` salvo que el usuario lo pida explícitamente en el mismo pedido.

#### Scenario: Merge a dev y push final

- **WHEN** el commit está hecho en la rama nueva
- **THEN** la rama se mergea a `dev` con `--no-ff` y se pushea tanto la rama como `dev`

#### Scenario: El usuario no menciona main

- **WHEN** el usuario pide subir cambios sin mencionar `main`
- **THEN** la skill no mergea ni pushea a `main`

### Requirement: Detenerse ante fallos sin forzar push

Si cualquier paso falla (conflicto de merge, push rechazado, working tree sucio, rama inexistente), la skill SHALL detenerse y reportar el error al usuario, sin usar `--force` ni operaciones destructivas para resolverlo.

#### Scenario: Push rechazado por el remoto

- **WHEN** el remoto rechaza el push
- **THEN** la skill detiene el flujo y reporta el error, sin reintentar con `--force`
