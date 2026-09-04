# C:\Users\Hora\Desktop\Proyectos\mi-portafolio-en-angular-v21

<!-- OPENSPEC:START -->

## CodeGraph primero 🔴

Cuando existe `.codegraph/`: tareas estructurales (localizar definiciones, cadenas de llamada, superficie de impacto, flujos) → **primer paso obligatorio** llamar a `codegraph_explore`, usar directamente el resultado para responder, no hacer grep/read antes; grep/read solo para texto literal, archivos ya abiertos, o cuando el resultado no basta. No lanzar sub-agents para reconstruir el índice. Si no hay `.codegraph/`, saltar. Violar esto degrada a bucles de exploración grep/read, coste de tokens 5-10× mayor.

@AGENTS.md

<!-- OPENSPEC:END -->