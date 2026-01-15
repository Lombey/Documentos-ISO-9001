---
google_drive_id: "ID_EXTERNO_PENDIENTE"
revision: "00"
last_updated: "13/01/2026"
responsible: "RSGC"
---

<link rel="stylesheet" href="../reporte-estilo.css">

# PENDIENTES TÉCNICOS AGDP/SGC - 2026

Este documento lista las mejoras proyectadas para el ecosistema digital de Corvus.

| ID | Mejora / Automatización | Relación SGC | Estado |
| :--- | :--- | :--- | :--- |
| **M01** | **Alertas de Reincidencia (Repuestos y Envíos)** | RPG 05 03 / Recurrencia | **COMPLETADO** |
| **M05** | **Incorporación de BTH en Repuestos** | ISO 9001: 7.1.5.2 (Trazabilidad) | Pendiente (2026) |
| **M02** | **Acción "Enviar Encuesta" (Post-Cierre)** | RC 02 04 / Satisfacción Cliente | Pendiente |
| **M03** | **Workflow "Salud de Seguimiento"** | PG 05 (Audit post-envío) | Pendiente (Borrador) |

---

## Detalle M01: Alertas de Reincidencia Dinámica

**Estado:** Implementado (Rev 02 IT 01).
**Alcance:**

* **Repuestos:** Control por Cliente/Repuesto (30 días) con listado dinámico de BTHs afectados.
* **Envíos:** Control por Cliente (90 días) con fecha del último envío registrado.

## Detalle M05: Mejora de Trazabilidad (BTH en Repuestos)

**Propuesta:** Agregar la columna `BTH` a la tabla `Pedidos repuestos`.

* **Tipo:** Enum o Ref a la tabla de Equipos.
* **Carácter:** Opcional (para no bloquear la carga rápida si no se conoce).
* **Propósito:** Permitir una auditoría de fallas por equipo específico, cumpliendo con el requisito de trazabilidad de la norma ISO 9001.

---

## 7. HISTORIAL DE CAMBIOS (META-DOCUMENTO)

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 01 | 13/01/2026 | Emisión inicial. Centralización de registros de mejora técnica. Estandarización de encabezados digitales y trazabilidad normativa. | RSGC |
