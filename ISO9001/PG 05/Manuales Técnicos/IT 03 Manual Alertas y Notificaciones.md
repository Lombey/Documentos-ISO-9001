---
google_drive_id: "ID_PENDIENTE"
revision: "02"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.1.3, 8.5"
audit_ready: true
tags: ["alertas", "notificaciones", "automatisacion", "soporte"]
ai_brief: "Manual de configuración de alertas y notificaciones automáticas para soporte y SGC."
pending_actions: ["Configurar alertas de reincidencia de envíos"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# IT 03 - Manual de Alertas y Notificaciones Automáticas - Rev. 02

| INSTRUCTIVO TÉCNICO | IT 03 |
| :--- | :--- |
| **MANUAL DE ALERTAS Y NOTIFICACIONES** | **Rev. 02** |
| **Fecha de Emisión:** 12/01/2026 | **Sistemas:** AppSheet / G-Workspace |
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

## 4. MÓDULO B: COBRANZAS (RPG 05 03)

* **Ubicación:** Google Sheet `SGC Corvus - Conectividades` (`ID: CONECTIVIDADES-DB`).
* **Archivos de Script:** `Alertas_Responsables.gs` y `Notificacion_cobranzas.gs`.

### 4.1 Alertas por Responsable (`Alertas_Responsables.gs`)

Agrupa todos los casos de un mismo responsable en un único correo para evitar saturación de la bandeja de entrada.

* **Filtros de Exclusión:** No se notifican casos en estado `COBRADA`, `SUSPENDIDO`, `BONIFICADA` o `BONIFICADA 1 AÑO (CONCESIONARIO)`.
* **Criterio Temporal:** Se dispara si han pasado **> 68 horas** desde la fecha grabada en la columna `FECHA DE CAMBIO DE ESTADO` (P), siempre que el `MES VENC.` coincida con el mes en curso.

### 4.2 Resumen Gerencial (`Notificacion_cobranzas.gs`)

Envía un reporte consolidado con el estado de todos los responsables a la Dirección (Martin y Mariano).

* **Contenido:** Lista de responsables, clientes, estados actuales y horas de inactividad.
* **Formato:** Tabla HTML con resaltado en **Rojo** para casos que superan el umbral de 68 horas.

---

## 5. MAPEO DE CONTACTOS (DESTINATARIOS)

Los correos electrónicos están hard-coded dentro de los scripts para mayor seguridad y velocidad de ejecución:

| Responsable | Email Vinculado |
| :--- | :--- |
| **MARTIN** | `martin.lombardi@gmail.com` |
| **MARIANO** | `moddino@gmail.com` |
| **NICO** | `agdpcorvusweb@gmail.com` |
| **MAURO** | `mauropalomeque@gmail.com` |

---

## 6. MANTENIMIENTO Y MODIFICACIONES

### 6.1 Cómo acceder al código

1. Abrir el Google Sheet correspondiente.
2. Ir a **Extensiones** > **Apps Script**.

### 6.2 Cambiar destinatarios o tiempos

* **Editar Emails:** Buscar la constante `EMAILS` en el script y actualizar la dirección entre comillas.
* **Editar Umbral de Horas:** Buscar el valor `68` y reemplazar por el nuevo límite de horas deseado.

### 6.3 Configuración de Zona Horaria

Para asegurar la precisión en GMT-3, el proyecto debe tener configurado:
`"timeZone": "America/Argentina/Buenos_Aires"` en el archivo `appsscript.json`.

---

## 7. DOCUMENTOS DE REFERENCIA (MARCO PROCEDIMENTAL)

| Código | Nombre |
| :--- | :--- |
| PG 01 | Control de Documentos y Registros |
| PG 02 | Dirección |
| PG 05 | Post Venta y Soporte Técnico |
| IT 01 | Manual Técnico de Administración AppSheet |

## 8. REGISTROS ASOCIADOS (EVIDENCIA OPERATIVA)

| Código | Nombre |
| :--- | :--- |
| RPG 02 02 | Objetivos e Indicadores |
| RPG 05 01 | Registro de Actividades de Soporte |
| RPG 05 02 | Listado de Instructivos de Soporte |
| RPG 05 03 | Pedido de Repuestos |
| RPG 05 04 | Envío de Clientes hacia Corvus |
| RPP 05 05 01 | Conectividades |

## 9. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00 | 05/01/2026 | Emisión inicial. Documentación de automatismos de Cronograma y Cobranzas. | RSGC |
| 01 | 12/01/2026 | Re-codificación a IT 03 e incorporación de la sección de Documentos Asociados. | RSGC |
| 02 | 12/01/2026 | **Estandarización SGC:** Desglose de documentos de referencia y registros asociados para máxima trazabilidad. | RSGC |
| 03 | 13/01/2026 | Estandarización de encabezados digitales y optimización de la trazabilidad normativa (Cláusula 7.5). | RSGC |
