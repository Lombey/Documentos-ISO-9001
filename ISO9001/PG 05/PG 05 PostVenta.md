---
google_drive_id: "ID_PENDIENTE"
revision: "10"
last_updated: "24/02/2026"
responsible: "RSGC"
iso_clause: "8.5"
audit_ready: true
tags: ["soporte", "post-venta", "clientes", "agdp"]
ai_brief: "Procedimiento principal para la prestación de servicios de soporte técnico y post-venta del sistema AGDP."
pending_actions: []
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PG 05 - Post Venta - Rev. 10

| PROCEDIMIENTO | PG 05 |
| :--- | :--- |
| **POST VENTA (SOPORTE TÉCNICO)** | **Rev. 10** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 24/02/2026 |
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
- **DASHBOARD DE GESTIÓN:** Tablero de control en AppSheet para visualización de métricas y reportes de temporada.

## 5. DESARROLLO DEL PROCESO

Para el seguimiento, desarrollo y registro se utilizará **AppSheet**, lo que asegura mejor trazabilidad en tiempo real.

- El módulo de **SOPORTE (ACTIVOS)** hace interfaz con el **RPG 05 01** Registro actividades de soporte.
- El módulo de **Pedidos repuestos** hace interfaz con **RPG 05 03** Pedido de Repuestos.
- El módulo de **ENVÍOS HACIA CORVUS** hace interfaz con **RPG 05 04** Envío de Clientes hacia Corvus.
- El módulo de **INSTRUCTIVOS DE SOPORTE** hace interfaz con **RPG 05 02** - Listado de instructivos de soporte.
- El módulo de **CONECTIVIDADES** hace interfaz con **RPP 05 05 01** - Planilla de Conectividades.

### 5.1 Diagrama de Flujo del Proceso de Post Venta

![Diagrama de Flujo del Proceso de Post Venta](Auxiliar%20-%20PG%2005%20Diagrama%20de%20Procesos.jpg)

### 5.2 Recorrido del Proceso

El servicio de soporte técnico recibe el contacto del cliente por los canales disponibles (WhatsApp, Teléfono, etc.). Se identifica al cliente y el tipo de consulta (Equipo o AGDP).

**Identificación y Estado Administrativo:** Se verifica en AppSheet si el cliente se encuentra en estado “Activo”. Se aclara que la App no realiza la conciliación automática de deudas; dicho control y la decisión de suspender el soporte por falta de pago es un proceso administrativo manual externo a la App.

Los clientes dados de baja no figuran en la vista **BASE DE DATOS (TÉCNICO)** sino en la vista **BAJA CLIENTES** del módulo Base de Datos Tolva. Su campo **TIPO** es **”Baja”**. Se puede consultar dicha vista para corroborar la baja en caso de duda o falta de certeza.

#### 5.2.1 Consulta por Equipo

**Relevamiento y Diagnóstico:** Se realiza el diagnóstico utilizando herramientas detalladas en el *PP 05 01*.

- **Resolución directa (caso común):** Si el problema se resuelve durante el contacto, el agente registra el caso en el módulo **SOPORTE (ACTIVOS)** completando la estructura tabulada en cascada: **Problema → Análisis de Causas → Acción Correctiva**. Cada nivel filtra las opciones del siguiente, asegurando un registro estandarizado y trazable. El caso se cierra al finalizar la resolución.

- **Elemento ajeno:** Si el problema no es de Corvus, se recomienda contactar al técnico especializado correspondiente.
- **Descalibración:** Se sigue el *PP 05 04 Calibración de Equipos*.
- **Repuestos:** Si se requiere un repuesto, se registra en el módulo de *PEDIDO DE REPUESTOS* de AppSheet.
- **Envíos hacia Corvus:** Si el cliente debe enviar un equipo, se registra en el módulo de *ENVÍOS HACIA CORVUS* de AppSheet.

**Políticas de Gestión:**

- **Propiedad de cliente:** La empresa se responsabiliza de los equipos mientras estén en su poder (desde la recepción hasta el despacho). Corvus no asume responsabilidad por daños ocurridos durante el tránsito, tanto en envíos del cliente hacia Corvus como en envíos de Corvus hacia el cliente. Los costos de flete corren por cuenta del cliente. Esta política se comunica al cliente mediante las **Respuestas Rápidas de WhatsApp** antes de coordinar el envío.
- **Garantía:** Tablets (1 año, excepto panel táctil), Cámaras (6 meses). La garantía cubre exclusivamente **defectos de fabricación** bajo condiciones normales de uso. Quedan excluidos los daños ocasionados por mal uso, golpes, caídas, roturas físicas o cualquier deterioro atribuible al manejo del cliente.

  **Activación de garantía:** El cliente debe proveer evidencia (imágenes o videos) para iniciar la evaluación. El agente de Soporte analiza dicha evidencia de forma remota:
  - Si la evidencia es suficiente para confirmar un defecto de fabricación, se procede a la activación de la garantía (reposición del componente o envío de repuesto).
  - Si la evidencia remota no es concluyente, el equipo debe ser enviado a Depósito para verificación técnica presencial, que determinará si corresponde o no la aplicación de garantía.
  - Si la evaluación (remota o presencial) determina que el daño no corresponde a un defecto de fabricación, el Responsable del área comunica al cliente que el equipo está **fuera de garantía** y que la reposición o reparación tiene costos asociados.
- **Cierre del caso:** Se considera cerrado cuando los comprobantes de envío han sido transmitidos al cliente o área correspondiente.

#### 5.2.2 Consulta por AGDP

1. **Relevamiento:** Identificación del cliente y diagnóstico de la situación.

2. **Acciones:**
   - **Instrucción:** Si es una duda de uso, se instruye al cliente (ver 5.3).
   - **Desvío de plataforma:** Si es un error del sistema, el agente busca una solución inmediata. Si la falla es crítica y afecta la integridad del servicio, se debe proceder a la apertura de una No Conformidad según *PG 03*.

3. **Registro:** El caso se registra en el módulo **SOPORTE (ACTIVOS)** siguiendo la misma estructura en cascada: **Problema → Análisis de Causas → Acción Correctiva**.

#### 5.2.3 Procesos administrativos

- **Cobranza de conectividades (PP 05 05):** La gestión de licencias se apoya en los datos de AppSheet, pero la conciliación final con Xubio es manual.
- **Nuevos equipos (PP 05 06):** Configuración e instrucción de equipos provenientes de concesionarios.

### 5.3 Instructivos de Soporte

Se utilizan los instructivos listados en el módulo correspondiente de AppSheet. En el registro de actividad, se prioriza documentar la **acción de mayor jerarquía o impacto** realizada (ej: si se envió un video pero luego se realizó una asistencia remota para calibrar, el registro final debe reflejar el soporte de calibración).

### 5.4 Control de Resultado y No Conformidades

Se verifica la eficacia de la acción correctiva. La resolución se considera eficaz cuando:

- El cliente confirma que el problema fue resuelto, o
- El equipo no reincide dentro de los 7 días posteriores al cierre (controlado por la alerta de reincidencia del sistema).

Opcionalmente, el agente puede realizar un seguimiento adicional para confirmar que todo quedó en orden.

Ante fallas que se consideren críticas o recurrentes, el Responsable del área debe abrir una No Conformidad en el registro *RPG 03 01* (vía AppSheet o procedimiento manual según corresponda) para su tratamiento y análisis de causa raíz.

### 5.5 Metodología de Registro en AppSheet

Para garantizar la trazabilidad del servicio (ISO 9001, cláusula 8.5.1), **toda carga de datos opera exclusivamente a través de AppSheet**. Los códigos RPG referenciados corresponden a las planillas Google Sheets que actúan como base de datos subyacente; no se editan directamente.

#### 5.5.1 Módulo SOPORTE (ACTIVOS) — RPG 05 01

Ciclo de vida del caso:

1. **Apertura:** El agente abre el caso con "NUEVO" e ingresa los datos del cliente y la consulta.
2. **Seguimiento:** Se actualiza el estado mediante los botones de acción disponibles. Cada acción registra automáticamente fecha y hora mediante timestamps del sistema.
3. **Registro de resolución:** Se documenta la **acción definitiva de mayor impacto** que resolvió el caso.
4. **Cierre:** El caso se cierra con "CERRAR CASO".

Controles de integridad:

- **Campos obligatorios:** El sistema emite advertencias visuales (⚠️) si los campos de Análisis de Causa y Acción Correctiva son omitidos.
- **Alerta de reincidencia:** El sistema alerta si el mismo equipo reingresa dentro de los 7 días, obligando al agente a profundizar el diagnóstico.
- **Comunicación estandarizada (Easy Share):** Para compartir guías de envío, facturas e instructivos, se utilizan los mensajes pre-formateados de WhatsApp de la plataforma.

Ver detalle operativo en *PP 05 03*.

#### 5.5.2 Módulo PEDIDO DE REPUESTOS — RPG 05 03

Cuando el diagnóstico determina que se requiere un repuesto:

1. El agente registra el pedido. Estado resultante: **SOLICITADO**.
2. El área de Depósito despacha el repuesto, carga la guía de envío y cambia el estado a **ENVIADO A CLIENTE**. Esta etapa queda fuera del alcance del SGC, pero se registra en el sistema para trazabilidad completa.
3. **Cierre:** Soporte comparte la guía de envío con el cliente (vía Easy Share), comunicándole que el repuesto fue despachado y que debe retirarlo al momento de la entrega. Este acto constituye el cierre formal del caso.

#### 5.5.3 Módulo ENVÍOS HACIA CORVUS — RPG 05 04

Cuando el cliente debe remitir un equipo para revisión técnica:

1. El agente registra el envío. Estado resultante: **PENDIENTE DE RECEPCIÓN**.
2. El área de Depósito recepciona el equipo (**RECEPCIONADO**), realiza la revisión técnica, y al despacharlo de regreso carga la guía de envío y cambia el estado a **ENVIADO A CLIENTE**. Estas etapas quedan fuera del alcance del SGC, pero se registran en el sistema para trazabilidad completa.
3. **Cierre:** Soporte comparte la guía de envío con el cliente (vía Easy Share), comunicándole que el equipo fue despachado y que debe retirarlo al momento de la entrega. Este acto constituye el cierre formal del caso.

## 6. HORARIOS DE SOPORTE Y GUARDIAS

- **Hábiles:** 9:00 a 19:30 hs. Sábados: 10:00 a 16:00 hs.
- **Feriados:** Soporte activo como día hábil.
- **Guardias:** Rotativas los sábados, coordinadas vía Calendar. Los horarios están visibles para el cliente en el perfil de WhatsApp de soporte.

## 7. SATISFACCIÓN DEL CLIENTE

La medición de satisfacción se realiza mediante una encuesta de **Google Forms**. El enlace se comparte con el cliente a través de AppSheet en los siguientes momentos:

- Al cerrar un caso, desde la pantalla de **SOPORTE (ACTIVOS)** mediante el enlace de compartir disponible en la actividad.
- Al compartir una guía de envío de repuesto desde la pantalla de **PEDIDO DE REPUESTOS**, si la guía se distribuye por ese canal.

Los resultados son revisados por el Responsable del área según la periodicidad acordada con Dirección.

## 8. REPORTES E INDICADORES (TEMPORADA)

Al finalizar cada temporada de trabajo (Cosecha/Siembra), el Responsable del área realiza un análisis de gestión a partir de los datos del **Dashboard de Gestión de AppSheet**. Los indicadores y métricas disponibles en el tablero constituyen la fuente de información para dicho análisis.

| Indicador | Descripción |
| :--- | :--- |
| **Promedio Despacho Mensual** | Tiempo promedio (en días) entre la solicitud y el despacho de repuestos enviados en el mes en curso. |
| **Promedio Despacho Anual** | Tiempo promedio (en días) entre la solicitud y el despacho de repuestos enviados en el año en curso. |
| **Promedio Resolución Mensual** | Tiempo promedio (en días) entre apertura y cierre de casos resueltos en el mes en curso. |
| **Promedio Resolución Anual** | Tiempo promedio (en días) entre apertura y cierre de casos resueltos en el año en curso. |
| **Promedio Satisfacción del Cliente** | Puntaje promedio de satisfacción obtenido en las encuestas del año en curso, basado en la valoración del servicio recibido. |
| **Índice Reincidencia Mensual** | Proporción de casos abiertos en el mes que corresponden a una reincidencia dentro de los 7 días del cierre anterior. Mide la tasa de resoluciones no efectivas. |
| **Índice Hardware Crítico** | Proporción de casos por equipo del año en curso clasificados como falla de hardware crítica. Indica la tasa de fallas graves en el parque instalado. |
| **Promedio Efectividad Instructivos Mensual** | Proporción de casos resueltos mediante instructivos o información en el mes que no generaron recontacto en los 15 días siguientes. Mide la efectividad de los materiales de apoyo. |
| **Promedio Efectividad Asistencia Anual** | Proporción de casos resueltos mediante asistencia con instructivos o información en el año en curso que no generaron recontacto en los 15 días siguientes. Versión anual del indicador de efectividad. |
| **Promedio Efectividad Capacitación Mensual** | Proporción de casos cuyo problema involucra capacitación en el mes en curso que no generaron recontacto en los 15 días siguientes. Mide si la instrucción al cliente resolvió la duda de forma duradera. |
| **Promedio Eficacia Capacitación Anual** | Ídem, acumulado para el año en curso. |

## 9. REGISTROS ASOCIADOS

| Código | Nombre |
| :--- | :--- |
| RPG 05 01 | Registro actividades de soporte |
| RPG 05 02 | Listado de instructivos de soporte |
| RPG 05 03 | Pedido de Repuestos |
| RPG 05 04 | Envío de Clientes hacia Corvus |
| RPP 05 05 01 | Planilla de Conectividades |

## 10. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 09/08/2021 | 00 | Documento inicial. | RSGC |
| 06/12/2021 | 01 | Agrega punto 5.3 / Corrección 5.2. | RSGC |
| 08/11/2022 | 02 | Actualización de software. | RSGC |
| 12/09/2023 | 03 | Diagrama de procesos y reestructuración punto 5. Horarios. | RSGC |
| 19/09/2023 | 04 | Cambios al horario. | RSGC |
| 07/10/2024 | 05 | Adecuación 5.2.1.3 e incorporación de RPG 05 03 y 05 04. | RSGC |
| 28/10/2024 | 06 | Actualización de políticas de propiedad de cliente. | RSGC |
| 03/01/2026 | 07 | Migración integral a AppSheet. | RSGC |
| 10/01/2026 | 08 | Ajuste de procesos: Reportes basados en Dashboard AppSheet. Clarificación de consulta manual de deudas. Registro por "acción de mayor jerarquía". Vínculo de fallas críticas con PG 03. | RSGC |
| 23/02/2026 | 09 | Reestructuración sección 5.5 por módulo AppSheet (ciclo de vida, controles de integridad, cierre formal); ampliación políticas de garantía y propiedad del cliente; incorporación resolución directa en 5.2.1; registro AGDP en SOPORTE (ACTIVOS); criterios de eficacia en 5.4; encuesta de satisfacción en sección 7; adecuación sección 8 referenciando Dashboard AppSheet como fuente de KPIs. | RSGC |
| 24/02/2026 | 10 | Documentación de los 10 indicadores reales del Dashboard de Gestión en sección 8 (tiempos de despacho y resolución, satisfacción, reincidencia, hardware crítico, efectividad de instructivos y asistencia, eficacia de capacitación); incorporación en 5.2 de vistas BASE DE DATOS (TÉCNICO) y BAJA CLIENTES para identificación de estado administrativo del cliente. | RSGC |
