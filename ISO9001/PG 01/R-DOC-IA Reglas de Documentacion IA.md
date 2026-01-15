---
google_drive_id: "PENDIENTE"
revision: "00"
last_updated: "13/01/2026"
responsible: "RSGC"
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# REGLAS DE DOCUMENTACIÓN PARA IA

| REGLA DE PROCESO | R-DOC-IA |
| :--- | :--- |
| **PROTOCOLO DE GESTIÓN DOCUMENTAL ASISTIDA POR IA** | **Rev. 00** |
| **Fecha de Emisión:** 13/01/2026 | **Responsable:** RSGC |

---

## 1. OBJETIVO

Establecer las directrices obligatorias para la creación, modificación y mantenimiento de la información documentada del SGC Corvus realizada por agentes de IA, garantizando la trazabilidad ISO 9001:2015.

## 2. ESTRUCTURA Y NOMENCLATURA

La IA debe clasificar y nombrar cada archivo según los siguientes estándares:

### 2.1 Tipografía de Documentos

| Código | Tipo | Uso Principal |
| :--- | :--- | :--- |
| **MGC** | Manual de Calidad | Política, alcance y bases del SGC. |
| **PG** | Procedimiento General | Procesos que cruzan varios departamentos. |
| **PP** | Procedimiento Particular | Instrucciones específicas de una tarea crítica. |
| **RPG** | Registro de PG | Formularios y evidencias de procesos generales. |
| **RPP** | Registro de PP | Evidencias de procesos específicos. |
| **RC** | Registro Complementario | Documentos de apoyo (FODA, Listados, etc.). |
| **IT** | Instructivo Técnico | Guías de uso de software o herramientas (ej: AppSheet). |

### 2.2 Nomenclatura de Archivos

Formato: `Tipo_ID_Nombre_Documento.md`

* *Ejemplo:* `PG_01_Control_Docs.md` o `RPG_01_01_Listado_Maestro.md`.
* **Nota:** Evitar espacios en nombres de archivos si es posible (usar guiones bajos).

### 2.3 Estructura Técnica (YAML Frontmatter)

Todo archivo `.md` debe iniciar obligatoriamente con este bloque:

```yaml
---
google_drive_id: "ID_DEL_DOCUMENTO"
revision: "XX"
last_updated: "DD/MM/YYYY"
responsible: "RSGC"
iso_clause: "X.X"           # Cláusula de ISO 9001:2015 vinculada
audit_ready: true/false     # Estado de revisión para auditoría
tags: ["t1", "t2"]         # Etiquetas para búsqueda contextual
ai_brief: "Contexto"       # Resumen para la memoria de la IA
### 2.4 Mapa de Rutas (Ubicación Física)

Cada documento debe residir en su carpeta temática según la estructura del SGC:

| Ámbito / Proceso | Carpeta Raíz (desde `/docs_editables`) | Documentos Incluidos |
| :--- | :--- | :--- |
| **Manual de Calidad** | `/Manual de Calidad/` | MGC, Organigramas. |
| **Control Docs (PG 01)** | `/PG 01/` | PG 01, RPG 01, Reglas IA (RC). |
| **Dirección (PG 02)** | `/PG 02/` | PG 02, RC 01 (FODA), RPG 02. |
| **No Conformes (PG 03)** | `/PG 03/` | PG 03, RPG 03. |
| **Auditorías (PG 04)** | `/PG 04/` | PG 04, RPG 04. |
| **Post Venta (PG 05)** | `/PG 05/` | PG 05, PP 05 (Particulares), RPG 05. |
| **Soporte Técnico (IT)** | `/PG 05/Manuales Técnicos/` | IT (Instructivos Técnicos). |
| **RRHH (PG 06)** | `/PG 06/` | PG 06, RPG 06. |
| **Compras (PG 07)** | `/PG 07/` | PG 07, RPG 07. |
| **Infraestructura (PG 08)** | `/PG 08/` | PG 08, RPG 08. |

---

## 3. PROTOCOLO DE REVISIÓN E HISTORIAL DE CAMBIOS

Este protocolo garantiza la trazabilidad evolutiva del documento. Se compone de dos reglas maestras:

### 3.1 Lógica de Incremento (¿Cuándo cambia la Rev.?)

* **Incremento (+1):** Solo cuando hay cambios **sustanciales** en el proceso, estructura del documento o por solicitud del usuario.
* **Mantenimiento (Misma Rev.):** Cambios menores, correcciones ortográficas o ampliaciones de descripciones que no alteran el flujo operativo.
* **Registros (RPG):** La carga de datos operativos NO implica cambio de revisión. Solo se aumenta la versión de un RPG si se modifica su estructura, columnas o fórmulas.

### 3.2 Registro Diario (¿Cómo se escribe?)

* **Ubicación:** Siempre al final del documento.
* **Regla de Oro:** Solo se permite **UNA (1) línea por cada día de trabajo**.
* **Ediciones Múltiples:** Si se realizan varios cambios en un mismo día, se debe editar la línea existente para esa fecha, concatenando las actividades en la columna "Descripción" separadas por punto y coma (`;`).

**Ejemplo Visual para IA:**

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 13/01/2026 | 00 | Cambio A; Cambio B (Día 1) | RSGC |
| 14/01/2026 | 01 | Cambio C (Día 2 - Cambio Sustancial) | RSGC |

---

## 4. RESTRICCIONES Y SEGURIDAD

* **Nomenclatura:** No renombrar archivos ni carpetas sin aprobación.
* **Nuevos Documentos:** Proponer código basado en el Listado Maestro (PG 01) antes de crear el archivo.
* **Dudas:** Ante cualquier ambigüedad técnica o de proceso, el agente debe detenerse y consultar al usuario.

---

## 6. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 13/01/2026 | 00 | Emisión inicial del protocolo de documentación para agentes IA; Ampliación del esquema YAML con metadatos enriquecidos (Tags, ISO Mapping, Brief). | RSGC |
