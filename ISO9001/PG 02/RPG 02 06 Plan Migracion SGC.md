<link rel="stylesheet" href="../../reporte-estilo.css">

# RPG 02 06 - Plan de Migración SGC - Rev. 03

| REGISTRO DE PROCEDIMIENTO | RPG 02 06 |
| :--- | :--- |
| **CONTROL DE CAMBIOS** | **Rev. 03** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 04/01/2026 |
| **Elabora:** RSGC | **Revisa y Aprueba:** Dirección |

---

## 1. Datos Generales

| ID Cambio | Fecha Solicitud | Solicitado por | Área Afectada |
| :--- | :--- | :--- | :--- |
| **CC-2026-01** | 04/01/2026 | Responsable SGC | SGC / Soporte / Administración |

---

## 2. Descripción del Cambio

Migración integral de los registros operativos y de soporte del Sistema de Gestión de Calidad, pasando del formato tradicional (Planillas de Cálculo aisladas en Drive) a una plataforma unificada de aplicación móvil (**AppSheet**) vinculada a una base de datos centralizada.

El cambio incluye la reestructuración de registros clave:

* Adecuación estructural interna de RPGs para funcionar con **AppSheet**.
* Migración de todos los documentos para estar dentro de la app y permitir el backup completo en un click.
* **Dashboard de KPIs** con cálculo automático de indicadores y semáforos.
* Adecuaciones de documentación para simpleza de operación y manejo de la norma, como por ej. la gestión unificada de **Capacitaciones** (Plan + Registro), la unificación de la gestión de **Auditorías** en un solo documento, o la separación de las evaluaciones del documento de perfiles.

> **Nota:** Para el detalle operativo de la migración de Soporte Técnico y Logística, referirse al Anexo Específico: **CC-2026-02-SOP (Plan Migración Soporte)**.

## 3. Justificación (Propósito)

* **Integridad de Datos:** Eliminar la duplicidad de versiones y errores de transcripción mediante validaciones automáticas.
* **Gestión de Evidencia:** Centralizar documentos y registros vinculados a cada proceso para facilitar auditorías.
* **Agilidad Operativa:** Cargas simplificadas y acciones automáticas que reducen la burocracia administrativa.
* **Control de Gestión:** Automatizar alertas de vencimientos (Semáforos) y facilitar el cálculo de indicadores.

## 4. Análisis de Impacto y Riesgos (Integridad del SGC)

| Riesgo Detectado | Impacto | Acción de Mitigación |
| :--- | :--- | :--- |
| **Inexactitud en datos históricos post-transformación** | Alto | Reconstrucción "best-effort" de registros históricos. Priorizar integridad de datos críticos (NC, Auditorías). Aceptar pérdida parcial de metadata histórica como trade-off del avance. |
| **Edición directa del Excel bypaseando la App** | Alto | Restringir permisos del Excel a "Solo lectura" para usuarios finales. Solo RSGC mantiene acceso de edición para mantenimiento. |
| **Resistencia al cambio del personal** | Medio | Capacitación obligatoria (CAP-03) + soporte intensivo 15 días post go-live. |
| **Errores en la reestructuración de datos** | Medio | Validación cuidadosa de cada cambio. Incorporaciones y ediciones paulatinas con grabaciones de la app para asegurar correcto funcionamiento. |
| **Dependencia tecnológica (AppSheet)** | Bajo | Mantener backup mensual en Excel según PG 01. Evaluar alternativas en revisión anual. |
| **Retraso en actualización documental** | Medio | Actualización progresiva de PGs en paralelo al avance del proyecto. Checkpoints de alineación documental. |

### Tabla de Alcance Definido

| Documento / Proceso | ¿Migra a App? | Detalle de Implementación |
| :--- | :---: | :--- |
| **RPG 01 01 - Listado Maestro** | <span class="iso-check">✓</span> SI | Módulo de consulta de documentos vigentes. |
| **RC 01 - Riesgos (Tabla)** | <span class="iso-check">✓</span> SI | Gestión dinámica y semáforo de riesgo. |
| **RC 01 - FODA (Análisis)** | <span class="iso-cross">✕</span> NO | Se mantiene visualización Matriz en Google Sheets. |
| **RPG 02 02 - Indicadores** | <span class="iso-check">✓</span> SI | **Dashboard de Gestión** con gráficas en tiempo real. |
| **RPG 02 03 - Minutas** | <span class="iso-check">✓</span> SI | Índice histórico con vínculo a documentos PDF (Revisión Dirección). |
| **RPG 02 06 - Control Cambios** | <span class="iso-check">✓</span> SI | Registro de cambios planificados y su estado. |
| **RPG 03 01 - No Conformidades** | <span class="iso-check">✓</span> SI | Carga de hallazgos, fotos y cierre. Se bloquea Excel. |
| **RPG 04 01 - Programa Auditorías**| <span class="iso-cross">✕</span> NO | **OBSOLETO**. Se unifica en RPG 04 02. |
| **RPG 04 02 - Gestión Auditorías**| <span class="iso-check">✓</span> SI | Unifica Planificación + Historial (Int/Ext). |
| **RPG 05 01 - Soporte** | <span class="iso-cross">✕</span> NO | Se gestiona en **App Gestión de Soporte** (Independiente/Xubio). |
| **RPG 06 01 - Perfiles de Puesto** | <span class="iso-check">✓</span> SI | Módulo de consulta de responsabilidades y competencias (Estático). |
| **RPG 06 07 - Evaluación Desempeño**| <span class="iso-check">✓</span> SI | Nuevo registro dinámico separado del perfil. Formulario AppSheet. |
| **RPG 06 02 - Plan Capacitación** | <span class="iso-cross">✕</span> NO | **OBSOLETO**. Se unifica en RPG 06 06. |
| **RPG 06 03 - Reg. Capacitación** | <span class="iso-cross">✕</span> NO | **OBSOLETO**. Se unifica en RPG 06 06. |
| **RPG 06 06 - Capacitaciones** | <span class="iso-check">✓</span> SI | Gestión Integral con Plan + Asistencia Unificada. |
| **RPG 07 01 - Proveedores** | <span class="iso-check">✓</span> SI | Agenda y calificación de desempeño. |

## 5. Recursos Necesarios

* [x] **Plataforma:** Licencia Google AppSheet (Modo Prototipo <10 usuarios / Core).
* [x] **Dispositivos:** Equipos informáticos provistos por la empresa (Recursos Existentes).
* [x] **Horas Hombre:** 20hs Configuración RSGC + 4hs Capacitación Personal.

## 6. Plan de Ejecución

| # | Actividad | Responsable | Fecha Límite |
| :--- | :--- | :--- | :--- |
| 0 | **Investigación** | RSGC | 02/01/2026 |
| 1 | **Blindaje de Excels** (Restringir permisos a Solo Lectura) | RSGC | 08/01/2026 |
| 2 | Diseño de Estructura de Datos (Tablas base AppSheet) | RSGC | 10/01/2026 |
| 3 | Adecuación de Datos Históricos (Auditorías/Capacitaciones/NC) | RSGC | 15/01/2026 |
| 4 | **Configuración de Módulos** (Pantallas según alcance definido) | RSGC | 15/01/2026 |
| 5 | **Alertas y Automatismos** (Format Rules, notificaciones, semáforos) | RSGC | 18/01/2026 |
| 6 | **Documentación Técnica** (Creación IT 04 Manual Admin) | RSGC | 20/01/2026 |
| 7 | **Piloto y Validación** (Pruebas con grupo reducido) | RSGC | 25/01/2026 |
| 8 | Capacitación al Personal (Taller CAP-03) | RSGC | 30/01/2026 |
| 9 | **Actualización Documental** (PG y RPGs) | RSGC | 31/01/2026 |
| 10 | Go-Live (Inicio uso obligatorio) | Todos | 01/02/2026 |
| 11 | Verificación de Eficacia (Auditoría de Registros) | RSGC | 15/03/2026 |

---

## 7. Validación y Aprobación

| Rol | Nombre | Fecha | Firma / Resultado |
| :--- | :--- | :--- | :--- |
| **Revisión (RSGC)** | [Nombre RSGC] | 04/01/2026 | ☑ Aprobado <br> ☐ Rechazado |
| **Dirección** | [Nombre Director] | 04/01/2026 | ☑ Aprobado <br> ☐ Rechazado |
