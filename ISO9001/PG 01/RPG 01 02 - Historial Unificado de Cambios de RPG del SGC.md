---
google_drive_id: "1x8kHITvvHgn1FZKligJeLDhJ7GZaMuGrd-DTeNKRXyY"
revision: "00"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.5.3.2"
audit_ready: true
tags: ["historial", "trazabilidad", "control-de-cambios", "sgc"]
ai_brief: "Registro unificado de trazabilidad para todos los cambios realizados sobre documentos y registros digitales del SGC."
pending_actions: ["Crear Spreadsheet", "Vincular AppSheet"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# RPG 01 02 - Historial Unificado de Cambios de RPG del SGC - Rev. 00

| REGISTRO DE PROCEDIMIENTO | RPG 01 02 |
| :--- | :--- |
| **HISTORIAL UNIFICADO DE CAMBIOS DE RPG DEL SGC** | **Rev. 00** |
| **Fecha de Emisión:** 13/01/2026 | **Responsable:** RSGC |

---

## 1. OBJETIVO

Centralizar en una única base de datos la trazabilidad de las **modificaciones estructurales y cambios de versión** realizados sobre los documentos, planillas y la aplicación AppSheet.

Este registro controla la evolución del **"Continente"** (Estructura, Columnas, Lógica, Vistas), asegurando que el diseño del SGC se mantenga íntegro.

> **Nota:** Las modificaciones de **"Contenido"** (Carga diaria de datos, altas y bajas de registros operativos) no generan cambio de revisión y su trazabilidad queda resguardada automáticamente por los logs internos de la plataforma y los timestamps de cada registro.

## 2. ESTRUCTURA DE DATOS (CAMPOS)

| Columna | Tipo de Dato | Descripción |
| :--- | :--- | :--- |
| **ID** | Text (Key) | Identificador único del evento (`UNIQUEID()`). |
| **Documento** | Text | Código del documento o tabla afectada (ej: `RPG 03 01`). |
| **Fecha** | Date | Fecha del cambio estructural. |
| **Rev.** | Text | Número de revisión resultante. |
| **Descripcion** | Text | Detalle del cambio (ej: "Se agregó columna Estado", "Se modificó fórmula de cálculo"). |
| **Responsable** | Text | Quien autoriza el cambio (ej: RSGC). |
| **Elabora** | Text | Quien ejecuta el cambio técnico. |
| **Revisa y Aprueba** | Text | Quien valida la nueva estructura. |

### 3. HISTORIAL DE CAMBIOS DEL DOCUMENTO

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 13/01/2026 | 00 | Creación del documento para formalizar el Historial Unificado de Revisiones. | RSGC |
