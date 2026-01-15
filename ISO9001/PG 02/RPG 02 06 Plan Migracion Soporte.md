<link rel="stylesheet" href="../../reporte-estilo.css">

# RPG 02 06 - Plan de Migración Soporte AppSheet - Rev. 00

| REGISTRO | RPG 02 06 |
| :--- | :--- |
| **CONTROL DE CAMBIOS (ANEXO)** | **Rev. 00** |
| **Fecha Emisión:** 04/01/2026 | **ID Cambio:** CC-2026-02-SOP |
| **Elabora:** RSGC | **Aprueba:** Dirección |

---

## 1. Datos Generales

| ID Cambio | Fecha Solicitud | Solicitado por | Área Afectada |
| :--- | :--- | :--- | :--- |
| **CC-2026-02-SOP** | 04/01/2026 | Responsable SGC | Soporte / Post Venta |

---

## 2. Descripción del Cambio

Migración operativa del proceso de **Post Venta y Soporte Técnico (PG 05)** desde registros manuales/aislados hacia un ecosistema integrado en **AppSheet**.
Este plan es un anexo operativo del cambio principal **CC-2026-01 (Migración SGC)**.

El cambio incluye:

* Adecuación estructural de registros de soporte para funcionar con **AppSheet**.
* Centralización de módulos operativos (Tickets, Instructivos, Repuestos, Envíos, Conectividades).
* **Dashboard de KPIs** con indicadores de gestión de soporte.
* Backup completo de datos de soporte en un click.

## 3. Justificación (Por qué ahora)

1. **Base de Conocimiento:** Acceso inmediato a instructivos (`RPG 05 02`) y videos técnicos.
2. **Trazabilidad de Casos:** Mejorar la trazabilidad de casos mediante una carga simplificada y agilizada.
3. **Trazabilidad de Equipos:** Seguimiento del ciclo de vida de un equipo (Ingreso → Reparación → Egreso/Envío).
4. **Gestión de Cobranzas:** Mejor seguimiento de estados de facturación, organización y agilidad en el proceso de cobro.
5. **Control de Gestión:** Indicadores en tiempo real y alertas automáticas.

## 4. Alcance de la Migración

| Registro / Proceso | ¿Migra? | Detalle de Implementación Digital |
| :--- | :---: | :--- |
| **RPG 05 01 - Registro Actividades** | ✅ SI | Módulo principal **"SOPORTE (ACTIVOS)"**. Registro de tickets y seguimiento de casos. |
| **RPG 05 02 - Instructivos (KB)** | ✅ SI | Módulo **"INSTRUCTIVOS DE SOPORTE"**. Buscador de soluciones y link directo a videos. |
| **RPG 05 03 - Pedido Repuestos** | ✅ SI | Módulo **"PEDIDOS REPUESTOS"**. El técnico pide la pieza desde la orden de trabajo. |
| **RPG 05 04 - Logística (Envíos)** | ✅ SI | Módulo **"ENVÍOS HACIA CORVUS"**. Control de equipos enviados **por el cliente** hacia Corvus. Registro de guía de transporte de entrada. |
| **RPP 05 05 01 - Conectividades** | ✅ SI | Módulo **"CONECTIVIDADES"**. Gestión de vencimientos y estados de facturación (Pendiente/Cobrado). |
| **Base de Clientes** | ✅ SI | Sincronización (Lectura) desde Xubio/Maestro Clientes. |

## 5. Análisis de Impacto y Riesgos

| Riesgo Detectado | Impacto | Acción de Mitigación |
| :--- | :--- | :--- |
| **Inexactitud en datos históricos post-transformación** | Alto | Reconstrucción "best-effort" de registros de tickets y soporte. Priorizar integridad de casos activos. Aceptar pérdida parcial de metadata histórica. |
| **Edición directa del Excel bypaseando la App** | Alto | Restringir permisos del Excel a "Solo lectura" para usuarios finales. Solo RSGC mantiene acceso de edición para mantenimiento. |
| **Errores en la reestructuración de datos** | Alto | Validación cuidadosa de cada cambio. Incorporaciones y ediciones paulatinas con grabaciones de la app para asegurar correcto funcionamiento. |
| **Fallas no detectadas en fase piloto** | Medio | Implementación incremental de funcionalidades (por módulos). Piloto con grupo reducido, revisión de feedback y ajustes antes de cada expansión. |
| **Resistencia al cambio del personal** | Medio | Capacitación práctica con casos reales. Feedback iterativo en fase piloto. Soporte intensivo post go-live. |
| **Dependencia tecnológica (AppSheet)** | Bajo | Mantener backup mensual en Excel. Evaluar alternativas en revisión anual. |

## 6. Recursos Necesarios

* **Licencias:** AppSheet (Versión Gratuita).
* **Infraestructura:** Equipos informáticos y conectividad provistos por la empresa (Recursos Existentes).

## 7. Plan de Ejecución

| # | Actividad | Responsable | Fecha Límite |
| :--- | :--- | :--- | :--- |
| 0 | **Investigación** (Auto-capacitación en AppSheet) | RSGC | 05/01/2026 |
| 1 | **Blindaje de Excels** (Restringir permisos a Solo Lectura) | RSGC | 08/01/2026 |
| 2 | **Prototipado** (Tablas base, UX Básica) | RSGC | 10/01/2026 |
| 3 | **Datos Legacy** (Refactorización de registros históricos) | RSGC | 15/01/2026 |
| 4 | **Configuración de Módulos** (Pantallas según alcance definido) | RSGC | 15/01/2026 |
| 5 | **Alertas y Automatismos** (Format Rules, notificaciones) | RSGC | 18/01/2026 |
| 6 | **Piloto** (Pruebas con grupo reducido) | RSGC | 20/01/2026 |
| 7 | **Ajustes** (Refinar automatismos y envíos de PDF) | RSGC | 25/01/2026 |
| 8 | **Capacitación** (Formación práctica al equipo) | RSGC | 28/01/2026 |
| 9 | Go-Live (Inicio uso obligatorio) | Todos | 01/02/2026 |
| 10 | Verificación de Eficacia (Auditoría de tickets y uso) | RSGC | 15/03/2026 |

---

## 8. Validación y Aprobación

| Rol | Nombre | Fecha | Firma / Resultado |
| :--- | :--- | :--- | :--- |
| **Revisión (RSGC)** | [Nombre RSGC] | 04/01/2026 | ☑ Aprobado <br> ☐ Rechazado |
| **Dirección** | [Nombre Director] | 04/01/2026 | ☑ Aprobado <br> ☐ Rechazado |
