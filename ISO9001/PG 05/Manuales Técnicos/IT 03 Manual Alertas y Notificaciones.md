---
google_drive_id: "ID_PENDIENTE"
revision: "04"
last_updated: "05/03/2026"
responsible: "RSGC"
iso_clause: "7.1.3, 8.5"
audit_ready: true
tags: ["alertas", "notificaciones", "automatizacion", "soporte", "cobranzas", "historico"]
ai_brief: "Manual de configuración de alertas, notificaciones automáticas y snapshot histórico de cobranzas para soporte y SGC."
pending_actions: ["Configurar alertas de reincidencia de envíos"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# IT 03 - Manual de Alertas y Notificaciones Automáticas - Rev. 04

| INSTRUCTIVO TÉCNICO | IT 03 |
| :--- | :--- |
| **MANUAL DE ALERTAS Y NOTIFICACIONES** | **Rev. 04** |
| **Fecha de Emisión:** 12/01/2026 | **Fecha Revisión:** 05/03/2026 |
| **Sistemas:** AppSheet / G-Workspace | |
| **Elabora:** RSGC | **Aprueba:** Dirección |

---

## 1. OBJETIVO DEL DOCUMENTO

Definir la configuración, lógica y mantenimiento de los sistemas de alerta automatizados que asisten al SGC Corvus para garantizar el cumplimiento de plazos en el Cronograma Táctico y la agilidad en la gestión de Cobranzas de Conectividades.

> [!NOTE]
> **Flexibilidad Visual:** La presentación estética de las alertas (colores, emojis de cabecera en correos, etc.) está sujeta a una dinámica de mejora continua en la legibilidad. Cualquier cambio visual que no altere la lógica de disparo documentada no se considera una falta de integridad del documento o del proceso.

## 2. INFRAESTRUCTURA TÉCNICA

Las alertas no dependen del despliegue (deploy) pago de AppSheet. Funcionan mediante **Google Apps Script** vinculado directamente a las fuentes de datos (Google Sheets), ejecutándose de forma independiente según disparadores temporales (Triggers).

---

## 3. MÓDULO A: CRONOGRAMA TÁCTICO 2026

* **Ubicación:** Google Sheet `CRONOGRAMA_SGC_2026` (`ID: CRONO-DB`).
* **Archivo de Script:** `Monitor_Cronograma.gs`.

### 3.1 Lógica de Disparo

Relaciona la columna `Fecha Limite` (F) con la fecha actual del sistema (GMT-3).

| Condición | Acción |
| :--- | :--- |
| `Estado` = "Pendiente" AND `Día` <= T-3 | Envío de email de advertencia. |
| `Estado` = "Pendiente" AND `Día` < Hoy | Envío de email de URGENCE (Vencido). |

### 3.2 Frecuencia

Configurado con un activador de tiempo **diario** entre las 08:00 y 09:00 AM (ART).

---

## 4. MÓDULO B: COBRANZAS (CONECTIVIDADES)

* **Ubicación fuente:** Google Sheet `Base de Datos Tolvas`, pestaña `CONECTIVIDADES RPG0503`.
* **Archivos de Script:** `Alertas_Responsables.gs`, `Notificacion_cobranzas.gs` y `Snapshot_diario_cobranzas_historico.gs`.
* **Procedimiento vinculado:** PP 05 05 - Cobranza de Conectividades.

### 4.1 Alertas por Responsable (`Alertas_Responsables.gs`)

**Función:** `monitorCobranzasConectividades()`

Agrupa todos los casos estancados de un mismo responsable en un único correo para evitar saturación de la bandeja de entrada. Martin no recibe este mail porque ya recibe el resumen gerencial completo (4.2).

* **Filtros de Exclusión:** No se notifican casos en estado `COBRADA`, `SUSPENDIDO`, `BONIFICADA` o `BONIFICADA 1 AÑO (CONCESIONARIO)`.
* **Criterio Temporal:** Se dispara si han pasado **> 68 horas** desde la fecha grabada en la columna `FECHA DE CAMBIO DE ESTADO` (col. P, índice 15), siempre que el `MES VENC.` (col. I, índice 8) coincida con el mes en curso.
* **Destinatarios:** Cada responsable según la tabla de contactos (sección 5). No incluye a MARTIN.

### 4.2 Resumen Gerencial (`Notificacion_cobranzas.gs`)

**Función:** `generarResumenOperativoDiario()`

Envía un reporte consolidado con el estado de **todas** las cobranzas pendientes del mes a la Dirección (Martin y Mariano).

* **Contenido:** Lista de responsables, clientes, estados actuales, horas de inactividad y total de casos sin cobrar.
* **Formato:** Tabla HTML con resaltado en **Rojo** para casos que superan el umbral de 68 horas.
* **Año dinámico:** Se calcula automáticamente con `getFullYear()` para evitar hardcodeo.
* **Destinatarios:** `martin.lombardi@gmail.com` y `oddinom@gmail.com`.

### 4.3 Snapshot Histórico (`Snapshot_diario_cobranzas_historico.gs`)

**Función:** `snapshotDiarioCobranzas()`

Graba una foto diaria de las métricas de cobranza en un Google Sheet independiente para construir series de tiempo y análisis histórico.

* **Destino:** Google Sheet `Histórico Cobranzas` (`ID: 1wVjmZDIWLZvwunf7NrkqSh91yE2e31a286Y0zFDsZRE`).
* **Pestaña RESUMEN:** Una fila por día con métricas globales del mes en curso.

| Columna | Descripción |
| :--- | :--- |
| Fecha | Fecha del snapshot (dd/mm/yyyy) |
| Mes | Mes en curso (ej: MARZO) |
| Total Mes | Total de conectividades del mes |
| Cobrables | Total Mes - Suspendidas - Bonificadas |
| Cobradas | Cantidad en estado COBRADA o COBRADA (CHEQUES) |
| % Cobro | Cobradas / Cobrables × 100 |
| Asignadas | Cantidad en estado ASIGNADA |
| Primer Contacto | Cantidad en estado PRIMER CONTACTO |
| Segundo Contacto | Cantidad en estado SEGUNDO CONTACTO |
| Factura Pendiente | Cantidad en estado FACTURA PENDIENTE DE PAGO |
| Reclamo Pago | Cantidad en estado FACTURA PENDIENTE - RECLAMO DE PAGO |
| 2° Reclamo | Cantidad en estado FACTURA PENDIENTE - 2° RECLAMO DE PAGO |
| Suspendidas | Cantidad en estado SUSPENDIDO |
| Bonificadas | Cantidad en estado BONIFICADA o BONIFICADA 1 AÑO (CONCESIONARIO) |
| Alertas >3d | Casos no excluidos con > 68 horas sin cambio de estado |

* **Pestaña DETALLE:** Una fila por cobrador por día con desglose individual.

| Columna | Descripción |
| :--- | :--- |
| Fecha, Mes | Igual que RESUMEN |
| Cobrador | Nombre del responsable (campo QUIEN COBRA) |
| Total | Conectividades asignadas al cobrador en el mes |
| Asignadas ... Cobradas | Desglose por estado (misma lógica que RESUMEN) |
| Alertas >3d | Casos del cobrador con > 68 horas sin cambio |

* **Control de duplicados:** Si se ejecuta más de una vez en el mismo día, sobreescribe la foto anterior (no acumula filas duplicadas).
* **Creación automática:** Las pestañas y headers se crean automáticamente en la primera ejecución.

### 4.4 Mapeo de Columnas

Los tres scripts leen las mismas columnas de la pestaña `CONECTIVIDADES RPG0503`:

| Índice | Columna | Campo | Uso |
| :--- | :--- | :--- | :--- |
| 2 | C | Empresa/CLIENTE 1 | Nombre del cliente |
| 8 | I | MES VENC. | Filtro por mes en curso |
| 13 | N | QUIEN COBRA | Responsable asignado |
| 14 | O | ESTADO | Estado de la gestión |
| 15 | P | FECHA DE CAMBIO DE ESTADO | Cálculo de inactividad |

> [!CAUTION]
> Si se agregan o mueven columnas en la hoja, los índices deben actualizarse en los tres scripts simultáneamente. Un índice corrido hace que el script lea datos incorrectos sin generar error visible.

---

## 5. MAPEO DE CONTACTOS (DESTINATARIOS)

Los correos electrónicos están hard-coded dentro de los scripts para mayor seguridad y velocidad de ejecución:

| Responsable | Email | Recibe |
| :--- | :--- | :--- |
| **MARTIN** | `martin.lombardi@gmail.com` | Resumen gerencial (4.2) |
| **MARIANO** | `oddinom@gmail.com` | Alertas individuales (4.1) + Resumen gerencial (4.2) |
| **NICOLAS** | `agdpcorvusweb@gmail.com` | Alertas individuales (4.1) |
| **MAURO** | `mauropalomeque@gmail.com` | Alertas individuales (4.1) |
| **MILI** | `cobranzas@corvus.net.ar` | Alertas individuales (4.1) |

---

## 6. MANTENIMIENTO Y MODIFICACIONES

### 6.1 Cómo acceder al código

1. Abrir el Google Sheet correspondiente.
2. Ir a **Extensiones** > **Apps Script**.

### 6.2 Cambiar destinatarios o tiempos

* **Editar Emails:** Buscar la constante `EMAILS` (alertas individuales) o `EMAILS_REPORT` (resumen gerencial) en el script y actualizar la dirección entre comillas. Actualizar también la sección 5 de este documento.
* **Editar Umbral de Horas:** Buscar el valor `68` y reemplazar por el nuevo límite de horas deseado.
* **Agregar cobrador:** Agregar una entrada al objeto `EMAILS` en `Alertas_Responsables.gs`. El nombre debe coincidir exactamente con el valor del campo `QUIEN COBRA` en la hoja, en mayúsculas.

### 6.3 Cambiar destino del histórico

El ID del Sheet histórico está en la constante `ID_HISTORICO` al inicio de `Snapshot_diario_cobranzas_historico.gs`. Para migrar a otro Sheet, reemplazar el ID y verificar que el script tenga permisos de escritura.

### 6.4 Configuración de Zona Horaria

Para asegurar la precisión en GMT-3, el proyecto debe tener configurado:
`"timeZone": "America/Argentina/Buenos_Aires"` en el archivo `appsscript.json`.

---

## 7. ACTIVADORES (TRIGGERS)

Configurados en **Apps Script > Activadores** del Sheet `Base de Datos Tolvas`:

| Función | Tipo | Frecuencia | Propósito |
| :--- | :--- | :--- | :--- |
| `snapshotDiarioCobranzas` | Basado en tiempo | Diario, 22:00 a 23:00 | Foto diaria de métricas |
| `monitorCobranzasConectividades` | Basado en tiempo | Diario, 10:00 a 11:00 | Alertas individuales a cobradores |
| `generarResumenOperativoDiario` | Basado en tiempo | Diario, 10:00 a 11:00 | Resumen gerencial a Dirección |

> [!NOTE]
> El snapshot se ejecuta al cierre del día (22:00-23:00) para capturar el estado más completo de la jornada. Los reportes de alerta se ejecutan por la mañana (10:00-11:00) para que los responsables actúen durante el día.

---

## 8. DOCUMENTOS DE REFERENCIA (MARCO PROCEDIMENTAL)

| Código | Nombre |
| :--- | :--- |
| PG 01 | Control de Documentos y Registros |
| PG 02 | Dirección |
| PG 05 | Post Venta y Soporte Técnico |
| IT 01 | Manual Técnico de Administración AppSheet |

## 9. REGISTROS ASOCIADOS (EVIDENCIA OPERATIVA)

| Código | Nombre | Relación |
| :--- | :--- | :--- |
| RPG 02 02 | Objetivos e Indicadores | KPIs de cobranza |
| RPG 05 01 | Registro de Actividades de Soporte | Gestión operativa |
| RPP 05 05 01 | Conectividades | Fuente de datos de los scripts |
| — | Histórico Cobranzas (Google Sheet) | Destino del snapshot diario |

## 10. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00 | 05/01/2026 | Emisión inicial. Documentación de automatismos de Cronograma y Cobranzas. | RSGC |
| 01 | 12/01/2026 | Re-codificación a IT 03 e incorporación de la sección de Documentos Asociados. | RSGC |
| 02 | 12/01/2026 | Estandarización SGC: desglose de documentos de referencia y registros asociados. | RSGC |
| 03 | 13/01/2026 | Corrección de formato de encabezados. | RSGC |
| 04 | 05/03/2026 | Corrección de contactos (NICO→NICOLAS, email Mariano, incorporación MILI); documentación de script Snapshot Histórico (4.3); mapeo de columnas (4.4); sección de activadores (7); exclusión de MARTIN del monitor individual. | RSGC |
