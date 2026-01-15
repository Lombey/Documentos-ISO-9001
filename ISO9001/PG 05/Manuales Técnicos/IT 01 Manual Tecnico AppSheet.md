---
google_drive_id: "ID_PENDIENTE"
revision: "23"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.1.3, 8.5"
audit_ready: true
tags: ["appsheet", "tecnico", "administracion", "soporte"]
ai_brief: "Manual técnico integral de la aplicación operativa AGDP en AppSheet, cubriendo arquitectura y controles."
pending_actions: ["Documentar nuevas vistas de logística"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# IT 01 - Manual Técnico de Administración AppSheet - Rev. 23

| INSTRUCTIVO TÉCNICO | IT 01 |
| :--- | :--- |
| **MANUAL TÉCNICO DE ADMINISTRACIÓN APPSHEET** | **Rev. 23** |
| **Fecha de Emisión:** 13/01/2026 | **Sistemas:** AppSheet / G-Workspace |
| **Elabora:** RSGC | **Aprueba:** Dirección |

---

## 1. OBJETIVO DEL DOCUMENTO

Establecer las directrices técnicas y funcionales del ecosistema AppSheet (**CORVUS - SOPORTE** y **CORVUS SGC**) para garantizar la integridad de los datos, la agilidad operativa y el cumplimiento de la norma ISO 9001:2015.

> [!CAUTION]
> **AVISO DE ALCANCE (SGC):** Si bien la aplicación integra módulos comerciales, de ventas y administrativos para la eficiencia de la empresa, **solo las funciones vinculadas a Soporte Técnico, Capacitación y Post-Venta** se encuentran dentro del alcance del SGC de Corvus S.R.L. Las funcionalidades etiquetadas como "Fuera de Alcance" en este manual constituyen herramientas de gestión de negocio que no están sujetas a la auditoría del SGC.

## 2. ARQUITECTURA DEL SISTEMA

El sistema utiliza **Google Sheets** como motor de base de datos.

* **Regeneración de Estructura:** Ante cualquier cambio en las columnas del Excel (agregar, mover o renombrar), es **obligatorio** ejecutar el comando `Regenerate Structure` en la pestaña Data de AppSheet.
* **Seguro de Texto:** AppSheet antepone un apóstrofe (`'`) en campos numéricos largos para evitar errores de formato en Google Sheets.

## 3. MECÁNICAS DE INTEGRIDAD Y CALIDAD (ISO 9001:2015 8.5.1)

El sistema implementa controles automáticos para reducir el error humano:

### 3.1 Formateo Automático de CUIT

Limpieza y formateo dinámico (`XX-XXXXXXXX-X`) para asegurar la trazabilidad fiscal.

### 3.2 Gestión Automatizada de Estados

Sincronización del `ESTADO_PAGO` basada en la presencia de factura.

### 3.3 Detección Dinámica de Reincidencias (Control de Calidad)

Alertas preventivas para Repuestos (30 días) y Envíos de Clientes (90 días) para detectar fallas recurrentes (**ISO 9001: 8.5.1**).

### 3.4 Garantía de Carga Completa (Validación Visual)

Uso de iconos de advertencia dinámicos (⚠️) para asegurar que los registros alimenten correctamente los indicadores de calidad.

### 3.5 Trazabilidad Temporal Inviolable (Automatic Timestamps)

Captura automática mediante `ChangeTimestamp` y `TODAY()` / `NOW()` para el inicio y cierre de casos. No editable por agentes.

### 3.6 Automatización de Trazabilidad y Exportación (Dereferencing)

Arquitectura de doble columna (Ref vs Real) para asegurar que el cliente siempre coincida con el equipo seleccionado.

### 3.7 Gestión Centralizada de Evidencia (Base de Datos Imágenes)

Manejo multimedia polimórfico mediante la tabla `BASE DE DATOS IMAGENES` con carga en modo ráfaga y visualización inline.

### 3.8 Inviolabilidad de Registros de Calidad (ISO 9001: 7.5.3)

* **Bloqueo de Eliminación por Estado:** Restricción técnica que impide el borrado físico de registros fuera del estado **"ABIERTO"**.
* **Permanencia de la Evidencia:** Todo registro operativo permanece como historial inalterable para auditorías. Sin restricciones para la biblioteca de instructivos (gestión libre de conocimiento).

## 4. AUTOMATISMOS Y HERRAMIENTAS OPERATIVAS (ACCIONES)

A diferencia de las reglas pasivas de la sección anterior, las **Acciones** son herramientas "vivas" que el usuario activa para ejecutar procesos complejos con un solo clic. Su objetivo es automatizar cambios de estado, cálculos financieros y comunicaciones externas, asegurando que el flujo de trabajo sea ágil y libre de errores manuales.

### 4.1 Gestión de Flujos de Estado (Transitions)

* **Cierre de Casos:** Seteo de estado final y captura de *Timestamp*.
* **Mandar a Producción:** Transición de Ventas a Operaciones.
* **Gestión Logística (Entrada/Salida):**
  * **Recibir (Envíos de Clientes):** Acción que registra la `FECHA RECEPCIÓN` automática (`NOW()`) y mueve el estado a `"RECEPCIONADO"`.
  * **Confirmación de Despacho (Repuestos):** Registro de `FECHA DE ENVÍO` y captura de Guía mediante `INPUT`.
* **Filtrado de Fechas:** Navegación a `Settings` para ajustes de Dashboard.

### 4.2 Acciones Transaccionales (Productividad)

* **Duplicación Inteligente (Nueva Tolva):** Carga masiva de equipos correlativos.
* **Facturación (Integración):** Disparo de emisión fiscal externa.
* **Gestión Documental PDF:** Visualización dinámica de comprobantes mediante `LINK_PDF`.

### 4.3 Comunicación y Onboarding (Easy Share)

El sistema utiliza la lógica de **"Enlaces de Acceso Rápido"** para eliminar la fricción en la comunicación:

* **Onboarding de Clientes (Credenciales):** Envío estructural de usuario, contraseña y enlaces educativos Paso a Paso.
* **Aviso de Despacho Integral:** Acción de **"Compartir Imagen WhatsApp"** (o Comunicado). Genera un mensaje automático que incluye: datos de envío, número de guía, enlace directo a la foto de la guía almacenada en la `BASE DE DATOS IMAGENES` y link de encuesta de satisfacción vinculado al ID del pedido.
* **Comunicación Interna Operativa:** Acción de **"Cargar Comentario de Depósito"** que permite al personal de logística grabar observaciones en el campo `OBSERVACIONES DE PRODUCCIÓN` mediante una ventana de entrada (`INPUT`).
* **Biblioteca Técnica (Instructivos):**
  * **Compartir Instructivo (WhatsApp):** Acciones duales para enviar enlaces de **Google Drive** o clips de **YouTube**, incluyendo el nombre del recurso y su descripción técnica automática.
  * **Vista de Administrador (Open URL):** Acción para que el agente visualice el contenido directamente mediante el `LINK EXPUESTO`.

### 4.4 Inteligencia de Pre-carga (Smart Autofill)

Lógica de "Cascada Condicional", memoria operativa e Integridad Reactiva (Auto-Reset).

### 4.5 Gestión de Cobranzas y Conectividades (RPG 05 03)

Módulo financiero para abonos con integración API (**Xubio**):

* **Triggers de Facturación:** Las acciones de registro de cobro (**Transferencia** o **Cheque**) disparan automáticamente un Bot de integración.
* **Automatización de Comprobantes:** El sistema se comunica con la API de facturación, emite el documento, recupera el número de factura y el link al PDF, estampándolos en el registro de AppSheet para su posterior distribución vía **"PDF Factura"** o **"Compartir Factura ($)"**.
* **Gestión de Cobranza:** Acción de Cheque con requerimiento de número por exigencia de API y Notificación detallada de CBU/Alias.

### 4.6 Integración de Calidad y SGC (Hallazgos)

El sistema permite reportar desvíos detectados durante el soporte hacia el sistema de gestión. La lógica técnica de esta integración se encuentra detallada en el **IT 04 - Manual Técnico SGC**.

## 5. CAPA DE INTELIGENCIA Y AUTOMATIZACIÓN (BOTS)

La arquitectura de **Bots** constituye el motor de ejecución asincrónica y reactiva del ecosistema AppSheet. Su función estratégica es garantizar la consistencia absoluta de los datos entre las operaciones de campo y los sistemas de gestión externa (Fiscal/Contable), eliminando la fricción administrativa y asegurando el estricto cumplimiento de la norma **ISO 9001:2015**.

### 5.1 Automatizaciones de Conectividades (Módulo RPG 05 03)

#### 5.1.1 Integración de Facturación Legal (Facturacion Xubio)

Automatismo de alta prioridad diseñado para la emisión transparente de comprobantes fiscales.

* **Condición de Disparo (Trigger):** Se activa tras la validación administrativa del registro al transicionar el estado a **"FACTURA PENDIENTE"**.
* **Lógica Funcional:** El sistema transfiere de forma segura los metadatos transaccionales (CUIT, volumen de equipos y bonificaciones) hacia la API de facturación (**Xubio**).
* **Integridad de Salida:** Una vez emitido el comprobante, el bot sincroniza el **N° de Factura** legal y el **Link PDF** oficial en el registro de AppSheet para su visualización inmediata.

#### 5.1.2 Registro Contable de Ingresos (Cobrar con Xubio)

Automatización para el cierre administrativo del ciclo de pago y conciliación bancaria.

* **Condición de Disparo:** Detección del cambio de estado a **"COBRADA"** por parte del agente responsable.
* **Lógica Funcional:** Envío automático del comprobante de cobro hacia el sistema contable (invocando la tarea `Enviar cobranza a xubio`). El bot transmite el identificador único y, en caso de pagos con valores, el **N° de Cheque** vinculado.
* **Valor para el SGC:** Garantiza que el ingreso de flujo de caja operativo coincida estrictamente con el registro financiero, alimentando los KPIs de desempeño de cobranza en tiempo real.

### 5.2 Automatizaciones de Gestión de Hardware (Módulo TABLET)

#### 5.2.1 Validación de Identidad Fiscal (Obtener razon social)

Herramienta de normalización de datos para la gestión transparente de partes interesadas.

* **Funcionalidad:** Automatiza la recuperación de la denominación legal del cliente mediante la consulta de CUIT en bases de datos externas.
* **Propósito ISO:** Asegurar la exactitud de la información documentada del cliente, minimizando errores en la emisión de documentos legales y técnicos.

#### 5.2.2 Facturación de Dispositivos (Facturar Kits)

Automatismo especializado para el despacho y facturación de hardware.

* **Función:** Gestiona el flujo fiscal para la entrega de paquetes técnicos (Kits de Tablets).
* **Impacto Operativo:** Asegura que la salida física de equipos esté inmediatamente respaldada por la gestión contable oficial, manteniendo la trazabilidad del stock.

## 6. LÓGICA DE PRESENTACIÓN Y EXPERIENCIA DE USUARIO (UX)

La capa de UX organiza la visualización de datos mediante vistas especializadas, asegurando que cada rol acceda solo a la información pertinente para su proceso (**ISO 9001: 7.5.3**).

### 6.1 Mapa de Navegación y Centros de Operación

El sistema organiza las pantallas en distintos núcleos operativos para facilitar la gestión diaria:

#### **A. Núcleo de Soporte y Calidad (Support Hub) - [ISO AUDITABLE]**

* **ACTIVIDADES SOPORTE:** Es la pantalla principal de trabajo. Organiza todos los tickets mediante una jerarquía temporal y de estado.
* **BASE DE DATOS (TÉCNICO):** Catálogo de infraestructura del cliente (Slice `VISTA_TECNICA`).
* **KPI´S POST VENTA:** Panel de lectura directa de indicadores de rendimiento y tiempos de respuesta.
* **INSTRUCTIVOS DE SOPORTE:** Biblioteca visual de conocimiento técnico documentado.

#### **B. Núcleo de Hardware y Logística (Tablet & Repuestos) - [ISO AUDITABLE]**

* **TABLET PRODUCCIÓN:** Pantalla para configuración técnica y despacho de hardware (Slice `TABLET_PRODUCCION`).
* **PEDIDOS REPUESTOS:** Gestión de solicitudes de piezas.
* **ENVIOS HACIA CORVUS:** Control de recepción y trazabilidad de propiedad externa.

#### **C. Núcleo Administrativo y Comercial - [FUERA DE ALCANCE SGC]**

Las siguientes vistas operan sobre la infraestructura de la empresa como herramientas de apoyo administrativo y no forman parte del alcance certificado:

* **TABLET VENTAS:** Gestión comercial de pedidos de equipos.
* **BASE DE DATOS TOLVA (COMERCIAL):** Centro de gestión de ventas y rentabilidad.
* **DASHBOARD BDT:** Inteligencia estratégica y ranking de vendedores.
* **PRECIOS VENDEDORES:** Consulta de valores de mercado.

> **Nota Técnica:** La tabla `BASE DE DATOS TOLVA` (Google Sheets) actúa como el repositorio unificado de la empresa. Para fines del SGC, solo la información contenida en la solapa de Conectividades y los campos de Post-Venta asociados a equipos constituyen el **RPG 05 03** y el historial de mantenimiento oficial.

#### **D. Gestión de la Satisfacción y Feedback**

* **ENCUESTAS:** Visualización de los resultados de satisfacción del cliente cargados desde campo, permitiendo una reacción rápida ante feedback negativo.

### 6.2 Control de Acceso y Visibilidad (Security Show_If)

El sistema implementa restricciones de visibilidad a nivel de interfaz para proteger datos sensibles y asegurar que cada usuario opere en su zona de responsabilidad.

* **Restricción por Procesos de Campo:** Las vistas de flujo de hardware (`TABLET VENTAS/PRODUCCIÓN`) son invisibles para **SOPORTE**, mientras que la vista de `BAJAS CLIENTES` se oculta para el rol de **DEPÓSITO**.
* **Privacidad Gerencial y de Ventas:** Los paneles estratégicos (`BASE DE DATOS TOLVA COMERCIAL` y `DASHBOARD BDT`) están reservados exclusivamente para los perfiles de **ADMIN** y **VENTAS**, protegiendo la información financiera y el ranking de desempeño.
* **Paneles de Monitoreo Técnico:** El `DASHBOARD SOPORTE` está restringido a **ADMIN** y **SOPORTE**, asegurando que las métricas de resolución y motivos de consulta sean gestionadas por el personal competente.
* **Acceso Operativo Compartido:** Las vistas de consulta técnica (`BASE DE DATOS TÉCNICO`) y de gestión de abonos (`CONECTIVIDADES`) son accesibles para **ADMIN**, **SOPORTE** y **VENTAS**, asegurando la transversalidad de la información necesaria para el servicio.
* **Mecánica de Seguridad:** El sistema valida el correo electrónico institucional del usuario contra la base de datos de personal antes de habilitar los accesos correspondientes.

### 6.3 Dashboards y Análisis Operativo

La aplicación utiliza vistas de tipo Dashboard para permitir un análisis multidimensional en tiempo real. Estos paneles están diseñados en **Modo Interactivo**, permitiendo que al seleccionar un elemento en una vista, el resto de los componentes filtren automáticamente la información relacionada.

* **DASHBOARD SOPORTE (Técnico):** Incluye casos por equipo, motivos de consulta, selector de problemas, análisis de causa raíz y el KPI SLA de cumplimiento de tiempos.
* **DASHBOARD BDT (Estratégico):** Incluye el resumen de deudas, estado de clientes (Activos/Bajas), ranking de ventas por vendedor, el Top 20 de empresas y el inventario de marcas de balanzas y equipos vendidos.

## 7. GESTIÓN DE SATISFACCIÓN DEL CLIENTE (ISO 9001: 9.1.2)

La aplicación actúa como el canal principal de escucha del cliente, asegurando que la percepción del servicio sea capturada de forma inmediata tras la resolución de cada incidente.

### 7.1 Captura y Transaccionalidad

* **Mecanismo de Disparo:** La captura se realiza mediante la acción `ENCUESTA SOPORTE` (Easy Share), la cual envía un enlace personalizado al cliente.
* **Origen de Datos:** La información se centraliza en la tabla `Encuesta de Satisfacción de Soporte Técnico Corvus 2026`.
* **Métricas Evaluadas:** Se registra el nivel de satisfacción general (escala de 1 a 5), comentarios abiertos y la vinculación con el técnico interviniente para análisis de desempeño.

### 7.2 Monitoreo y Mejora Continua

* **Visualización en Tiempo Real:** Los resultados se consolidan en el **Dashboard de Soporte**, permitiendo identificar tendencias negativas antes de que se conviertan en No Conformidades sistémicas.
* **Cálculo de Indicadores (CSAT):** La lógica matemática para el promedio de satisfacción anual y mensual está detallada en el documento **IT 02: Biblioteca de Fórmulas y KPIs**.
* **Vinculación con el SGC:** Las puntuaciones críticas (1 o 2 estrellas) son tratadas como "Hallazgos de Calidad", activando el flujo de análisis de causa raíz documentado en el **PG 03 (No Conformidades)**.

## 8. SEGURIDAD, CONTROL Y BUENAS PRÁCTICAS

El sistema garantiza la integridad de la información y la restricción de accesos mediante una arquitectura jerárquica blindada.

### 8.1 Gestión de Usuarios y Provisioning

* **Habilitación de Personal:** El alta de nuevos técnicos se gestiona a través de la vista interna `EMPLEADOS CORVUS`. El acceso a la aplicación se otorga exclusivamente mediante la inclusión del correo electrónico institucional en esta tabla.
* **Protocolo de Baja:** Para revocar el acceso de forma inmediata, basta con eliminar la fila correspondiente del usuario en la tabla de empleados. El sistema deniega automáticamente el acceso en la próxima sincronización.
* **Control de la Vista de Gestión:** El acceso a la configuración de empleados está restringido mediante la fórmula `IN(ANY(SELECT(EMPLEADOS CORVUS[ROL], [MAIL] = USEREMAIL())), LIST("VENTAS", "ADMIN"))`, asegurando que solo el personal de mayor jerarquía gestione los permisos.

### 8.2 Roles y Privilegios de Dirección

* **Perfil CEO (Mariano):** Debido a su rol estratégico y operativo único, cuenta con privilegios extendidos. Opera bajo el rol de `VENTAS` para flujos transaccionales, pero posee credenciales de "App Editor" para mantenimiento técnico y visibilidad total de las pantallas de gestión.
* **Identificación Progresiva:** Cada registro guardado por el sistema estampa el `USEREMAIL()` del operador, garantizando la trazabilidad total de las acciones (Auditoría ISO 9001).

### 8.3 Integridad del Backend y Testing

* **Protección de Datos (Google Sheets):** El personal operativo no tiene permisos de edición directa sobre las hojas de cálculo del Backend. Toda interacción debe ocurrir a través de la interfaz de AppSheet, evitando la manipulación accidental de fórmulas o registros históricos.
* **Ciclo de Mejora Continua:** Los cambios técnicos y nuevas fórmulas son testeados inicialmente por el RSGC. Antes de su implementación final, se recolecta el feedback directo de los empleados para validar la usabilidad y eficacia del flujo, cumpliendo con el espíritu de mejora de la norma.

## 9. DOCUMENTOS DE REFERENCIA (MARCO PROCEDIMENTAL)

| Código | Nombre |
| :--- | :--- |
| PG 01 | Control de Documentos y Registros |
| PG 03 | No Conformidades y Acciones Correctivas |
| PG 05 | Post Venta y Soporte Técnico |
| IT 02 | Biblioteca de Fórmulas y KPIs AppSheet |
| IT 03 | Manual de Alertas y Notificaciones Automáticas |

## 10. REGISTROS ASOCIADOS (EVIDENCIA OPERATIVA)

| Código | Nombre | Relación con la App |
| :--- | :--- | :--- |
| RPG 01 01 | Listado Maestro de Documentos | Control de versión del presente manual. |
| RPG 02 02 | Objetivos e Indicadores | Cálculo automático de SLAs y CSAT. |
| RPG 05 01 | Registro de Actividades de Soporte | Núcleo transaccional de tickets. |
| RPG 05 02 | Listado de Instructivos de Soporte | Pantalla "INSTRUCTIVOS SOPORTE". |
| RPG 05 03 | Pedido de Repuestos | Módulo de logística de piezas. |
| RPG 05 04 | Envío de Clientes hacia Corvus | Pantalla "ENVIOS HACIA CORVUS". |
| RPP 05 05 01 | Conectividades | Integración financiera (Xubio). |

## 11. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00-13 | 08-12/01 | Versiones iniciales y mapeo progresivo de acciones manuales y flujos de soporte. | RSGC |
| 14-19 | 12/01/2026 | Formalización técnica de bots, lógica UX, satisfacción del cliente y seguridad avanzada. | RSGC |
| 20 | 12/01/2026 | **Trazabilidad de Evidencia:** Desglose de documentos de referencia y registros asociados (RPGs) para máxima transparencia. | RSGC |
| 21 | 12/01/2026 | **Definición de Alcance (ISO 9001):** Incorporación de avisos de exclusión para módulos comerciales y administrativos fuera del alcance certificado. | RSGC |
| 22 | 12/01/2026 | **Sincronización de Pantallas:** Ajuste final de registros asociados incorporando Instructivos (RPG 05 02) y Envíos (RPG 05 04). | RSGC |
| 23 | 13/01/2026 | **Depuración SGC:** Traslado de lógica y registros del SGC al nuevo IT 04. Estandarización de encabezados digitales y trazabilidad normativa. | RSGC |
