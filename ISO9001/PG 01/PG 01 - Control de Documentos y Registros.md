---
google_drive_id: "ID_PENDIENTE"
revision: "07"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.5"
audit_ready: true
tags: ["documentacion", "registros", "control", "iso9001"]
ai_brief: "Procedimiento general para el control de la información documentada del SGC Corvus."
pending_actions: ["Vincular con Master List V2"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PG 01 - Control de Documentos y Registros - Rev. 06

| PROCEDIMIENTO | PG 01 |
| :--- | :--- |
| **CONTROL DE DOCUMENTOS Y REGISTROS** | **Rev. 06** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 04/01/2026 |
| **Elabora:** Responsable de SGC | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Definir la metodología para la elaboración, revisión, aprobación, distribución, actualización, codificación, control y archivo de todos los documentos y registros de Corvus S.R.L. necesarios para desarrollar la estructura de su Sistema de Gestión de Calidad.

## 2. ALCANCE

Todos los documentos y registros relacionados con el Sistema de Gestión de Calidad de la empresa.

## 3. RESPONSABILIDADES

Para la efectiva aplicación de este procedimiento serán responsables:

**El Responsable del Sistema de Gestión de Calidad** será responsable del cumplimiento e implementación del presente procedimiento, incluyendo elaboración, revisión, aprobación y distribución de los documentos y registros incluidos en el SGC.

**La Dirección** será responsable de la revisión y aprobación de los procedimientos generales y de soporte que elabora el Responsable del SGC (RSGC).

**Los Encargados** de cada sector serán responsables del cumplimiento del presente procedimiento, incluyendo la elaboración y modificación de los documentos y registros respectivos de sus áreas.

## 4. DEFINICIONES Y ABREVIATURAS

**SGC:** Sistema de Gestión de Calidad
**APPSHEET:** Interfaz digital (Frontend) utilizada para la carga y consulta de registros del SGC.
**BACKEND:** Hojas de cálculo de Google (Google Sheets) donde se almacenan físicamente los datos recolectados por la interfaz.
**BASE DE DATOS:** Archivo contenedor (generalmente el Backend) que agrupa múltiples registros o tablas interrelacionadas bajo un mismo código raíz (ej: un archivo con mas de una pestañas de un Google Sheet).

## 5. DESARROLLO

### 5.1 Estructura Documental

El Sistema de Gestión de Calidad de la empresa está documentado de acuerdo a la siguiente estructura:

#### 5.1.1 Manual de Calidad

El Manual de Calidad tiene como objetivo sentar las bases del Sistema de Gestión de Calidad de la empresa, incluyendo la determinación de las actividades de la organización, su contexto, las partes interesadas y la comprensión de sus necesidades y expectativas, el alcance del sistema y sus exclusiones, la política de la calidad, la identificación de los procesos que lo componen, su interrelación y los procedimientos documentados que lo sustentan.

#### 5.1.2 Procedimientos Generales

Los Procedimientos Generales son los documentos que establecen actividades que involucran o coordinan a varios sectores de la empresa. En los Procedimientos se define la finalidad y el campo de aplicación de la actividad y especifica cómo se realiza la misma.

Todos los Procedimientos Generales están constituidos por:

- Objetivo
- Alcance
- Responsabilidad
- Definiciones y Abreviaturas
- Desarrollo de Proceso
- Encabezado e Historial de Cambios (ver 5.2.1 y 5.2.5)

La redacción de un procedimiento debe obedecer a un objetivo concreto:

- **QUÉ:** Objetivo/Finalidad claro y conciso.
- **QUIÉN:** Responsabilidades y deberes de los implicados.
- **CUANDO:** Momento de aplicación.
- **DÓNDE:** Campo de aplicación.
- **CÓMO:** Descripción detallada del modo de cumplimiento.

#### 5.1.3 Procedimientos Particulares

Son documentos que tienen por objeto la descripción de cómo se realizan diferentes procesos o controles que por su complejidad o criticidad deben ser documentados individualmente.

Todos los Instructivos están constituidos por:

- Objetivo
- Responsable
- Alcance
- Definiciones y Abreviaturas
- Desarrollo del Proceso
- Encabezado e Historial de Cambios (ver 5.2.1 y 5.2.5)

#### 5.1.4 Registros

Son documentos internos que contienen información acerca de actividades realizadas, evidencias del cumplimiento de las diferentes actividades y funcionamiento efectivo del SGC.

### 5.2 Control de Documentos y Registros

#### 5.2.1 Identificación y Formato

Los documentos son identificados a través de una codificación y/o por el nombre. La codificación se compone de:

- **CT:** Código de tipo documento (M, PG, PP, IT, RPG, RPP, RC).
- **CO:** Código de origen (Doble dígito numérico).
- **CS:** Código secuencial propio (Doble dígito numérico).
- **ND:** Nombre del documento.
- **CR:** Código de revisión.
- **MG:** Momento de generación (Suplanta al CR para registros finalizados).

> **Nota:** El código de revisión (CR) es obligatorio en la carátula/encabezado del documento. En el nombre del archivo digital, su inclusión es opcional para facilitar la gestión de enlaces permanentes.

**Nota sobre Codificación Flexible:** Los instructivos técnicos y guías de soporte podrán utilizar prefijos operativos específicos (ej: I-ALT, I-WEB, I-MNT) definidos en el registro *RPG 05 02* para facilitar la organización y trazabilidad en plataformas digitales y el Drive, sin necesidad de modificar este procedimiento por cada nuevo prefijo.

**Ejemplos:**

- PG 01 – Control de Documentos y Registros – Rev. 00
- PP 05 01 – Procedimientos generales y soporte técnico – Rev. 00
- RPG 02 02 – Objetivos e Indicadores – 2S 2002

#### 5.2.1.1 Registros en Plataformas Digitales (AppSheet)

Los registros generados a través de la interfaz AppSheet no poseen un código de revisión individual por cada carga. Su identificación y validez se rigen por la marca temporal (Timestamp) de ingreso en el Backend y la identificación del usuario que realizó la carga. La estructura de la aplicación (vistas, reglas y lógica) se considera un documento maestro controlado por el RSGC.

#### 5.2.1.2 Identificación Interna en Bases de Datos (Google Sheets / AppSheet)

Cuando un archivo de hoja de cálculo actúe como contenedor de múltiples tablas o solapas, se debe identificar cada una de forma unívoca para evitar errores de vinculación.

**Regla de Nomenclatura Simplificada:** `[Código RPG] [Nombre Descriptivo]`

- **Si la planilla tiene una sola hoja:** Puede conservar el nombre por defecto o simplemente el Código RPG.
- **Si la planilla tiene múltiples hojas:** Es obligatorio anteponer el código del registro madre para mantener el orden, seguido de un nombre descriptivo breve.

**Criterio de Aplicación:**

1. **Tablas Principales:** Usar el nombre natural del registro.
   - Ej: `RPG 03 01 No Conformidades`
2. **Tablas Auxiliares o Listas:** Aclarar su contenido.
   - Ej: `RPG 03 01 Registros NC`
   - Ej: `RPG 03 01 NC Potenciales`

#### 5.2.2 Elaboración, Revisión y Aprobación

Los documentos son elaborados o actualizados por el Responsable del SGC, en colaboración con los responsables de cada sector. La Dirección o quien esta designe aprueba la versión final.

#### 5.2.3 Publicación y Distribución

El Responsable del SGC archiva el documento en su formato original y mantiene actualizados los archivos disponibles en el servidor. En caso de error en un registro publicado, el RSGC puede autorizar su modificación.

#### 5.2.4 Conservación de documentos y registros

Los documentos y registros completados se guardan con referencia de fechas o nombres en las carpetas del SGC.
Ejemplo: “RPG 02 03 - Minuta de Reunión - Rev.00 – 2021”.

#### 5.2.5 Cambios

El Responsable del SGC gestiona y autoriza los cambios en la documentación

Durante las etapas de redacción o trabajo en proceso, se pueden realizar múltiples ediciones sin afectar el código de revisión oficial.

Se admite la discontinuidad en la secuencia numérica de revisiones (saltos de versión) si esta obedece a borradores intermedios, copias de seguridad o versiones no implementadas oficialmente. La "Publicación" se entiende como la comunicación formal del documento a los usuarios para su uso.

Las versiones anteriores de archivos estáticos (PDF, Word) se mueven a la carpeta “Obsoletos”. Para documentos nativos de Google (Docs, Sheets, AppSheet), el registro histórico de versiones de la plataforma se considera evidencia suficiente de obsolecencia, sin necesidad de duplicar el archivo.

#### 5.2.5.1 Trazabilidad de Cambios en Registros Digitales (RPG)

Para optimizar la integridad de datos y facilitar la auditoría, las modificaciones estructurales y cambios de versión realizados sobre los **Registros de Procedimientos Generales (RPG)** gestionados digitalmente (No Conformidades, RRHH, Documentos, etc.) se centralizan en una base de datos única de historial: **`RPG 01 02 - Historial Unificado de Cambios de RPG del SGC`**.

Este registro maestro actúa como evidencia consolidada de la traza de auditoría para los RPG, sustituyendo las pestañas de historial individuales de cada planilla de cálculo.

La estructura de este registro unificado incluye, como mínimo:

- **ID del Cambio:** Identificador único del evento.
- **Referencia:** Código del RPG afectado (ej: RPG 03 01).
- **Fecha:** Fecha del cambio estructural.
- **Rev:** Revisión resultante.
- **Responsable:** Quien autorizó o realizó el cambio.
- **Detalle:** Descripción de la modificación realizada.

#### 5.2.6 Documentos Externos

El control de documentos externos se lleva en el *RPG 01 01 Listado de Documentos y Registros*. Se realiza una consulta mensual a las fuentes para asegurar vigencia.

#### 5.2.7 Archivo y back up

El almacenamiento principal es Google Platform (Drive/AppSheet). Para el resguardo integral del sistema (Frontend + Backend), se utiliza la función de duplicado completo ("Copy App"), generando snapshots operativos (Estructura + Datos) que sirven como puntos de restauración ante contingencias mayores.

#### 5.2.7.1 Backup de Whatsapp

Las conversaciones de soporte de WhatsApp tienen copia de seguridad diaria automática en Google Drive.

#### 5.2.7.2 Integridad del Backend (Google Sheets)

Para asegurar la integridad de los registros cargados vía AppSheet, el acceso directo a las hojas de cálculo del Backend está restringido al administrador del sistema. Queda prohibida la edición manual de celdas en el Backend sin previa autorización del RSGC, para garantizar que la evidencia de auditoría no sea alterada.

#### 5.2.8 Control de Acceso

El control de acceso a documentos y registros se gestiona mediante permisos en Google Drive y perfiles de usuario en AppSheet:

- **Responsable del SGC (RSGC):** Tiene acceso completo para edición de documentos procedimentales y configuración de la aplicación AppSheet.
- **Agentes de Soporte:** Tienen acceso de "Carga", "Consulta" y "Edición" de registros a través de la interfaz AppSheet (permitiendo correcciones de errores, actualizaciones de estado y procesos de cobranza). No tienen permisos para editar el diseño/estructura de la aplicación ni para el acceso directo a las hojas de cálculo del Backend.
- **Dirección:** Tiene acceso de lectura y aprobación a todos los documentos del SGC y dashboards de indicadores.

### 6. REGISTROS ASOCIADOS

| Código | Nombre |
| --- | --- |
| RPG 01 01 | Listado Maestro de Documentos |
| RPG 01 02 | Historial Unificado de Cambios de RPG del SGC |

### 7. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | RSGC |
| 01/03/2022 | 01 | Adición de punto 5.2.7. ARchivo y Backup | RSGC |
| 11/11/2022 | 02 | Actualización del punto 5.2.1. Adición del punto 5.2.1.1. Actualización del punto 5.2.3. | RSGC |
| 18/11/2022 | 03 | Actualización de 5.2.7 Archivo y back up | RSGC |
| 07/10/2024 | 04 | Se actualiza la metodología de backup. Se incorpora el apartado 5.2.7.1. | RSGC |
| 08/10/2024 | 05 | Se actualiza Logo. Se actualiza punto 5.2.2. | RSGC |
| 03/01/2026 | 06 | Corrección de referencia en sección 3: "Representante de la Gerencia" por "Responsable del SGC (RSGC)". Incorporación de sección 5.2.8 Control de Acceso con especificación de permisos y roles. Integración conceptual de AppSheet como interfaz de registros. Definición de Backend/Frontend. Incorporación de 5.2.1.2 (Soberanía de registros digitales) y 5.2.7.2 (Integridad del Backend). Actualización de roles en 5.2.8 incluyendo perfiles de AppSheet. Adición de nota en 5.2.1 sobre codificación flexible para instructivos técnicos (prefijos operativos). Inclusión de código IT (Instructivo Técnico) en sistema de codificación (5.2.1). Flexibilizacion de 5.2.1.1 (Versionado en Google). Flexibilización de nombre de archivo (CR opcional en nombre digital). Sincronización de fechas de relanzamiento| RSGC |
| 13/01/2026 | 07 | Estandarización de encabezados. Inclusión de 5.2.1.2 (Nomenclatura Interna Sugerida) y eliminación de 5.2.1.1 (Redundante). Actualización de 5.2.2 (Responsabilidad RSGC). Modificación de 5.2.5 (Gestión de cambios, obsolescencia digital y WIP). Inclusión de 5.2.5.1 (Historial Unificado). Limpieza de referencias obsoletas en 5.1. Actualización de 5.2.7 (Backup Integral por Snapshot AppSheet. Antes google drive via zip con carpetas). | RSGC |
