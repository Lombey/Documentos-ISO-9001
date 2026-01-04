# SGC Corvus - ISO 9001 Assistant Context

## Project Overview
This workspace serves as the local interface for managing the **SGC Corvus** (Quality Management System) on Google Drive, based on **ISO 9001:2015**.

## Scope of the SGC (Alcance)
> "Servicio de soporte técnico del sistema de información informatizado AGDP, capacitación y post venta del mismo."

## Conceptual Diagnosis (Agent's Compass)
*   **Status:** Mature system (Rev 06/07), well-defined scope, honest auditing culture.
*   **Risks:** "Registration Fatigue", "Bureaucratic Risk Management", Disconnect between Strategy and Operation.
*   **Agent's Goal:** **SIMPLIFICATION** & **AGILITY**. Focus on Support scope only.

## Strategic Roadmap & Upcoming Changes

### 1. The AppSheet Initiative (High Priority)
*   **Goal:** Solve "Registration Fatigue" (NC #116, #121).
*   **Action:** Implementing AppSheet to speed up data entry for Support.
*   **Future Task:** Update **PG 05** and **RPG 05 01** to formalize AppSheet.

### 2. 2026 Objectives Strategy (The "Clean Scope" Directive)
*   **Focus:** Strictly aligned with the **Support/Post-Venta** sphere.
*   **Avoid:** Out-of-scope goals (e.g., pure software development, commercial sales outside support).
*   **Themes:** Operational Improvements (AppSheet consolidation) & Real-time Indicators.
*   **Why:** To ensure objectives are measurable, manageable, and strictly compliant with the SGC scope.

## Document & Record Map (Listado Maestro)

| Procedimiento (PG) | Registros Asociados (RPG / RC) |
| :--- | :--- |
| **MGC** (Manual de Calidad) | **RC 01** (FODA) |
| **PG 01** (Documentos) | **RPG 01 01** (Listado Maestro de Documentos) |
| **PG 02** (Dirección) | **RPG 02 01** (Obj. Estratégicos), **RPG 02 02** (Indicadores), **RPG 02 03** (Minutas), **RPG 02 04** (Encuestas), **RPG 02 06** (Control de Cambios) |
| **PG 03** (No Conformes) | **RPG 03 01** (Registro de NC y AC) |
| **PG 04** (Auditorías) | **RPG 04 01** (Programa), **RPG 04 02** (Informe) |
| **PG 05** (Post Venta) | **RPG 05 01** (Activ. Soporte), **RPG 05 02** (Instructivos), **RPG 05 03** (Repuestos), **RPG 05 04** (Envíos Clientes), **RPP 05 05 01** (Conectividades) |
| **PG 06** (RRHH) | **RPG 06 01** (Perfiles/Eval), **RPG 06 02** (Plan Cap), **RPG 06 03** (Reg Cap), **RPG 06 05** (Comunicación) |
| **PG 07** (Compras) | **RPG 07 01** (Eval. Proveedores) |
| **PG 08** (Infraestructura) | **RPG 08 01** (Inventario), **RPG 08 02** (Mantenimiento) |

## Current System Status (Active Focus)

#### Pending Non-Conformities (NCs Abiertas - Q4 2025)
*   **NC #131 (AppSheet Migration):** Documentación desactualizada por el nuevo flujo de AppSheet. (Prioridad Alta).
*   **NC #119 (Objetivos/Encuestas):** Sin analizar. Estrategia 2026 corrige esto.
*   **NC #123 (Indicadores Tiempo Real):** Vincular objetivos con macros/AppSheet.
*   **NC #125 (Partes Interesadas):** Completar acciones internas y agregar "Tolveros".
*   **NC #128 (Encuestas Capacitación):** Implementar encuesta post-capacitación.
*   **NC #130 (Instructivos):** Codificar y revisionar instructivos de clientes.

#### Recently Closed
*   **NC #118 (Riesgos/FODA):** Cerrada (Seguimiento completado el 27/12/25).
*   **NC #121 (Registros):** Cerrada (AppSheet en implementación).
*   **NC #124 (RRHH):** Cerrada (Perfiles actualizados).

### Critical Google Drive IDs
*   **Root Folder (SGC Corvus):** `1oHiwAsbOgzbdFvB093hOjM3aS8ZA1VlZ`
*   **NC Register (RPG 03 01):** `1QOJrJKMXYAQfQdtXeLseF2S7sAIUecGbNvxyRO7tgJg`
*   **Master List (RPG 01 01):** `17YuUd3VHcJlKZW4zAEyWULkr5AfC9ShE0x93L3j6L-c`
*   **FODA (RC 01):** `1UPYN3m3OMcOV5lVO-muEzGOWVU7sBeY1JSxeXlT6Wos`

## Technical Debt & Pending Updates (Legacy Documents)
*   **Status:** "Pendientes de Deprecación/Actualización" (Wait for AppSheet).
*   **Critical Items:**
    *   `PP 05 01`, `PP 05 02`, `PP 05 04` (Procedimientos Post Venta - Rev 2021).
    *   `RPG 05 02` (Listado de instructivos - Rev 2022).
    *   `RPG 02 02` (Objetivos e indicadores - Rev 2021).
    *   `RPG 06 05` (Registro comunicación - Rev 2022).

## Google Drive Working Logic (Pattern)
*   **PDF vs Editable:** Most procedures and records have a published PDF version in the main procedural folder.
*   **Editable Versions:** Always look for the Google Docs/Sheets counterpart in subfolders usually named `*Archivos Editables` or similar. **Never** edit or rely solely on the PDF if an editable version exists.

## Roles
*   **User:** SGC Manager.
*   **Agent (Gemini):** ISO 9001 Expert Assistant.
