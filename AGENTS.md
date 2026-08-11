# C:\Users\Hora\Desktop\Proyectos\mi-portafolio-en-angular-v21
<!-- OPENSPEC:START -->

# AI Coding Assistant Employee-Grade Standards

---

## 0. Alcance

**Convenio**: leer `openspec/config.yaml` antes de actuar (tech stack, estructura, convenciones, restricciones); si no existe, ignorar.

**Idioma**: responder al usuario en **español**.

**Regla de prioridad**: 🔴 CRITICAL (violación → bug silencioso / vulnerabilidad, **corregir obligatoriamente**) → **parar y confirmar antes de ejecutar** | 🟡 IMPORTANT (desviación requiere justificación) → **ejecutar con cuidado, explicar la desviación** | ⚪ STANDARD (práctica estándar, ajustable) → **ejecutar según estándar**

---

## 1. Calidad de código

> WHY: la IA tiende a escribir mucho, rápido y a adivinar. Esta sección convierte esas tendencias en código de producción verificable.

**DO**
- 🔴 **lint + typecheck tras cada edición, pasar = éxito**. Detectar lenguaje por extensión: .ts/.tsx→ESLint+tsc, .py→ruff+mypy, .go→gofmt+vet, etc. Si la herramienta no existe, avisar al usuario, no fingir que corrió.
- 🟡 No ocultar fallos de gates — lint / typecheck / test: si falla uno, mostrar log completo y **parar**, no continuar.
- ⚪ Pasos no ejecutados marcados como "no ejecutado", no insinuar que pasaron.
- 🟡 Requisitos ambiguos o riesgos visibles → **parar y preguntar**, no ejecutar. Desviación del estándar requiere explicación.
- 🟡 Listar suposiciones antes de actuar → validar cada una. Si algo no queda claro → parar, explicar la duda, preguntar.
- 🟡 Si hay varias interpretaciones, listar todas; si hay solución más simple, proponerla y mantenerla.
- 🟡 Tareas multi-paso: plan previo (`1. [Paso] → verify: [check]`), bucle de validación hasta éxito.
- 🟡 lint falla → auto-fix prioritario (`npm run lint:fix` / `ruff format .` / `go fmt ./...`).
- 🟡 Solo lo pedido: nada de "flexible", "configurable", abstracciones de un uso, features no solicitadas. 200 líneas en 50 → reescribir.
- 🟡 Cambios quirúrgicos: solo lo necesario, limpiar basura propia. Imitar estilo existente.
- 🟡 Límite 1500 líneas/archivo: exceso = violación, dividir por responsabilidad, no apilar.
- ⚪ Antes de refactor: limpiar imports/exports/props/console.log no usados, commit separado y luego refactor.

**DO NOT**
- No escribir lógica que solo encaje con valores de entrada concretos → upstream cambia y rompe.
- No asumir datos externos válidos → validar tipo/rango/null, manejar vacío/excepciones/límites, evitar NPE e inyección.
- No asumir éxito en async/operaciones externas → red, disco, downstream fallan cuando quieran.
- No asumir estructura de respuesta fija → validar antes de acceder a propiedades profundas, API cambia campos sin avisar.
- No asumir precisión/rango seguro → confirmar rango seguro antes de calcular, overflow y pérdida de precisión son bugs silenciosos.
- No asumir liberación automática de recursos → archivos/conexiones/cursors: liberar tras uso.
- No números mágicos → constantes/enum con comentario del porqué.
- No asserts de valores concretos (salvo pedido explícito) → asserts frágiles, cambian de entorno y rompen.

**REQUIRE**
- linter/typechecker inexistente → avisar al usuario y sugerir instalación.
- mock data / fixtures → ver §5 Prohibición de inventar datos.
- Definiciones de API → consultar OpenAPI/MCP real y citar fuente.
- **Idioma único**: **todo** (respuestas, docs, comentarios de código, strings, logs, mensajes de commit, nombres de variables) **en español**. Prohibido chino, inglés u otro idioma en artefactos del repo.

---

## 2. Gestión de contexto

> WHY: ventana de contexto limitada, compresión/restauración pierde estado. Protocolo de recuperación.

**DO**
- 🟡 Archivos >500 líneas: leer por partes o releer completo antes de editar.
- 🟡 Tras compresión/restauración: `git status` → releer proposal/design/tasks → contrastar con design → lint+typecheck → continuar.
- ⚪ >10 mensajes: **forzar releer** archivo antes de editar.

**DO NOT**
- Prohibido saltar fases (explore→apply→verify→e2e, cada fase la dispara el usuario).
- Prohibido cruzar changes: durante `/opsx:apply <X>` no tocar `changes/<Y>/`.
- Prohibido "limpiar de paso" otros changes abiertos → avisar al usuario, él decide.

---

## 3. Uso de herramientas

> WHY: la forma de usar herramientas define cobertura y precisión de búsquedas.

**DO**
- 🟡 Búsqueda en capas: problemas estructurales (definición/llamada/impacto/flujo) → CodeGraph; texto literal → búsqueda completa; patrón nombre archivo → match por nombre. Saltar `node_modules`, caché (salvo debug deps), acotar subdirectorios según necesidad.
- 🟡 Renombrado total: llamadas, tipos, strings, imports, barrel files, test mocks; no asumir cobertura en una pasada.
- 🟡 Investigación online → skill `agent-reach` prioritario.
- 🟡 UI design frontend: secuencia `frontend-design` (dirección) → `ui-ux-pro-max` (estilo) → `web-design-guidelines` (revisión), tres pasos evitan "look genérico IA".
- 🟡 Al recibir pedidos de diseño de UI/UX o copy de la landing (CTAs, textos del hero, botones, navegación): **obligatorio** cargar y aplicar la skill `landing-page-mastery` (copy de conversión + diseño) y la skill `angular-developer` (estándares de implementación Angular). Esto se aplica también en el workflow OpenSpec al redactar proposal/design de cambios de UI.
- 🟡 Editar → releer confirmación → lint+typecheck → si falla, revertir.
- 🟡 Cambio completado → avisar zonas posiblemente olvidadas, sugerir revisión manual.

**DO NOT**
- Prohibido sed/awk/node -e/python -c para modificar fuente (salta validación del editor).
- No push automático salvo pedido explícito.
- No asumir que una búsqueda cubre todo — CodeGraph cubre más, match por nombre puede perder archivos anidados/extensiones no estándar, búsqueda full-text inconsistente cross-lang/repo.

**REQUIRE**
- Usar formateadores (ruff fmt / prettier excluidos — no cambian semántica).
- Secrets y .env **nunca** en control de versiones. Ejemplos con placeholders (`YOUR_API_KEY`). Logs de debug sin credenciales.

---

## 4. Tareas grandes

> WHY: 200+ líneas sin revisión = riesgo. OpenSpec obliga propuesta→diseño→revisión→implementación.

- 🔴 200+ líneas o cambios de arquitectura (nuevo servicio/contrato API/refactor modelo de datos) **obligatorio** OpenSpec (`/opsx:propose`), prohibido modificar directo.

### Referencia de workflow

| Fase | Comando | Salida |
|------|---------|--------|
| Propuesta | `/opsx:propose` | proposal + scenarios |
| Implementación | `/opsx:apply` | lint + typecheck OK |
| Auto-revisión | `/opsx:verify` | implementación = design, sin huecos |
| E2E | `/opsx:e2e` / `/opsx-e2e` | tests generados + Healer OK |
| Archivo | `/opsx:archive` | specs actualizados, archivado |

**Todas las fases las dispara el usuario manualmente; la IA no avanza sola.**

---

## 5. Prohibición de inventar datos

> WHY: la IA "rellena huecos" — sin datos, inventa valores plausibles → bugs silenciosos.

**DO NOT**
- **Prohibido** inventar datos para rellenar código, salvo consentimiento explícito del usuario.
- Ejemplos de invención: mock users/emails/teléfonos, expectativas de test inventadas, defaults de config inexistentes, interfaces/campos/enums que no existen.
- No inventar URLs/paths → citar fuente real, no improvisar endpoints/paths/nombres de campo.
- Código que necesita datos → **preguntar explícitamente al usuario**.
- Usuario rechaza → stub / `throw` / `return null` fallo explícito, **prohibido inventar en silencio**.

**REQUIRE**
- Usuario acepta placeholder → `TODO(user)` con contexto de la pregunta.
- Usuario da datos → usar datos reales.
- Exista OpenAPI/docs de interfaz → consultar definición real y citar (ej. `// Fuente: docs/api/openapi.yaml#/paths/...`).

---

## 6. Gestión de archivos temporales

> WHY: temporales sueltos en raíz → commits accidentales (repo inflado) o acumulación imposible de limpiar (disco lleno). Protocolo auto-gestionable.

**DO**
- 🟡 Temporales no-código (screenshots, logs, heapdumps…) en `tmp/` de la raíz del proyecto.
- 🟡 Nombres con timestamp (`screenshot-20260721T143000.png`) para evitar colisiones/duplicados.
- ⚪ Plano, sin subcarpetas, simplifica limpieza.

**DO NOT**
- 🔴 **Prohibido commitear temporales** (asegurar `.gitignore` incluye `tmp/`).

**REQUIRE**
- 🟡 Archivos >24h → borrar antes de commit.
- ⚪ Nombrado según convención del lenguaje/framework del proyecto (JS/Go kebab-case, Python/Rust snake_case, Java PascalCase), sin espacios ni caracteres especiales.

<!-- OPENSPEC:END -->