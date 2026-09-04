## 1. Datos de certificaciones

- [x] 1.1 Actualizar `src/app/core/data/certificados.ts` para que `CERTIFICADOS` contenga exactamente las 9 certificaciones provistas, en el orden dado y con su plataforma real:
  - Angular → Udemy
  - C# → Udemy
  - Claude 101 → Anthropic
  - Claude Code in Action → Anthropic (se corrige: antes Udemy)
  - Claude Code 101 → Anthropic
  - Introduction to Model Context Protocol → Anthropic
  - Introduction to Agent Skills → Anthropic
  - Introduction to SubAgents → Anthropic
  - Devin Foundations Badge → Devin AI · Cognition
  - Model Context Protocol: Advanced Topics → Anthropic (agregada en una segunda iteración)
- [x] 1.2 Dejar `anio`, `url` e `imagen` como `undefined` (no provistos) con `TODO(user)` para que el usuario los complete después; prohibido inventar datos

## 2. Localización (i18n)

- [x] 2.1 En `src/app/core/i18n/es.ts`, agregar claves i18n para los títulos nuevos y conservar/ajustar las existentes:
  - `about.certificados.claude101.title` → "Claude 101"
  - `about.certificados.claudeCodeInAction.title` → mantener "Claude Code in Action"
  - `about.certificados.claudeCode101.title` → "Claude Code 101"
  - `about.certificados.mcp.title` → "Introduction to Model Context Protocol"
  - `about.certificados.agentSkills.title` → "Introduction to Agent Skills"
  - `about.certificados.subAgents.title` → "Introduction to SubAgents"
  - `about.certificados.devinFoundations.title` → "Devin Foundations Badge"
  - Mantener `angular` ("Curso de Angular") y `cSharp` ("Curso de C#")
- [x] 2.2 Hacer lo mismo en `src/app/core/i18n/en.ts` con las equivalencias en inglés:
  - `angular` ("Angular Course"), `cSharp` ("C# Course"), `claudeCode` ("Claude Code"), y los nombres oficiales en inglés sin traducción para los nuevos
- [x] 2.3 Verificar que no queden claves i18n huérfanas (sin certificado que las use) tras el cambio
- [x] 2.4 Agregar la clave i18n `about.certificados.mcpAdvanced.title` ("Model Context Protocol: Advanced Topics") en `es.ts` y `en.ts`

## 3. Verificación

- [x] 3.1 Verificar que el proyecto no tiene scripts de lint/typecheck y ejecutar el build (`npm run build`) para confirmar que no hay errores
- [x] 3.2 En el navegador (dev server), revisar la sección "Sobre Mí" → Certificados: se muestran las 9 tarjetas con sus plataformas correctas y sin errores de consola
- [x] 3.3 Alternar idioma ES/EN y tema dark/light para confirmar títulos y sección coherentes y visibles
- [x] 3.4 Re-ejecutar el build y verificar en el navegador que se muestran las 10 tarjetas de certificación (incluida "Model Context Protocol: Advanced Topics" de Anthropic)
