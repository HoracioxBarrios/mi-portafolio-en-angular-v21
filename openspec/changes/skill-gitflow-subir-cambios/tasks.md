## 1. Crear la skill de gitflow

- [x] 1.1 Crear el directorio `.opencode/skills/gitflow-skill-personalize/`
- [x] 1.2 Crear `.opencode/skills/gitflow-skill-personalize/SKILL.md` con frontmatter válido de opencode: `name: gitflow-skill-personalize`, `description` que liste los triggers ("subamos", "subamos los cambios" y equivalentes por intención) y describa el flujo de subida de cambios
- [x] 1.3 Redactar la sección de activación en el cuerpo: cómo detectar la intención de subir cambios (frases equivalentes, no solo palabra literal)

## 2. Documentar el flujo git seguro

- [x] 2.1 Redactar en el cuerpo la preverificación: `git status --short` para detectar staged no deseados (p.ej. `.playwright-mcp/`) y avisar antes de commitear
- [x] 2.2 Redactar la secuencia: rama base `dev` actualizada (`git checkout dev` + `git pull`, con aviso si no hay remote), creación de rama `feature/<corto>` o `fix/<corto>` según el tipo del cambio
- [x] 2.3 Redactar el paso de commit: mensaje conventional (`feat:`/`fix:`/`chore:`) confirmado con el usuario y `git add` solo de archivos relevantes
- [x] 2.4 Redactar el paso de merge y push: `git push -u origin <rama>`, `git merge --no-ff` hacia `dev` y `git push origin dev`
- [x] 2.5 Redactar la prohibición explícita: nunca mergear/pushear a `main` salvo petición explícita del usuario en el mismo pedido
- [x] 2.6 Redactar la regla de detención ante errores (conflicto, push rechazado, working tree sucio): parar y reportar, sin `--force`

## 3. Verificar la skill

- [ ] 3.1 Validar que el frontmatter de `SKILL.md` es reconocible por opencode (reiniciar opencode y verificar que la skill aparece en la lista de skills del proyecto)
- [ ] 3.2 Verificación manual del flujo: invocar la skill con una frase de prueba ("subamos") en un cambio trivial y confirmar que la secuencia git respeta `dev` y no toca `main`
