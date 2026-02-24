---
google_drive_id: "ID_PENDIENTE"
revision: "04"
last_updated: "24/02/2026"
responsible: "RSGC"
iso_clause: "7.1.3"
audit_ready: true
tags: ["infraestructura", "mantenimiento", "equipos", "hardware"]
ai_brief: "Procedimiento para el mantenimiento de equipos, servidores e infraestructura necesaria para el soporte."
pending_actions: ["Inventario de dispositivos móviles 2026"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PG 08 - Mantenimiento de Infraestructura - Rev. 04

| PROCEDIMIENTO | PG 08 |
| :--- | :--- |
| **INFRAESTRUCTURA** | **Rev. 04** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 24/02/2026 |
| **Elabora:** Responsable de SGC | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Definir la metodología para la gestión, mantenimiento y control de la infraestructura necesaria para la operación de Corvus, con el fin de asegurar la continuidad del servicio de soporte y la integridad de la información del SGC.

## 2. ALCANCE

Activos físicos (PCs, Laptops, Mobile, Tablets de prueba) y servicios de software/nube afectados al alcance del SGC.

## 3. RESPONSABILIDADES

- **Responsable del SGC:** Asegurar la actualización del inventario y el cumplimiento de este procedimiento.
- **Personal de Soporte:** Cuidar los activos asignados y reportar cualquier falla de hardware o software que impida el normal desempeño de sus tareas.

## 4. DEFINICIONES

- **MANTENIMIENTO CORRECTIVO:** Actividades realizadas tras la detección de una falla para devolver al activo a su estado operativo.
- **INFRAESTRUCTURA DIGITAL:** Servicios de hosting, nubes y herramientas de software críticas para la operación.

## 5. DESARROLLO DEL PROCESO

### 5.1 Registro y Control de Inventario

La empresa mantiene un inventario actualizado a través del **Módulo de Inventario (AppSheet)**, cuya base de datos subyacente es el **RPG 08 01**. El registro incluye:

- Identificación del activo (Marca/Modelo/Serie/IMEI).
- Usuario asignado responsable.
- Estado operativo (Activo/En reparación/Baja).

El inventario se revisa íntegramente de forma anual según el cronograma táctico.

### 5.2 Metodología de Mantenimiento

Dada la naturaleza de la actividad, la mayoría de los activos están sujetos a **Mantenimiento Correctivo**:

1. **Detección:** El usuario identifica una falla en su herramienta de trabajo o en un servicio digital.
2. **Acción:** Se procede a la reparación, actualización de software o reemplazo del equipo.
3. **Registro:** El evento de mantenimiento se asienta en el **RPG 08 02** (o bitácora digital del equipo), indicando la fecha, el activo afectado y la acción realizada.

**Nota:** El registro de fallas en servicios digitales (ej: caídas de software, nubes, conectividad) en el RPG 08 02 sirve como evidencia objetiva para el puntaje de "Disponibilidad" en la evaluación anual de proveedores (según PG 07).

### 5.3 Disponibilidad de Servicios Críticos

Para asegurar que el soporte no se vea afectado por fallas de infraestructura externa, se mantienen redundancias y canales de contacto con proveedores críticos (gestionados según PG 07). La caída de un servicio crítico que afecte la operación sistemática debe ser tratada como una No Conformidad según PG 03.

---

## 6. REGISTROS ASOCIADOS

| Código | Nombre |
| --- | --- |
| RPG 08 01 | Inventario |
| RPG 08 02 | Registro de Mantenimiento |
| AppSheet | Módulo de Gestión de Inventario |

---

## 7. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 09/08/2021 | 00 | Emisión inicial. | RSGC |
| 09/10/2024 | 01 | Actualización de logos. | RSGC |
| 03/01/2026 | 02 | Digitalización: Integración del inventario con la lógica de AppSheet y definición de infraestructura digital. | RSGC |
| 13/01/2026 | 03 | Corrección de formato de encabezados. | RSGC |
| 24/02/2026 | 04 | Clarificación relación AppSheet/RPG 08 01 en sección 5.1: AppSheet es el frontend, RPG 08 01 es la base de datos subyacente. | RSGC |
