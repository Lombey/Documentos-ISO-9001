---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "27/02/2026"
responsible: "RSGC"
iso_clause: "7.1.3, 7.5"
audit_ready: true
tags: ["appsheet", "sgc", "tecnico", "calidad", "arquitectura"]
ai_brief: "Manual técnico de la aplicación AppSheet SGC, enfocada en la gestión de No Conformidades, Auditorías y RRHH."
pending_actions: ["Documentar lógica de cálculo de estado de NC"]
---

<link rel="stylesheet" href="../../../reporte-estilo.css">

# IT 04 - Manual Técnico de Administración AppSheet (SGC) - Rev. 01

| INSTRUCTIVO TÉCNICO | IT 04 |
| :--- | :--- |
| **MANUAL TÉCNICO DE ADMINISTRACIÓN APPSHEET (SGC)** | **Rev. 01** |
| **Fecha de Emisión:** 13/01/2026 | **Sistemas:** AppSheet / SGC |
| **Elabora:** RSGC | **Aprueba:** Dirección |

---

## 1. OBJETIVO DEL DOCUMENTO

Establecer las directrices técnicas y funcionales de la aplicación **CORVUS SGC**. Este sistema centraliza la gestión de No Conformidades, Auditorías, Gestión de Riesgos (FODA) y Objetivos, garantizando que la evidencia digital cumpla con los requisitos de integridad y trazabilidad de la norma **ISO 9001:2015**.

## 2. ARQUITECTURA DEL SISTEMA (DATOS)

La aplicación **CORVUS SGC** se estructura sobre las siguientes tablas maestras y slices, garantizando la segregación de registros según su naturaleza normativa:

* **Gestión de Hallazgos:** `RPG 0301` (No Conformidades) con el slice `NCs_Abiertas` y la tabla receptora `HALLAZGOS SGC`.
* **Gestión de Talento:** `RPG 06 CAPACITACIONES` con su historial y `SLICE_PENDIENTES`, además de `Perfiles_DB` y `Evaluaciones`.
* **Estrategia y Riesgos:** `Riesgos y Oportunidades` (FODA) con el slice `Riesgos_Activos`.
* **Planificación:** `CRONOGRAMA_SGC_2026` y `Gestion de Auditorias`.
* **Control Documental:** `Doc Internos` e `Historial_Cambios`.

## 3. MECÁNICAS DE INTEGRIDAD Y CALIDAD (ISO 9001:2015)

El sistema implementa controles para blindar la evidencia de auditoría:

### 3.1 Correlatividad de Registros Hallazgos (RPG 03 01)

Para garantizar que no existan saltos en la numeración de No Conformidades, se utiliza una fórmula de cálculo automático en el valor inicial.

### 3.2 Gestión Automatizada de Estados (NC/AC)

El estado de cada hallazgo no se edita manualmente; se calcula dinámicamente mediante la lógica de la "App Formula". Esto asegura que una NC no pueda marcarse como "Cerrada" si no tiene una fecha de verificación de eficacia.

---

## 4. AUTOMATISMOS Y HERRAMIENTAS OPERATIVAS (ACCIONES)

A diferencia de las acciones nativas del sistema (Add, Edit, Delete), la aplicación cuenta con herramientas personalizadas para agilizar la gestión del SGC:

### 4.1 Gestión Documental y Enlaces

* **Open Url (Link Documentacion / Ubicación):** Conexión directa con carpetas y archivos editables en G-Drive.
* **Open Url (Link Informe DOC / Informe):** Específico para Auditorías, permite acceder al borrable y al informe final con un solo toque.
* **Ver_documentos / Open File:** Acciones para visualizar archivos PDF o evidencias cargadas en el sistema (ej. comprobantes de capacitación).

### 4.2 Comunicación y Flujos de Talento (Evaluaciones)

* **Compose Email (Evaluador):** Notificación automática por correo electrónico.
* **View Ref (Referencia SGC / Empleado):** Navegación estructural entre registros vinculados.

### 4.3 Integración de Hallazgos

La integración se implementa mediante tres acciones configuradas en la App de Soporte, sobre la tabla `Envios de clientes hacia Corvus`:

#### Acción visible: REPORTAR HALLAZGO

* **Tipo:** Grouped — ejecuta una secuencia de acciones.
* **Posición:** Inline, adjunta a la columna `Accion_editar`.
* **Condición de visibilidad:** `[HALLAZGOS SGC] = "REPORTABLE"` — la acción solo aparece en registros habilitados para reportar. Una vez ejecutada desaparece, impidiendo reportes duplicados.
* **Secuencia ejecutada:** `SGC_Crear_Hallazgo` → `SGC_Cambiar_Estado_Local`.

#### Acción interna 1: SGC_Crear_Hallazgo

* **Tipo:** Data — agrega una nueva fila en la tabla `HALLAZGOS SGC` de la App SGC.
* **Posición:** Hide (no visible al usuario).
* **Campos que escribe:**

| Campo destino | Valor |
| :--- | :--- |
| `ID` | `UNIQUEID()` |
| `FECHA REPORTE` | `NOW()` |
| `ORIGEN TABLA` | `"ENVIOS DE CLIENTES HACIA CORVUS"` |
| `ID REGISTRO ORIGEN` | `[ID]` — vincula el hallazgo al registro de origen |
| `HALLAZGO TECNICO` | Ver fórmula abajo |
**Fórmula HALLAZGO TECNICO:**
```
CONCATENATE(
  " ALERTA DE REINCIDENCIA (90 DÍAS) - Cliente: ", [CLIENTE / EMPRESA],
  " | Se detectaron envíos previos de este cliente mediante los IDs: ",
  FILTER(
    "Envios de clientes hacia Corvus",
    AND(
      [CLIENTE / EMPRESA] = [_THISROW].[CLIENTE / EMPRESA],
      [ID] <> [_THISROW].[ID],
      DATE([FECHA RECEPCIÓN]) >= (TODAY() - 90)
    )
  )
)
```
> Detecta reincidencia del mismo cliente en los últimos 90 días y lista los IDs de envíos previos relacionados.

| `AGENTE` | `LOOKUP(USEREMAIL(), ...)` — identifica al agente que reporta |
| `ESTADO RSGC` | `"PENDIENTE"` — estado inicial para revisión del RSGC |

#### Acción interna 2: SGC_Cambiar_Estado_Local

* **Tipo:** Data — modifica columnas en el registro de origen.
* **Posición:** Hide (no visible al usuario).
* **Efecto:** Escribe `"REPORTADO"` en el campo `HALLAZGOS SGC` del registro origen. Esto hace que la condición de visibilidad de **REPORTAR HALLAZGO** deje de cumplirse, ocultando la acción y previniendo reportes duplicados.

#### Flujo completo

```
Registro en "Envios de clientes hacia Corvus"
        │
        ▼ [HALLAZGOS SGC] = "REPORTABLE"
[REPORTAR HALLAZGO]  ← visible inline para el agente
        │
        ├─ SGC_Crear_Hallazgo  → nueva fila en HALLAZGOS SGC (ESTADO RSGC: PENDIENTE)
        └─ SGC_Cambiar_Estado_Local → marca origen como "REPORTADO"
```

**Gestión de Recepción:** La tabla `HALLAZGOS SGC` actúa como buzón de entrada. El RSGC valida cada hallazgo en la vista **HALLAZGOS SGC PROCESO** antes de convertirlo en una NC formal en `RPG 0301`.

## 5. CAPA DE INTELIGENCIA Y AUTOMATIZACIÓN (BOTS)

A la fecha de la presente revisión, la aplicación **CORVUS SGC** no cuenta con automatizaciones activas (Bots) en producción.

* **Estado:** Deshabilitado.
* **Proyecto Futuro:** Se encuentra en fase de diseño el bot `Cronograma Alerta Vencimiento` para la tabla `CRONOGRAMA_SGC_2026`, cuyo objetivo será notificar proactivamente al Responsable SGC sobre hitos normativos próximos a vencer.

---

## 6. LÓGICA DE PRESENTACIÓN Y EXPERIENCIA DE USUARIO (UX)

La capa de UX organiza la visualización de datos mediante tipos de vista específicos para facilitar la auditoría y el control:

### 6.1 Vistas Principales de Registros

| Vista | Tipo | Propósito / Configuración |
| :--- | :--- | :--- |
| **RPG 01 01 LISTADO DE DOCUMENTOS** | `table` | Centraliza el Listado Maestro. Ordenado por `Código` y agrupado por `Tipo_Doc_Virtual`. |
| **CAPACITACIONES HISTORICO** | `table` | Historial de formación completo. Ordenado por `Fecha Real` y agrupado por `Estado`. |
| **CAPACITACIONES PENDIENTES** | `deck` | Foco operativo en formación no cumplida. Basada en el slice `SLICE_PENDIENTES`. Imagen: `Evidencia Url`, Encabezado: `Titulo`. |
| **MATRIZ DE RIESGOS** | `deck` | Gestión de Riesgos y Oportunidades (FODA). Basada en `Riesgos_Activos`. Ordenado por `Resultado de la evaluación` (desc) y agrupado por `TIPO (Origen)`. |
| **GESTIÓN DE NC** | `table` | Panel interactivo de No Conformidades Abiertas. Basada en slice `NCs_Abiertas`. Ordenado por `N°`. |
| **NCs HISTÓRICO** | `table` | Repositorio completo de hallazgos del sistema. Basada en tabla `RPG 0301`. Ordenado correlativamente por `N°`. |
| **HALLAZGOS SGC PROCESO** | `table` | Vista de validación de reportes externos. Ordenado por `FECHA REPORTE` (desc) y agrupado por `ESTADO RSGC`. |
| **AUDITORIAS** | `deck` | Seguimiento del Programa de Auditorías. Ordenado por `Fecha Planificada` (desc) y agrupado por `Estado`. |
| **PERFILES** | `deck` | Gestión de Perfiles de Puesto. Basada en `Perfiles_DB`. Ordenado por `Puesto` (asc). |
| **EVALUACIONES** | `deck` | Registro de evaluaciones de desempeño. Ordenado por `Fecha` (desc) y agrupado por `Periodo` y `Estado`. |
| **Cronograma RSGC** | `table` | Planificador de actividades del Responsable SGC. Basada en `CRONOGRAMA_SGC_2026`. |

### 6.2 Configuración de Slices (Filtros de Calidad)

El uso de **Slices** permite que los auditores e interesados se enfoquen únicamente en los registros que requieren acción inmediata (ej: `NCs_Abiertas` o `SLICE_PENDIENTES` de capacitación), cumpliendo con el enfoque basado en riesgos de la norma.

### 6.3 Dashboards de Indicadores (KPIs)

A la fecha de la presente revisión, el panel de control gráfico (Dashboard) con el resumen de indicadores estratégicos del SGC se encuentra en fase de definición.

* **Estado:** Pendiente de implementación para futuras versiones.
* **Alcance:** El dashboard integrará visualmente los resultados de las fórmulas detalladas en el **IT 02**, permitiendo realizar la revisión por la dirección de manera ágil.

---

## 7. SEGURIDAD, ACCESOS Y ROLES (ISO 9001: 7.5.3)

La aplicación **CORVUS SGC** implementa un control de acceso restringido para proteger la integridad de los registros de calidad y asegurar la confidencialidad de la información estratégica.

### 7.1 Gestión de Usuarios y Autenticación

* **Proveedor de Identidad:** Google Auth (requiere cuenta institucional o autorizada).
* **Aprovisionamiento:** El acceso se gestiona de forma centralizada mediante el panel de "Share", permitiendo revocar permisos de manera instantánea.

### 7.2 Matriz de Roles Principales (Acceso Actual)

* **Owner (martin.lombardi):** Control total sobre la arquitectura, datos y despliegue del sistema.
* **Admin (Ugur):** Perfil técnico con facultades de administración, configuración de vistas y mantenimiento de la lógica de negocio.
* **In-App Role:** Se utiliza el rol de `Admin` para las funciones de gestión del SGC, asegurando que el control de la mejora recaiga en personal competente.

### 7.3 Trazabilidad de Auditoría

Cada interacción con los datos genera un registro automático de:

1. **Email del Usuario:** Capturado mediante `USEREMAIL()`.
2. **TimeStamp:** Fecha y hora exacta de la modificación.
3. **App Version:** Identificación de la versión del sistema utilizada para el registro.

## 8. SEGURIDAD, CONTROL Y BUENAS PRÁCTICAS

* **Protección del Backend:** El personal operativo no posee permisos de edición sobre las hojas de cálculo base. Toda alteración de registros debe procesarse vía AppSheet para mantener la integridad de las fórmulas y el historial.
* **Mantenimiento Técnico:** Las actualizaciones de estructura o lógica son facultad exclusiva del RSGC o del administrador designado, previa validación en entorno de pruebas.

## 9. DOCUMENTOS DE REFERENCIA (MARCO PROCEDIMENTAL)

| Código | Nombre |
| :--- | :--- |
| PG 01 | Control de Documentos y Registros |
| PG 03 | No Conformidades y Acciones Correctivas |
| PG 04 | Auditorías Internas |
| PG 06 | Gestión de Recursos Humanos |

## 10. REGISTROS ASOCIADOS (EVIDENCIA OPERATIVA)

| Código | Nombre | Relación con la App |
| :--- | :--- | :--- |
| RPG 01 01 | Listado Maestro de Documentos | Vista "LISTADO DE DOCUMENTOS". |
| RPG 03 01 | Registro de No Conformidades | Vista "GESTIÓN DE NC". |
| RPG 04 01 | Programa de Auditorías | Vista "AUDITORIAS". |
| RPG 06 01 | Perfiles de Puesto | Vista "PERFILES". |
| RPG 06 02 | Plan de Capacitación | Vista "CAPACITACIONES PENDIENTES". |
| RPG 06 03 | Registro de Capacitación | Vista "CAPACITACIONES HISTORICO". |

## 11. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00 | 13/01/2026 | Emisión inicial. Configuración técnica de la App SGC. | RSGC |
| 01 | 27/02/2026 | Documentación detallada de la integración de Hallazgos (sección 4.3): configuración de acciones REPORTAR HALLAZGO, SGC_Crear_Hallazgo y SGC_Cambiar_Estado_Local. | RSGC |
