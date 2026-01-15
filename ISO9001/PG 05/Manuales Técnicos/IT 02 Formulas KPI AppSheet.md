---
google_drive_id: "ID_PENDIENTE"
revision: "04"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.1.5, 9.1"
audit_ready: true
tags: ["formulas", "kpi", "appsheet", "metatabla"]
ai_brief: "Biblioteca centralizada de fórmulas de AppSheet y definiciones de KPIs para el SGC y soporte."
pending_actions: ["Validar fórmulas de tiempo de respuesta"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# IT 02: Biblioteca de Fórmulas y KPIs AppSheet - SGC Corvus

**Fecha de Creación:** 11/01/2026
**Objetivo:** Centralizar la lógica de negocio, alarmas y cálculos de indicadores para el Dashboard de Gestión.

> [!IMPORTANT]
> **NOTA SOBRE LA IDENTIDAD VISUAL:** Este instructivo técnico documenta la lógica operativa y los criterios de control. Los elementos visuales (colores de formato, iconos de cabecera y emojis) forman parte de un proceso de mejora continua de la UX (Experiencia de Usuario) y pueden variar respecto a los ejemplos aquí citados siempre que la lógica transaccional documentada se mantenga vigente. Estas variaciones estéticas responden a criterios de agilidad y lectura de datos, y no constituyen un desvío del SGC.

---

## 1. KPIs DE COBRANZAS (Tabla: `METRICAS POST VENTA`)

Estas fórmulas calculan el desempeño global de cobranzas. Se recomienda implementarlas como **Columnas Virtuales** en la tabla auxiliar de métricas.

### 1.1. Velocidad de Cobro (% Cobrado antes del día 15)

**Qué hace:** Calcula el porcentaje de facturas cobradas este mes que cumplieron con la meta de pago antes del día 15.
**Tipo:** `Percent` (Decimal con 2 decimales).
**Dónde:** Tabla `METRICAS POST VENTA` (Columna Virtual).
**Fórmula:**

```excel
IF(
  COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [COBRAZA REALIZADA] = TRUE,
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  ) = 0,
  0,
  (COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [COBRO EXITOSO DIA 15] = TRUE,
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  ) * 1.0)
  /
  COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [ESTADO] <> "SUSPENDIDO",
        [ESTADO] <> "BONIFICADA",
        [ESTADO] <> "BONIFICADA 1 AÑO (CONCESIONARIO)",
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  )
)
```

> **Nota Técnica:** Se ha ajustado el denominador para medir sobre el **Universo Total Cobrable** en lugar de solo las cobradas. Esto evita el "falso 100%" cuando se cobran pocas facturas pero rápido. Ahora refleja el porcentaje real de la deuda total que fue saneada antes del día 15.

### 1.2. Avance Global de Cobranza (%)

**Qué hace:** Mide qué porcentaje del objetivo mensual (Universo Cobrable) ya fue cobrado efectivamente.
**Tipo:** `Percent` (Decimal).
**Fórmula:**

```excel
IF(
  COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [ESTADO] <> "SUSPENDIDO",
        [ESTADO] <> "BONIFICADA",
        [ESTADO] <> "BONIFICADA 1 AÑO (CONCESIONARIO)",
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  ) = 0,
  0,
  (COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [COBRAZA REALIZADA] = TRUE,
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  ) * 1.0)
  /
  COUNT(
    SELECT(
      CONECTIVIDADES RPG0503[ID],
      AND(
        [ESTADO] <> "SUSPENDIDO",
        [ESTADO] <> "BONIFICADA",
        [ESTADO] <> "BONIFICADA 1 AÑO (CONCESIONARIO)",
        CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
            1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
            5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
            9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
            "ENERO"))
      )
    )
  )
)
```

> **Nota Técnica:** Se utiliza la Columna Virtual auxiliar `[COBRAZA REALIZADA]` para simplificar la lógica de detección de pago y asegurar consistencia con otros KPIs. Se aplica `* 1.0` al numerador para forzar la división decimal y evitar que devuelva 0.

### 1.2.B Columna Virtual Auxiliar (Tabla CONECTIVIDADES)

**Nombre:** `COBRAZA REALIZADA` (o `COBRO EXITOSO TOTAL`)
**Tipo:** `Yes/No`
**Fórmula:**

```excel
[ESTADO] = "COBRADA"
```

*(Opcional: Agregar `OR(..., CONTAINS([ESTADO], "COBRADA"))` si se requiere mayor robustez)*.

### 1.3. Total Suspendidas Mes

**Qué hace:** Cuenta cuántos servicios fueron dados de baja ("SUSPENDIDO") específicamente durante el mes actual, excluyendo suspensiones antiguas.
**Tipo:** `Number` (Entero).
**Dónde:** Tabla `METRICAS POST VENTA` (Columna Virtual).

```excel
COUNT(
  SELECT(
    CONECTIVIDADES RPG0503[ID],
    AND(
      [ESTADO] = "SUSPENDIDO",
      MONTH([FECHA DE CAMBIO DE ESTADO]) = MONTH(TODAY()),
      YEAR([FECHA DE CAMBIO DE ESTADO]) = YEAR(TODAY())
    )
  )
)
```

### 1.4. Universo Cobrable (Objetivo Mensual)

**Qué hace:** Calcula el total de clientes activos que deben ser gestionados/cobrados este mes. Excluye a los Suspendidos (bajas) y Bonificados. Este es tu "100% a gestionar".
**Tipo:** `Number` (Entero).
**Dónde:** Tabla `METRICAS POST VENTA`.

```excel
COUNT(
  SELECT(
    CONECTIVIDADES RPG0503[ID],
    AND(
      [ESTADO] <> "SUSPENDIDO",
      [ESTADO] <> "BONIFICADA",
      [ESTADO] <> "BONIFICADA 1 AÑO (CONCESIONARIO)",
      [MES VENC.] = SWITCH(MONTH(TODAY()),
        1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
        5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
        9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
        "ENERO"
      )
    )
  )
)
```

### 1.5. Salud del Seguimiento (Total Alertas Activas)

**Qué hace:** Cuenta cuántos clientes están "dormidos" (sin gestión reciente) y requieren atención inmediata.
**Tipo:** `Number`.
**Meta:** Mantener en 0.

```excel
COUNT(
  SELECT(
    CONECTIVIDADES RPG0503[ID],
    AND(
      [STATUS SEGUIMIENTO] = "ALERTA 🚨",
      CONTAINS([MES VENC.], SWITCH(MONTH(TODAY()),
          1, "ENERO", 2, "FEBRERO", 3, "MARZO", 4, "ABRIL",
          5, "MAYO", 6, "JUNIO", 7, "JULIO", 8, "AGOSTO",
          9, "SEPTIEMBRE", 10, "OCTUBRE", 11, "NOVIEMBRE", 12, "DICIEMBRE",
          "ENERO"))
    )
  )
)
```

---

## 2. ALARMAS Y SEMÁFOROS (Tabla: `CONECTIVIDADES`)

Estas fórmulas van en la tabla transaccional para marcar cada fila individualmente.

### 2.1. Bandera de Cobro Rápido (Auxiliar para KPI 1.1)

**Qué hace:** Marca con TRUE si una venta individual se cobró a tiempo.
**Nombre:** `COBRO_EXITOSO_DIA 15`
**Tipo:** `Yes/No`

```excel
AND(
  CONTAINS([ESTADO], "COBRADA"),
  DAY([FECHA DE CAMBIO DE ESTADO]) <= 15
)
```

### 2.2. Semáforo de Inactividad (Status Seguimiento)

**Qué hace:** Detecta si un cliente activo quedó "colgado" sin gestión por más de **1 día**. Genera una alerta de seguimiento intensivo.
**Nombre:** `STATUS SEGUIMIENTO`
**Tipo:** `Text` (o Enum)

```excel
IF(
  AND(
    NOT(IN([ESTADO], {"COBRADA", "SUSPENDIDO", "BONIFICADA", "BONIFICADA 1 AÑO (CONCESIONARIO)"})),
    [DIAS_SIN_MOVIMIENTO] > 1
  ),
  "ALERTA 🚨",
  "Al Día ✅"
)
```

---

## 3. KPIs DE LOGÍSTICA (Tabla: `METRICAS POST VENTA`)

### 3.1. Tiempo de Despacho Individual (Transaccional)

**Qué hace:** Calcula cuántas **horas** demoró en despacharse un pedido específico desde su solicitud.
**Nombre columna:** `TIEMPO_DESPACHO_REPUESTOS`
**Tabla:** `Pedidos repuestos`
**Tipo:** `Decimal`
**Fórmula:**

```excel
IF(
  ISBLANK([FECHA DE ENVÍO]),
  "",
  TOTALHOURS([FECHA DE ENVÍO] - [FECHA_SOLICITUD])
)
```

### 3.2. Promedio Despacho Mensual (KPI Agregado)

**Qué hace:** Calcula el tiempo promedio de despacho de todos los pedidos enviados *este mes*.
**Nombre columna:** `PROMEDIO DESPACHO MENSUAL`
**Tabla:** `METRICAS POST VENTA` (Columna Virtual)
**Tipo:** `Decimal`
**Fórmula:**

```excel
AVERAGE(
  SELECT(
    Pedidos repuestos[TIEMPO_DESPACHO_REPUESTOS],
    AND(
      MONTH([FECHA DE ENVÍO]) = MONTH(TODAY()),
      YEAR([FECHA DE ENVÍO]) = YEAR(TODAY())
    )
  )
)
```

### 3.3. Promedio Despacho Anual (KPI Agregado)

**Qué hace:** Promedio acumulado del año en curso.
**Nombre columna:** `PROMEDIO DESPACHO ANUAL`
**Tipo:** `Decimal`
**Fórmula:**

```excel
AVERAGE(
  SELECT(
    Pedidos repuestos[TIEMPO_DESPACHO_REPUESTOS],
    YEAR([FECHA DE ENVÍO]) = YEAR(TODAY())
  )
)
```

### 3.4. Columna Auxiliar Mes-Año

**Qué hace:** Genera una etiqueta de texto para agrupar envíos por mes (ej: "2026-01").
**Nombre columna:** `MES_AÑO`
**Tipo:** `Text`
**Fórmula:**

```excel
TEXT([FECHA DE ENVÍO], "yyyy-MM")
```

---

## 4. Soporte Técnico (SLA Tiempo de Respuesta)

KPI de eficiencia en la resolución de tickets de soporte.

### 4.1. Tiempo de Resolución (Transaccional)

**Qué hace:** Calcula las horas transcurridas desde el inicio hasta el cierre (o hasta ahora si sigue abierto).
**Nombre columna:** `TIEMPO RESOLCION`
**Tabla:** `Soporte` (Columna Virtual)
**Tipo:** `Decimal`
**Fórmula:**

```appsheet
TOTALHOURS(IF(ISBLANK([CIERRE DEL CASO]), NOW(), [CIERRE DEL CASO]) - [INICIO DEL CASO])
```

### 4.2. Promedio Resolución Mensual (KPI Agregado)

**Qué hace:** Calcula el promedio de horas de resolución de los casos cerrados *este mes*.
**Nombre columna:** `PROMEDIO RESOLUCION MENSUAL`
**Tabla:** `METRICAS POST VENTA` (o donde centralices los KPIs)
**Tipo:** `Decimal`
**Fórmula:**

```appsheet
AVERAGE(
  SELECT(
    Soporte[TIEMPO RESOLCION],
    AND(
      ISNOTBLANK([CIERRE DEL CASO]),
      MONTH([CIERRE DEL CASO]) = MONTH(TODAY()),
      YEAR([CIERRE DEL CASO]) = YEAR(TODAY())
    )
  )
)
```

### 4.3. Promedio Resolución Anual (KPI Agregado)

**Qué hace:** Promedio acumulado de tiempos de resolución del año en curso.
**Nombre columna:** `PROMEDIO RESOLUCION ANUAL`
**Tabla:** `METRICAS POST VENTA`
**Tipo:** `Decimal`
**Fórmula:**

```appsheet
AVERAGE(
  SELECT(
    Soporte[TIEMPO RESOLCION],
    AND(
      ISNOTBLANK([CIERRE DEL CASO]),
      YEAR([CIERRE DEL CASO]) = YEAR(TODAY())
    )
  )
)
```

### 4.4. Promedio Satisfacción del Cliente (Anual)

**Qué hace:** Calcula el promedio de satisfacción de las encuestas recibidas en el año actual.
**Nombre columna:** `PROMEDIO SATISFACCIÓN CLIENTE`
**Tabla:** `METRICAS POST VENTA`
**Tipo:** `Decimal`
**Fórmula:**

```appsheet
AVERAGE(
  SELECT(
    Encuesta de Satisfacción de Soporte Técnico Corvus 2026[¿Qué tan satisfecho está con el servicio de soporte recibido hoy?],
    YEAR([Timestamp]) = YEAR(TODAY())
  )
)
```

### 4.5. Detección de Reincidencia (7 días)

**Qué hace:** Identifica si el ticket actual es el resultado de un problema no resuelto satisfactoriamente en los últimos 7 días. Utiliza la columna maestra `[Identificador_BTH_USUARIO]` para agrupar por equipo (BTH) o por persona (USUARIO) según corresponda.
**Nombre columna:** `ES REINCIDENCIA 7DIAS`
**Tabla:** `Soporte` (Columna Virtual)
**Tipo:** `Yes/No`
**Fórmula:**

```appsheet
ISNOTBLANK(
  FILTER(
    "Soporte",
    AND(
      [ID] <> [_THISROW].[ID],
      [Identificador_BTH_USUARIO] = [_THISROW].[Identificador_BTH_USUARIO],
      NOT(CONTAINS([PROBLEMA], "CAPACITACIÓN")),
      [ANÁLISIS DE CAUSAS] <> "CALIBRACIÓN - GENERAL",
      ISNOTBLANK([CIERRE DEL CASO]),
      [CIERRE DEL CASO] < [_THISROW].[INICIO DEL CASO],
      TOTALHOURS([_THISROW].[INICIO DEL CASO] - [CIERRE DEL CASO]) <= 168
    )
  )
)
```

### 4.6. Índice de Reincidencia Técnica (%)

**Qué hace:** Porcentaje de tickets reincidentes sobre el total del mes.
**Nombre columna:** `INDICE REINCIDENCIA MENSUAL`
**Tabla:** `METRICAS POST VENTA`
**Tipo:** `Percentage`
**Fórmula:**

```appsheet
COUNT(
  SELECT(
    Soporte[ID],
    AND(
      [ES REINCIDENCIA 7DIAS] = TRUE,
      MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
      YEAR([INICIO DEL CASO]) = YEAR(TODAY())
    )
  )
) * 1.0
/
COUNT(
  SELECT(
    Soporte[ID],
    AND(
      MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
      YEAR([INICIO DEL CASO]) = YEAR(TODAY())
    )
  )
)
```

### 4.7. Identificación de Hardware Crítico

**Qué hace:** Marca un ticket si pertenece a un equipo con fallas físicas recurrentes (>3 casos en 2026). Solo aplica a motivo EQUIPO.
**Nombre columna:** `ES HARDWARE CRITICO`
**Tabla:** `Soporte` (Columna Virtual)
**Tipo:** `Yes/No`
**Fórmula:**

```appsheet
AND(
  [MOTIVO] = "EQUIPO",
  COUNT(
    SELECT(
      Soporte[ID],
      AND(
        [Identificador_BTH_USUARIO] = [_THISROW].[Identificador_BTH_USUARIO],
        [MOTIVO] = "EQUIPO",
        NOT(CONTAINS([PROBLEMA], "CAPACITACIÓN")),
        [ANÁLISIS DE CAUSAS] <> "CALIBRACIÓN - GENERAL",
        YEAR([INICIO DEL CASO]) = 2026
      )
    )
  ) > 3
)
```

### 4.8. Índice de Hardware Crítico (%)

**Qué hace:** Porcentaje de tickets de hardware crítico sobre el total de tickets de equipo atendidos en el año.
**Nombre columna:** `INDICE HARDWARE CRÍTICO`
**Tabla:** `METRICAS POST VENTA`
**Tipo:** `Percentage`
**Fórmula:**

```appsheet
COUNT(
  SELECT(
    Soporte[ID],
    AND(
      [ES HARDWARE CRITICO] = TRUE,
      YEAR([INICIO DEL CASO]) = 2026
    )
  )
) * 1.0
/
COUNT(
  SELECT(
    Soporte[ID],
    AND(
      [MOTIVO] = "EQUIPO",
      YEAR([INICIO DEL CASO]) = 2026
    )
  )
)
```

## 5. KPIs DE CAPACITACIÓN Y DOC. (Tabla: `METRICAS POST VENTA`)

Estos indicadores miden si la asistencia técnica "educa" al cliente para reducir la dependencia del soporte manual. Se basan en la **Presunción de Éxito**: el caso suma al KPI desde su cierre, y solo resta si ocurre un re-contacto en el plazo de 15 días.

### 5.1. Efectividad de la Asistencia / Instructivos (%)

**Qué hace:** Mide el porcentaje de asistencias exitosas MENSUAL. Es exitoso si el cliente NO re-contacta en 15 días."

**Nombre columna:** `PROMEDIO EFECTIVIDAD INTRUCTIVOS MENSUAL`
**Tabla:** `METRICAS POST VENTA` (Columna Virtual)
**Tipo:** `Percent`
**Fórmula:**

```appsheet
COUNT(
  SELECT(Soporte[ID], 
    AND(
      [ACCIÓN CORRECTIVA] = "SE ASISTE CON INFORMACIÓN / INSTRUCTIVOS",
      [DETECCION RECONTACTO 15D] = FALSE,
      MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
      YEAR([INICIO DEL CASO]) = YEAR(TODAY())
    )
  )
) * 1.0
/
MAX(LIST(1, 
  COUNT(
    SELECT(Soporte[ID], 
      AND(
        [ACCIÓN CORRECTIVA] = "SE ASISTE CON INFORMACIÓN / INSTRUCTIVOS",
        MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
        YEAR([INICIO DEL CASO]) = YEAR(TODAY())
      )
    )
  )
))
```

**Nombre columna:** `PROMEDIO EFECTIVIDAD ASISTENCIA ANUAL`
**Tabla:** `METRICAS POST VENTA` (Columna Virtual)
**Tipo:** `Percent`
**Fórmula (ANUAL):**

```appsheet
COUNT(
  SELECT(Soporte[ID], 
    AND(
      [ACCIÓN CORRECTIVA] = "SE ASISTE CON INFORMACIÓN / INSTRUCTIVOS",
      [DETECCION RECONTACTO 15D] = FALSE,
      YEAR([INICIO DEL CASO]) = 2026
    )
  )
) * 1.0
/
MAX(LIST(1, 
  COUNT(
    SELECT(Soporte[ID], 
      AND(
        [ACCIÓN CORRECTIVA] = "SE ASISTE CON INFORMACIÓN / INSTRUCTIVOS",
        YEAR([INICIO DEL CASO]) = 2026
      )
    )
  )
))
```

---

### 5.2. Eficacia de Capacitación (%)

**Qué hace:** Mide el éxito de casos catalogados como "CAPACITACIÓN". Es exitoso si el cliente NO re-contacta en 15 días.

**Nombre columna:** `PROMEDIO EFICACIA CAPACITACION MENSUAL`
**Tabla:** `METRICAS POST VENTA` (Columna Virtual)
**Tipo:** `Percent`
**Fórmula (MENSUAL):**

```appsheet
COUNT(
  SELECT(Soporte[ID], 
    AND(
      CONTAINS([PROBLEMA], "CAPACITACIÓN"),
      [DETECCION RECONTACTO 15D] = FALSE,
      MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
      YEAR([INICIO DEL CASO]) = YEAR(TODAY())
    )
  )
) * 1.0
/
MAX(LIST(1, 
  COUNT(
    SELECT(Soporte[ID], 
      AND(
        CONTAINS([PROBLEMA], "CAPACITACIÓN"),
        MONTH([INICIO DEL CASO]) = MONTH(TODAY()),
        YEAR([INICIO DEL CASO]) = YEAR(TODAY())
      )
    )
  )
))
```

**Nombre columna:** `PROMEDIO EFICACIA CAPACITACION ANUAL`
**Tabla:** `METRICAS POST VENTA` (Columna Virtual)
**Tipo:** `Percent`
**Fórmula (ANUAL):**

```appsheet
COUNT(
  SELECT(Soporte[ID], 
    AND(
      CONTAINS([PROBLEMA], "CAPACITACIÓN"),
      [DETECCION RECONTACTO 15D] = FALSE,
      YEAR([INICIO DEL CASO]) = 2026
    )
  )
) * 1.0
/
MAX(LIST(1, 
  COUNT(
    SELECT(Soporte[ID], 
      AND(
        CONTAINS([PROBLEMA], "CAPACITACIÓN"),
        YEAR([INICIO DEL CASO]) = 2026
      )
    )
  )
))
```

---

### 5.3. Columna Auxiliar: Detector de Re-contacto (15 días)

**Qué hace:** Identifica fallas de transferencia de conocimiento por re-contacto del mismo cliente.
**Nombre columna:** `DETECCION RECONTACTO 15D`
**Tabla:** `Soporte` (Columna Virtual)
**Tipo:** `Yes/No`
**Fórmula:**

```appsheet
COUNT(
  SELECT(
    Soporte[ID],
    AND(
      [Identificador_BTH_USUARIO] = [_THISROW].[Identificador_BTH_USUARIO],
      [INICIO DEL CASO] > [_THISROW].[INICIO DEL CASO],
      [INICIO DEL CASO] <= ([INICIO DEL CASO] + 15)
    )
  )
) > 0
```

*Finalidad: Esta columna es el motor de los KPIs anteriores. Si es TRUE, el ticket original deja de contar como éxito de forma retroactiva.*

---

## 6. FORMAT RULES (Reglas de Color y Visualización)

Instrucciones para la configuración visual en AppSheet (`METRICAS POST VENTA` y `Soporte`).

### 6.1. Repuestos (Logística)

* **PROMEDIO DESPACHO MENSUAL DENTRO DE SLA:**
  * **Condition:** `[PROMEDIO DESPACHO MENSUAL] <= 24`
  * **Format:** Texto Verde + Icono Truck 🚛.
* **PROMEDIO DESPACHO MENSUAL FUERA DE SLA:**
  * **Condition:** `[PROMEDIO DESPACHO MENSUAL] > 24`
  * **Format:** Texto Rojo + Icono Warning ⚠️.

### 6.2. Salud del Seguimiento

* **SALUD DE SEGUIMIENTO (ALERTA):**
  * **Condition:** `[TOTAL ALERTAS ACTIVAS] > 0`
  * **Format:** Texto Rojo + Icono Campana 🔔.

### 6.3. Cobranzas (Velocidad al día 15)

* **MAYOR A 85% (Éxito):**
  * **Condition:** `[Velocidad de Cobro] > 0.85`
  * **Format:** Texto Amarillo + Icono Gauge.
* **MENOR AL 50% (Crítico):**
  * **Condition:** `[Velocidad de Cobro] < 0.50`
  * **Format:** Texto Rojo + Icono Gauge.

### 6.4. Soporte Técnico (SLA)

* **Ticket Fuera de SLA (Fila):**
  * **Condition:** `[TIEMPO RESOLCION] > 12`
  * **Format:** Texto Rojo + Icono Warning 🔴.
* **PROMEDIO MENSUAL DENTRO DE SLA:**
  * **Condition:** `[PROMEDIO RESOLUCION MENSUAL] <= 12`
  * **Format:** Texto Verde + Icono Headset 🎧.

### 6.5. Capacitación y Asistencia (Éxito)

* **EFICACIA EN META (>85%):**
  * **Condition:** `[EFICACIA CAPACITACION] >= 0.85`
  * **Format:** Texto Verde + Icono Graduation Cap 🎓.
* **EFICACIA BAJO META:**
  * **Condition:** `[EFICACIA CAPACITACION] < 0.85`
  * **Format:** Texto Rojo + Icono Warning ⚠️.
* **EFECTIVIDAD ASISTENCIA EN META (>50%):**
  * **Condition:** `[EFECTIVIDAD ASISTENCIA] >= 0.50`
  * **Format:** Texto Verde + Icono Book 📖.

### 6.6. Hardware Crítico y Reincidencia

* **ALERTA HARDWARE CRITICO:**
  * **Condition:** `[ES HARDWARE CRITICO] = TRUE`
  * **Format:** Icono Fire 🔥 + Texto Negrita.
* **TICKET REINCIDENTE:**
  * **Condition:** `[ES_REINCIDENCIA_7DIAS] = TRUE`
  * **Format:** Icono Repeat 🔁 + Texto Rojo.

## 7. SEGURIDAD E INTEGRIDAD DE CÁLCULOS

* **Bloqueo de Fórmulas:** Las lógicas documentadas en este manual residen en columnas virtuales o campos de sistema protegidos, cuya modificación es facultad exclusiva del RSGC.
* **Auditoría de Resultados:** Los KPIs deben ser validados mensualmente contra los reportes de Xubio y el Libro de Ventas para asegurar que no existan desvíos en los promedios calculados.

## 8. DOCUMENTOS DE REFERENCIA (MARCO PROCEDIMENTAL)

| Código | Nombre |
| :--- | :--- |
| PG 01 | Control de Documentos y Registros |
| PG 05 | Post Venta y Soporte Técnico |
| IT 01 | Manual Técnico de Administración AppSheet |

## 9. REGISTROS ASOCIADOS (EVIDENCIA OPERATIVA)

| Código | Nombre |
| :--- | :--- |
| RPG 02 02 | Objetivos e Indicadores |
| RPG 05 01 | Registro de Actividades de Soporte |
| RPG 05 02 | Listado de Instructivos de Soporte |
| RPG 05 03 | Pedido de Repuestos |
| RPG 05 04 | Envío de Clientes hacia Corvus |
| RPP 05 05 01 | Conectividades |

## 11. FÓRMULAS DE NORMALIZACIÓN Y LÓGICA DE DATOS

Estas fórmulas aseguran la integridad de los datos de base y el cumplimiento de flujos procedimentales.

### 11.1 Formateo Automático de CUIT

**Qué hace:** Limpia caracteres no deseados y aplica el formato `XX-XXXXXXXX-X` de forma reactiva.
**Tipo:** `Text` (Editable if / Valid_if).
**Fórmula sugerida:**

```appsheet
CONCATENATE(
  LEFT(SUBSTITUTE(SUBSTITUTE([_THIS], "-", ""), " ", ""), 2),
  "-",
  MID(SUBSTITUTE(SUBSTITUTE([_THIS], "-", ""), " ", ""), 3, 8),
  "-",
  RIGHT(SUBSTITUTE(SUBSTITUTE([_THIS], "-", ""), " ", ""), 1)
)
```

### 11.2 Cálculo de Estado de No Conformidades (RPG 03 01)

**Qué hace:** Determina el estado del ciclo de vida de una NC basándose en la carga de evidencias y firmas.
**Dónde:** App Formula de la columna `[Estado]`.
**Fórmula:**

```appsheet
IFS(
  ISBLANK([Descripción del Problema]), "",
  [¿La AC resultó eficaz?] = "Si", "Cerrado",
  ISBLANK([Acciones Inmediatas]), "Abierto",
  ISBLANK([Análisis de Causas]), "Abierto",
  [¿Requiere tomar acciones correctivas (AC)?] = "No", "Cerrado",
  ISBLANK([Acciones Correctivas a implementar]), "Abierto",
  ISBLANK([Fecha real de la AC]), "Abierto, falta AC",
  [¿La AC resultó eficaz?] = "No aplica", "Cerrado",
  [¿La AC resultó eficaz?] = "No", "Cerrado, no eficaz",
  TRUE, "Falta verificar eficacia"
)
```

## 12. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00 | 11/01/2026 | Emisión inicial. | RSGC |
| 01-03 | 12/01/2026 | Actualización de KPIs. | RSGC |
| 04 | 13/01/2026 | **Biblioteca Central:** Incorporación de fórmulas de CUIT y Lógica de Estado (NC). Estandarización de encabezados digitales y trazabilidad normativa. | RSGC |
