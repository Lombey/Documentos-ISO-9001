---
google_drive_id: "ID_PENDIENTE"
revision: "02"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "8.5.1"
audit_ready: true
tags: ["cobranza", "conectividad", "agdp", "facturacion"]
ai_brief: "Procedimiento para la gestión de cobro de suscripciones de conectividad AGDP y registro en el sistema."
pending_actions: ["Automatizar avisos de deuda desde AppSheet"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PP 05 05 - Cobranza de Conectividades - Rev. 02

| PROCEDIMIENTO PARTICULAR | PP 05 05 |
| :--- | :--- |
| **COBRANZA DE CONECTIVIDADES** | **Rev. 02** |
| **Fecha Emisión:** 19/06/2025 | **Fecha Revisión:** 04/01/2026 |
| **Elabora:** Responsable de Post Venta | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Definir y establecer la metodología para asegurar la facturación de cobranza de las licencias anuales de los clientes activos.

## 2. ALCANCE

Servicio de cobranza de conectividades.

## 3. DEFINICIONES Y ABREVIATURAS

- **AppSheet:** CRM y Sistema de Gestión centralizado de la empresa.
- **Xubio:** Aplicación web para gestiones contables y facturación (ARCA).

## 4. RESPONSABILIDADES

El área de **Post Venta** es responsable de la ejecución del proceso. La Dirección supervisa casos de morosidad extrema.

## 5. DESARROLLO DEL PROCESO

<div style="text-align: center;">
    <img src="./Diagrama_conectividades.png" alt="Flujo de Conectividades" width="300" style="display: block; margin: 0 auto;">
</div>

### 5.1 Revisión mensual

La gestión operativa se realiza íntegramente en el módulo **"CONECTIVIDADES"** de AppSheet, el cual constituye el registro oficial **RPP 05 05 01**.

Al inicio de cada mes, se revisan los vencimientos en dicho módulo para asignar responsables de contacto.

### 5.2 Contacto y Negociación

El agente contacta al cliente vía WhatsApp/Teléfono informando el vencimiento y precios. Ante la aceptación, se procede a facturar.

### 5.3 Facturación (Xubio)

Se emite la factura desde **Xubio**. El agente debe registrar en AppSheet el estado como **FACTURADO**.

### 5.4 Verificación de Pago y Conciliación

El cliente envía el comprobante. El agente verifica el ingreso en la cuenta bancaria.
*Nota importante:* La conciliación entre AppSheet (gestión operativa) y Xubio (gestión contable) es **manual**. No existe sincronización automática de saldos; la validación la realiza el agente de soporte/adm.

### 5.5 Registro de Cobro

Una vez confirmado el ingreso, se cambia el estado en AppSheet a **COBRADO** y se asienta el pago en Xubio para dar por cerrado el ciclo contable.

### 5.6 Seguimiento de Deudores

Si pasados 3 días de la factura no hay pago, se sugiere realizar un segundo contacto. Ante la persistencia de la deuda (si no hay respuestaen más de una semana), el agente eleva el caso al Responsable del Área o a Dirección para definir el curso de acción:

- **Redefinición:** Si se aprueban nuevas condiciones, se reinicia el seguimiento de pago.
- **Baja:** Si no hay acuerdo, se procede a la suspensión inmediata del servicio.

### 5.7 Baja del servicio (Suspensión)

Ante la falta de pago o decisión de no renovar:

1. Se suspende el acceso al usuario y la tolva desde el panel de usuario administrador.
2. Se registra el estado como **SUSPENDIDO** en el módulo de Conectividades de AppSheet.
3. Se debe cambiar el estado a **"Baja"** en la columna **TIPO** del módulo **"Base de Datos Tolva"** en AppSheet para asegurar que el equipo no figure como activo en los listados operativos.
4. Fin del caso.

## 6. INDICADORES

Se monitorean vía Dashboard: Tasa de cobranza, Tiempo promedio de cobro y % de bajas.

## 7. REGISTROS ASOCIADOS

- RPP 05 05 01 Planilla de Conectividades (AppSheet).

## 8. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 19/06/2025 | 00 | Emisión inicial. | RSGC |
| 29/01/2026 | 01 | Incorporación de AppSheet y casos especiales. | RSGC |
| 04/01/2026 | 02 | Clarificación de interfaz con AppSheet (puntos 5.6 y 5.7). Actualización de diagrama: inclusión de baja operativa, mejora en lógica de deudores y unificación de términos con Xubio.| RSGC |
| 13/01/2026 | 03 | Estandarización de encabezados digitales y optimización de la trazabilidad normativa (Cláusula 7.5). | RSGC |
