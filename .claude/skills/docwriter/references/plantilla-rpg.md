# Plantilla RPG - Registro de Procedimiento General

Copiar y completar los campos entre `[corchetes]`.

## Tipo A: RPG como Tabla/Listado

```markdown
---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "[DD/MM/YYYY]"
responsible: "RSGC"
iso_clause: "[X.X]"
audit_ready: false
tags: ["[tag1]", "[tag2]"]
ai_brief: "[Resumen de una línea]"
pending_actions: []
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# RPG [XX XX] - [Nombre del Registro]

| REGISTRO DE PROCEDIMIENTO | RPG [XX XX] |
| :--- | :--- |
| **[NOMBRE EN MAYÚSCULAS]** | **Rev. 01** |
| **Fecha de Emisión:** [DD/MM/YYYY] | **Responsable:** RSGC |

---

| [Col 1] | [Col 2] | [Col 3] | [Col 4] |
|:---|:---|:---|:---|
| | | | |

---
*Registro vinculado a Google Drive (ID: [ID_PENDIENTE])*
```

## Tipo B: RPG como Documento Descriptivo

```markdown
---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "[DD/MM/YYYY]"
responsible: "RSGC"
iso_clause: "[X.X]"
audit_ready: false
tags: ["[tag1]", "[tag2]"]
ai_brief: "[Resumen de una línea]"
pending_actions: []
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# RPG [XX XX] - [Nombre del Registro]

| REGISTRO DE PROCEDIMIENTO | RPG [XX XX] |
| :--- | :--- |
| **[NOMBRE EN MAYÚSCULAS]** | **Rev. 01** |
| **Fecha de Emisión:** [DD/MM/YYYY] | **Responsable:** RSGC |

---

## 1. PROPÓSITO

[Para qué sirve este registro]

## 2. CONTENIDO

[Descripción del contenido o estructura]

## 3. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| [DD/MM/YYYY] | 01 | Documento inicial | RSGC |
```

## Notas

- **Tipo A:** Para registros que son principalmente tablas de datos (listados, matrices)
- **Tipo B:** Para registros que requieren explicación o estructura documental
- **Versionado:** Solo subir Rev si cambia la ESTRUCTURA (columnas, campos), NO por datos
