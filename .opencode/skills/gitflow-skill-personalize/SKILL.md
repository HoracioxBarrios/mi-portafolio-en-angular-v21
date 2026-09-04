---
name: gitflow-skill-personalize
description: Sube cambios al repositorio con un flujo git seguro. Úsala cuando el usuario pida "subamos", "subamos los cambios", "subamos el proyecto", "subir cambios", "commitear y subir" u otra frase equivalente que exprese la intención de subir los cambios del proyecto al remoto. Crea una rama corta con prefijo de tipo desde dev actualizado, hace commit, mergea a dev y hace push, sin tocar main salvo petición explícita.
---

# Subir cambios al repositorio (gitflow)

Guía el flujo de subida de cambios al repositorio de forma segura y consistente. El usuario activa esta skill cuando expresa la intención de subir cambios al remoto; no es necesario que diga la palabra exacta "subamos".

## 1. Activación

- **Triggers por intención**: "subamos", "subamos los cambios", "subamos el proyecto", "subir cambios", "subí los cambios", "commitear y subir", "¿subimos lo que hicimos?" y frases equivalentes que atribuyan la intención de subir los cambios al remoto.
- **NO se activa** por la palabra aislada ("subamos" sin contexto de subir el proyecto) ni por pedidos de solo commit sin mención de subir al remoto.
- Al activarse, empezar por la preverificación de la sección 2.

## 2. Preverificación

1. Ejecutar `git status --short` y `git branch --show-current` para conocer el estado del working tree y la rama actual.
2. Si hay artefactos staged no deseados (por ejemplo archivos de `.playwright-mcp/`, capturas, logs o temporales), **avisar al usuario antes de commitear** y NO incluirlos en el commit.
3. Verificar que no haya secrets ni `.env` a punto de commitearse; si los hay, detenerse y reportar.

## 3. Rama base

1. Asegurar la rama base: `git checkout dev`.
2. Si hay un remote configurado, actualizar: `git pull`; si no lo hay, avisar que el push se omitirá y continuar solo con la parte local.
3. **NUNCA** commitear directo sobre `dev`: siempre crear una rama nueva.

## 4. Nombrar la rama

- **`feature/<corto>`** si el cambio es una funcionalidad nueva.
- **`fix/<corto>`** si el cambio es una corrección de errores.
- `<corto>`: 2 a 4 palabras en kebab-case que identifiquen el cambio (p. ej. `feature/restaurar-tabbar`).
- Antes de crearla, verificar con `git branch --list <rama>` que no exista; si colisiona, proponer una variante.
- Crear la rama con `git checkout -b <rama>`.

## 5. Commit

1. Proponer un mensaje conventional (`feat:`, `fix:` o `chore:`) derivado del cambio.
2. Mostrar al usuario el resumen: rama, mensaje y archivos que se incluirán (`git add` solo de lo relevante, nunca temporales ni secrets).
3. **Esperar confirmación explícita** del usuario antes de `git commit`.

## 6. Merge y push

1. `git push -u origin <rama>`.
2. `git checkout dev`.
3. `git merge --no-ff <rama>` (conservar la historia de la rama).
4. `git push origin dev`.

## 7. Prohibición de tocar main

- **NUNCA** mergear ni pushear a `main`, salvo que el usuario lo pida explícitamente **en el mismo pedido**. Si el usuario solo pide "subir los cambios", el flujo es contra `dev`.

## 8. Detención ante errores

- Si cualquier paso falla (conflicto de merge, push rechazado por el remoto, working tree sucio, rama inexistente), **detener el flujo y reportar el error** al usuario.
- **Prohibido** usar `--force` o `--force-with-lease` para resolver el problema.
- Ante un push rechazado sugerir `git pull --rebase` o un merge manual; ante un conflicto de merge, ofrecer resolverlo manualmente o abortar con `git merge --abort`.
