---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.5, 8.5.1"
audit_ready: true
tags: ["registro", "soporte", "appsheet", "instructivo"]
ai_brief: "Instructivo para la carga correcta de actividades de soporte en la aplicación AppSheet operative."
pending_actions: ["Validar campos obligatorios de cierre de ticket"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PP 05 03 - Utilización del Registro de Actividades de Soporte - Rev. 01

| PROCEDIMIENTO PARTICULAR | PP 05 03 |
| :--- | :--- |
| **USO REGISTRO SOPORTE** | **Rev. 01** |
| **Fecha Emisión:** 23/11/2022 | **Fecha Revisión:** 04/01/2026 |
| **Elabora:** Responsable de Soporte | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Describir la planilla de registro de actividades de soporte (RPG 05 01), la metodología para su utilización y los permisos de acceso.

## 2. ALCANCE

Servicio de post venta.

## 3. RESPONSABILIDADES

El área de **Post venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS

*(No aplica)*

## 5. DESARROLLO DEL PROCESO

### 5.1 Planilla de Soporte (RPG 05 01)

Se utiliza una planilla con menús desplegables y fórmulas para automatizar el registro.

#### 5.1.1 Descripción de Columnas

- **Estado:** Menú con estados posibles (Finalizado, Pendiente, etc.).
- **Motivo:** Motivo de la comunicación del cliente.
- **Código Equipo:** Al seleccionar el equipo, se asocia automáticamente el usuario y el ID de TeamViewer.
- **Usuario:** Cliente asociado.
- **Teamviewer:** Código de conexión (automático).
- **Problema / Análisis de causas / Acción Correctiva:** Menús desplegables interrelacionados.
- **Comentarios:** Información adicional.
- **Agente:** Persona que tomó el caso.
- **Fecha de apertura / cierre:** Se capturan automáticamente según el cambio de estado.

#### 5.1.2 Metodología de Uso

La planilla la completa el agente que toma el caso. Se deben completar los campos obligatorios (*).

1. Seleccionar el tipo de caso en la fila 1 (celda E1).
2. Seleccionar las opciones de **Problema**, **Motivo**, **Diagnóstico** y **Solución** en las celdas de ayuda de la fila 1.
3. Copiar y pegar los valores en la fila del caso correspondiente.

**Opciones de Estado:**

- **Finalizado:** Caso resuelto y cerrado.
- **Pendiente / En proceso:** Requiere seguimiento.
- **Pendiente de respuesta (Desarrollo/Comercial):** Esperando acción de otra área.

### 5.2 Tablas de Soporte

Detallan las relaciones lógicas entre motivos, diagnósticos y acciones. Solo pueden ser modificadas por el Encargado de Soporte para mejorar la representación de los casos.

### 5.3 Solapa Auxiliares

Contiene las tablas para los menús desplegables y fórmulas. Solo se modifican por el Encargado de Soporte si hay errores en las fórmulas o para actualizar la lista de agentes/estados.

### 5.4 Gráficas y Análisis de Datos

Se confeccionan al final de cada temporada. No tienen un formato fijo, adaptándose a las necesidades de análisis del momento. El Responsable de Soporte puede utilizar herramientas externas para generar estos reportes.

## 6. REGISTROS ASOCIADOS

| Código | Nombre |
| --- | --- |
| RPG 05 01 | Registro de actividades de soporte |

## 7. HISTORIAL DE CAMBIOS

| Fecha | Revisión | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | RSGC |
| 23/11/2022 | 01 | Adecuación de imágenes y descripciones para RPG 05 01 Rev 02. | RSGC |
| 13/01/2026 | 02 | Corrección de formato de encabezados. | RSGC |
