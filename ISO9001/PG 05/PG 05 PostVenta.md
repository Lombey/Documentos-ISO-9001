---
google_drive_id: "ID_PENDIENTE"
revision: "11"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "8.5"
audit_ready: true
tags: ["soporte", "post-venta", "clientes", "agdp"]
ai_brief: "Procedimiento principal para la prestación de servicios de soporte técnico y post-venta del sistema AGDP."
pending_actions: ["Revisar flujo de repuestos AppSheet"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PG 05 - Post Venta - Rev. 11

| PROCEDIMIENTO | PG 05 |
| :--- | :--- |
| **POST VENTA (SOPORTE TÉCNICO)** | **Rev. 10** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 09/01/2026 |
| **Elabora:** Responsable de SGC | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Definir y establecer la metodología para asegurar que el proceso de servicio técnico se realice en conformidad con los requisitos establecidos por la empresa y el Sistema de Gestión de Calidad.

## 2. ALCANCE

Servicio de post venta (soporte).

## 3. RESPONSABILIDADES

El área de **Post Venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS

- **Post venta / Soporte:** Términos sinónimos para referirse al mismo sector.
- **AGDP:** Sistema WEB de Corvus AGDP.
- **DASHBOARD DE GESTIÓN:** Tablero de control en AppSheet para visualización de métricas.

## 5. DESARROLLO DEL PROCESO

Para el seguimiento, desarrollo y registro se utilizará **AppSheet**, lo que asegura mejor trazabilidad en tiempo real.

- El módulo de **SOPORTE (ACTIVOS)** hace interfaz con el **RPG 05 01**.
- El módulo de **Pedidos repuestos** hace interfaz con **RPG 05 03**.
- El módulo de **ENVÍOS HACIA CORVUS** hace interfaz con **RPG 05 04**.
- El módulo de **INSTRUCTIVOS DE SOPORTE** hace interfaz con **RPG 05 02**.
- El módulo de **CONECTIVIDADES** hace interfaz con **RPP 05 05 01**.

### 5.1 Diagrama de Flujo del Proceso de Post Venta

(Ver archivo adjunto de diagrama de procesos).

### 5.2 Recorrido del Proceso

Se recibe el contacto del cliente, se identifica el problema y se cataloga según el tipo de consulta.

#### 5.2.1 Consulta por Equipo

Se verifica estado administrativo, se diagnostica y se procede según corresponda (Repuestos, Envíos o Calibración).

#### 5.2.2 Consulta por AGDP

Se instruye al cliente o se escalan desvíos de plataforma si son críticos.

### 5.3 Instructivos de Soporte

Se utilizan los instructivos listados en AppSheet según el registro de actividad.

### 5.4 Control de Resultado y No Conformidades

Verificación de eficacia y monitoreo de inactividad por Apps Script.

### 5.5 Metodología de Registro y Comunicación en AppSheet

Para garantizar la calidad de la información (ISO 9001 8.5.1), el registro se rige por:

- **Estandarización de Estados (Acciones):** El agente utilizará los botones de acción para actualizar el ciclo de vida del caso (ej: "Recibido en Depósito", "Enviado a Cliente", "Cerrar Caso"). Estas acciones garantizan la captura automática del tiempo y estado sin error humano.
- **Comunicación Profesional (Easy Share):** La plataforma provee opciones de envío rápido mediante WhatsApp. El agente debe utilizar estos mensajes pre-formateados para compartir guías de envío, facturas e instructivos, garantizando que el cliente reciba la información de manera inmediata y estandarizada.
- **Fechas Automáticas:** Captura inviolable mediante timestamps del sistema.
- **Carga de Datos Obligatoria:** Análisis de Causa y Acción Correctiva disparan advertencias visuales (⚠️) si se omiten.
- **Alerta de Reincidencia:** Obliga a profundizar el soporte si el equipo reingresa en < 7 días.
- **Comentarios:** El campo es opcional para aclaraciones que no quepan en los campos técnicos obligatorios.

## 6. HORARIOS DE SOPORTE y GUARDIAS

Hábiles 9:00 a 19:30 hs. Sábados: 10:00 a 16:00 hs.

## 7. SATISFACCIÓN DEL CLIENTE

Encuestas voluntarias mediante link rápido de Google Forms.

## 8. REPORTES E INDICADORES (TEMPORADA)

Análisis basado en Dashboard de Gestión: Tiempo de respuesta (SLA), logística de repuestos y salud de seguimiento.

## 9. DOCUMENTOS DE REFERENCIA

| Código | Nombre |
| :--- | :--- |
| IT 01 | Manual Técnico de Administración AppSheet |
| IT 02 | Biblioteca de Fórmulas y KPIs AppSheet |
| IT 03 | Manual de Alertas y Notificaciones Automáticas |

## 10. REGISTROS ASOCIADOS

| Código | Nombre |
| :--- | :--- |
| RPG 05 01 | Registro de Actividades de Soporte |
| RPG 05 02 | Listado de Instructivos de Soporte |
| RPG 05 03 | Pedido de Repuestos |
| RPG 05 04 | Envío de Clientes hacia Corvus |
| RPP 05 05 01 | Conectividades |

## 11. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | RSGC |
| 03/01/2026 | 08 | Reportes basados en Dashboard AppSheet. Integración de indicadores tácticos. | RSGC |
| 09/01/2026 | 09 | Formalización de flujo de carga y comunicación: registro inmediato, integridad por timestamps, advertencias técnicas, botones de acción automatizados y links Easy Share. | RSGC |
| 12/01/2026 | 10 | Vinculación de Manuales Técnicos (IT 01-03) como soporte de infraestructura AppSheet. | RSGC |
| 13/01/2026 | 11 | Estandarización de encabezados digitales y optimización de la trazabilidad normativa (Cláusula 7.5). | RSGC |
