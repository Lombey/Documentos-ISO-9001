# 🦅 SGC Corvus - ISO 9001:2015 Digital

**Proyecto de Transformación Digital y Gestión de Calidad**

Este repositorio es el espacio de trabajo local para la gestión documental y técnica del SGC.

---

## 🚦 Protocolo de Trabajo (Reglas de Oro)

### 1. Procedimientos (PG / PP / Manuales)

* **Flux:** `Local (.md)` ➡️ `PDF` ➡️ `Google Drive`.
* **Dónde se edita:** Aquí, en local (`/docs_editables`).
* **Despliegue:** El usuario (RSGC) revisa el Markdown local y, tras aprobarlo, genera el PDF para subirlo manualmente al Drive.
* **Rol de la IA:** Escribir, corregir y mejorar los `.md` locales siguiendo estrictamente el [Protocolo R-DOC-IA](./docs_editables/PG%2001/R-DOC-IA%20Reglas%20de%20Documentacion%20IA.md).

### 2. Registros (RPG / RC) - Bases de Datos

* **Flux:** `AppSheet` 🔄 `Google Drive (Sheets)`.
* **Fuente de Verdad:** **NUNCA** el archivo local. Siempre la Nube.
* **Advertencia Crítica:** Estos Google Sheets son el backend de AppSheet.
  * 🛑 **NO** cambiar nombres de columnas ni IDs sin consultar.
  * 🛑 **NO** agregar filas manualmente si la app ya está en producción (rompe fórmulas).
  * **Rol de la IA:** Leer IDs/Links y proponer cambios de estructura, pero **editar solo bajo pedido explícito**.

---

## 🔗 Mapa de Enlaces (Fuente de Verdad)

Para que el Agente IA pueda localizar rápidamente los recursos en la nube:

| Módulo / Registro | ID Documento | Enlace Directo (Google Drive) | Estado AppSheet |
| :--- | :--- | :--- | :--- |
| **RPG 01 01** - Listado Maestro | `DOC-MASTER` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/17YuUd3VHcJlKZW4zAEyWULkr5AfC9ShE0x93L3j6L-c/edit) | 🟢 Consultas |
| **RC 01** - FODA y Riesgos | `RISK-MATRIX` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/1UPYN3m3OMcOV5lVO-muEzGOWVU7sBeY1JSxeXlT6Wos/edit) | 🟢 Gestión Riesgos |
| **RPG 03 01** - No Conformidades | `NC-DB` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/1QOJrJKMXYAQfQdtXeLseF2S7sAIUecGbNvxyRO7tgJg/edit) | 🟡 En Desarrollo |
| **RPG 04 02** - Auditorías | `AUDIT-DB` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/13uA5Z9MIvkpWr-9uU0Aa40xQ6xbIngeg0lqsPfPFRDU/edit) | 🟢 Unificado |
| **RPG 06 01** - Perfiles Puesto | `HR-PROFILE` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/1Ft-pljYbck1HQLXCNMgm-qLzPTM93c0IygA5pIXEwnk/edit) | 🟢 Consulta |
| **RPG 06 06** - Capacitaciones | `TRAINING-DB` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/1f7wU-1QaOqIkNA0xJXzUqHa-Du7bjcMDiT6qcXl3jIA/edit) | 🟢 Unificado |
| **RPG 07 01** - Proveedores | `SUPPLIER-DB` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/134bLqdzPPXD5ovYBJhaoexX8A7YeA-d8csxGlV587ek/edit) | 🟢 Agenda |
| **RPG 02 06 (Master)** - Plan SGC | CHANGE-PLAN-SGC | [Abrir Doc](https://docs.google.com/document/d/1RFDxisHbicmKYGVRKIwee767vHWoixBWs8iHi5Fz5oE/edit) | 🟡 Maestro |
| **RPG 02 06 (Soporte)** - Plan Soporte | CHANGE-PLAN-SOP | [Abrir Doc](https://docs.google.com/document/d/1RFDxisHbicmKYGVRKIwee767vHWoixBWs8iHi5Fz5oE/edit) | 🟡 Derivado |
| **RPG 05 02** - Instructivos | `1_Ip9zMafpzxnKyTOuZ4EbRzAM1upqiqR8w0r4E0NP_U`| [Abrir Sheet](https://docs.google.com/spreadsheets/d/1_Ip9zMafpzxnKyTOuZ4EbRzAM1upqiqR8w0r4E0NP_U/edit) | 🟢 Soporte |
| **CRONOGRAMA** - Táctico 2026 | `CRONO-DB` | [Abrir Sheet](https://docs.google.com/spreadsheets/d/1pdjYjpG5xKidUxjdq8qPTSE41xhiFWLjRoOoBbkhJQg/edit) | 🟡 En AppSheet |

---

## 📅 Hitos Recientes (Enero 2026)

1. **Auditorías Unificadas:** Se depreca `RPG 04 01`. Todo vive en `RPG 04 02` (Planificación + Historial).
2. **Capacitación Integral:** Se deprecan `RPG 06 02` y `03`. Nace `RPG 06 06` para gestión 360°.
3. **Modernización RRHH:** Se divide `RPG 06 01` (Perfil Estático) de `RPG 06 07` (Evaluación Dinámica).
4. **Plan Maestro:** Se aprueba el `RPG 02 06 Plan Migracion SGC.md` como hoja de ruta principal y el `RPG 02 06 Plan Migracion Soporte.md` como sub-operación.

---

## 📂 Organización Local

* `/CRONOGRAMA_SGC_2026.md`: Tablero táctico de hitos.
* `/README.md`: Este archivo (Mapa de navegación).
