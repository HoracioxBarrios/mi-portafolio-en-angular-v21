# Guía de Configuración del Entorno

Guía paso a paso para reproducir este entorno de desarrollo (Windows + VS Code + Node + OpenCode + OpenSpec + Playwright).

> **IMPORTANTE — Seguridad**: nunca publiques claves API reales en guías, commits o chats. En esta guía se usa el placeholder `sk-...`. La clave se obtiene en OpenCode (`/zen` → claves API) y se guarda localmente, nunca en el repositorio.

---

## 0. Verificación previa

Todos los comandos se ejecutan desde la **terminal integrada de VS Code** (`Ctrl + Ñ`).

---

## 1. Instalar Visual Studio Code

1. Descargar e instalar desde <https://code.visualstudio.com/>.
2. (Recomendado) Instalar el comando `code` en el PATH:
   - `Ctrl+Shift+P` → "Shell Command: Install 'code' command in PATH".

---

## 2. Configurar permisos de script en PowerShell (Execution Policy)

PowerShell bloquea por defecto la ejecución de scripts. Habilitarla (una vez, como Administrador):

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

- `RemoteSigned`: permite scripts locales y los descargados solo si están firmados.
- `CurrentUser`: solo afecta al usuario actual (no requiere consola elevada).

Verificar:

```powershell
Get-ExecutionPolicy
```

---

## 3. Instalar Node.js (Recomendado ≥ 20)

Descargar desde <https://nodejs.org/> (versión LTS 20 o superior).

Verificar en la terminal de VS Code:

```powershell
node -v
npm -v
```

> Requisito mínimo para OpenCode, OpenSpec y Playwright: **Node 20+**. Aquí se usa Node 24.

---

## 4. Instalar OpenCode (agente de IA)

Sitio oficial: <https://opencode.ai/>

En la terminal de VS Code:

```powershell
npm i -g opencode-ai@latest
```

Verificar:

```powershell
opencode --version
```

### 4.1. Extensión de OpenCode en VS Code

1. Abrir el panel de extensiones (`Ctrl+Shift+X`).
2. Buscar **OpenCode** y pulsar **Instalar** (publicador oficial: SST).
   - Alternativa automática: la primera vez que ejecutas `opencode` en la terminal integrada de VS Code, la extensión se instala sola.
3. Reiniciar/recargar VS Code.

### 4.2. Elegir modelo (opción gratuita: modelos free integrados)

OpenCode trae **modelos gratuitos integrados** que funcionan sin clave API ni tarjeta de crédito. No es necesario `/connect` para usarlos.

1. Abrir la ventana de OpenCode en VS Code.
2. Ejecutar el comando **`/models`**.
3. Elegir un modelo del listado que termine en `-free` (o los flash/lite):

   - `opencode/deepseek-v4-flash-free`
   - `opencode/gemini-3.5-flash`
   - `opencode/longcat-2.0-free`
   - `opencode/ling-3.0-tiny-free`
   - `opencode/mimo-v2.5-free`
   - `opencode/nemotron-3-ultra-free`
   - `opencode/north-mini-code-free`
   - `opencode/laguna-s-2.1-free`

> **Nota**: OpenCode Zen (`/connect` → Zen) y OpenCode Go son **servicios de pago**; los modelos `-free` son la alternativa sin costo.

### 4.3. (Opcional) Conectar un proveedor con clave propia

Si más adelante querés usar un proveedor con API key propia (gratis o de pago), el flujo general es:

1. Obtener la clave en la web del proveedor (ej: Groq en <https://console.groq.com/>, DeepSeek, NVIDIA en <https://build.nvidia.com>).
2. En la ventana de OpenCode de VS Code escribir **`/connect`**, buscar el proveedor y pegar la clave:

   ```
   sk-...
   ```

3. Elegir el modelo en **`/models`**.

> La clave se guarda en `~/.local/share/opencode/auth.json` y nunca debe pegarse en archivos del repositorio.

---

## 5. Instalar OpenSpec (SDD — Spec-Driven Development)

Sitio oficial: <https://openspec.dev/>

En la terminal de VS Code:

```powershell
npm install -g @fission-ai/openspec@latest
```

Inicializar OpenSpec **dentro del proyecto** (paso obligatorio):

```powershell
openspec init
```

Verificar:

```powershell
openspec --version
```

> `openspec init` crea la estructura de `openspec/` y los skills/commands para el editor detectado. Debe ejecutarse dentro de la carpeta del proyecto.

### 5.1. Actualizar OpenSpec

Para actualizar la CLI y regenerar los archivos generados en cada proyecto:

```powershell
npm install -g @fission-ai/openspec@latest   # o pnpm/yarn/bun equivalente
openspec update                               # ejecutar dentro del proyecto
```

---

## 6. Instalar Playwright (E2E + MCP)

Documentación: <https://playwright.dev/docs/intro#installing-playwright>

En la terminal de VS Code, dentro del proyecto:

```powershell
npm init playwright@latest
```

Este comando crea `playwright.config.ts`, instala `@playwright/test` y pregunta por los navegadores a instalar.

Instalar los navegadores (si no lo hizo el paso anterior):

```powershell
npx playwright install
```

> El **Playwright MCP** (`@playwright/mcp`) para el agente de IA lo configura automáticamente `openspec-pw init` (paso 7) añadiendo la entrada `mcp.playwright` en `opencode.jsonc`.

---

## 7. Instalar OpenSpec + Playwright (E2E automatizado)

Repositorio: <https://github.com/wxhou/openspec-playwright>

En la terminal de VS Code:

```powershell
npm install -g openspec-playwright@latest
```

Inicializar la integración E2E **dentro del proyecto** (después de `openspec init`):

```powershell
openspec-pw init
```

Verificar que todo está correcto:

```powershell
openspec-pw doctor
```

> `openspec-pw init` detecta el editor (OpenCode en este caso), instala el comando `/opsx-e2e`, genera `tests/playwright/` (seed, auth, plantillas) y añade Playwright MCP a `opencode.jsonc`.

---

## 8. Orden recomendado de instalación (resumen)

```powershell
# 1. VS Code + PowerShell (secciones 1-2)
# 2. Node 20+ (sección 3)

# 3. OpenCode
npm i -g opencode-ai@latest
opencode --version
# extensión en VS Code + /models (elegir modelo -free, sin clave)

# 4. OpenSpec
npm install -g @fission-ai/openspec@latest
openspec init          # dentro del proyecto

# 5. Playwright
npm init playwright@latest
npx playwright install

# 6. OpenSpec-Playwright
npm install -g openspec-playwright@latest
openspec-pw init       # dentro del proyecto
openspec-pw doctor

# 7. Actualizaciones periódicas
openspec update        # dentro del proyecto
```

---

## 9. Verificación final

```powershell
node -v                      # >= 20
npm -v
opencode --version
openspec --version
openspec-pw --version
```

Todos deben imprimir su versión sin errores.

---

## 10. Verificación del entorno E2E (troubleshooting)

Después de la instalación inicial, verificá que el entorno Playwright + OpenSpec E2E funcione:

### 10.1. Doctor de openspec-playwright

```powershell
openspec-pw doctor
```

Revisa la salida. Problemas comunes y soluciones:

| Problema | Solución |
|----------|----------|
| `browsers: not installed` | `npx playwright install --with-deps` (o `npx playwright install chromium`) |
| `base-url: http://localhost:3000` incorrecto | Verificar `playwright.config.ts` → `baseURL: 'http://localhost:4200'` y `webServer.url` |
| `mcp.playwright` falta en config | Ejecutar `openspec-pw init` (agrega MCP a `.opencode/opencode.jsonc` o global) |

> **Nota Windows**: a veces `npx playwright install` no muestra output pero los navegadores se instalan en `%LOCALAPPDATA%\ms-playwright\`. Verificá con `ls "$env:LOCALAPPDATA\ms-playwright\"`.

### 10.2. Reinicializar si hace falta

Si el doctor reporta faltantes tras instalar navegadores:

```powershell
openspec-pw init
```

Esto regenera comandos, configura MCP y actualiza estándares.

### 10.3. Ejecutar seed test (valida entorno completo)

```powershell
npx playwright test tests/playwright/seed.spec.ts --project=chromium
```

Debe pasar **4 tests** (smoke + env validation). Si falla:
- Verificar que `ng serve` está corriendo en otra terminal (`http://localhost:4200` responde 200)
- Revisar `playwright.config.ts` → `webServer.command` y `url`

### 10.4. Reiniciar OpenCode en VS Code

Para que cargue el comando `/opsx-e2e` actualizado:

```
Ctrl+Shift+P → "OpenCode: Restart"
```

---

## 11. Ejecutar E2E (modo all — exploración completa)

Con el servidor de desarrollo corriendo (`ng serve` en otra terminal):

1. Abrir panel **OpenCode** en VS Code (barra lateral).
2. Escribir:

   ```
   /opsx-e2e all
   ```

Esto ejecuta el pipeline completo:
1. **Descubrimiento de rutas** → `sitemap.xml` + link extraction
2. **Exploración** → snapshot DOM + screenshots por ruta
3. **Page Objects** → genera `tests/playwright/pages/<Route>Page.ts`
4. **Conocimiento compartido** → `app-exploration.md` + `tests/playwright/app-knowledge.md`

> El comando completo está definido en `.opencode/commands/opsx-e2e.md` y usa el workflow de 10 pasos (Planner → Generator → Healer).

---

## 12. Archivos generados clave (referencia rápida)

| Archivo | Qué contiene |
|---------|--------------|
| `.opencode/commands/opsx-e2e.md` | Comando slash para OpenCode |
| `playwright.config.ts` | Config Playwright (baseURL, webServer, projects) |
| `tests/playwright/seed.spec.ts` | Validación de entorno (smoke test) |
| `tests/playwright/auth.setup.ts` | Setup de autenticación (si hay login) |
| `tests/playwright/credentials.yaml` | Credenciales de prueba (E2E_USERNAME/E2E_PASSWORD) |
| `tests/playwright/app-knowledge.md` | Selectores, rutas, convenciones del proyecto |
| `tests/playwright/pages/BasePage.ts` | Clase base Page Object |
| `openspec/reports/app-bug-registry.md` | Registro acumulativo de bugs de la app |
| `openspec-pw doctor` | Diagnóstico de prerequisitos |
