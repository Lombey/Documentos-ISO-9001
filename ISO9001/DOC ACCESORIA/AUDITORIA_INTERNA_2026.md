---
tipo: documento_auditoria
revision: "01"
last_updated: "24/02/2026"
responsible: "RSGC"
estado: "EN_PROGRESO"
---

# Auditoría Interna SGC Corvus 2026

| DOCUMENTO | Auditoría Interna |
| :--- | :--- |
| **AUDITORÍA INTERNA SGC** | **Rev. 01** |
| **Fecha Inicio:** 24/02/2026 | **Fecha Cierre:** — |
| **Elabora:** RSGC | **Revisa y Aprueba:** Dirección |

---

## Clasificación de Hallazgos

| Tipo | Definición |
| :--- | :--- |
| **NC** | No Conformidad — incumplimiento directo de un requisito ISO 9001:2015 |
| **OBS** | Observación — situación que puede devenir en NC si no se atiende |
| **OM** | Oportunidad de Mejora — no incumple la norma pero fortalece el SGC |

---

## Documentos Revisados

| Doc | Descripción | Estado |
| :--- | :--- | :--- |
| MGC Rev. 13 | Manual de Gestión de Calidad | ✅ Revisado |
| PG 01 Rev. 07 | Control de Documentos y Registros | ✅ Revisado |
| PG 05 Rev. 10 | Post Venta | ✅ Revisado |
| PG 02 Rev. 08 | Dirección | ✅ Revisado |
| PG 03 Rev. 02 | No Conformidades | ✅ Revisado |
| PG 04 Rev. 04 | Auditorías | ✅ Revisado |
| PG 06 Rev. 05 | RRHH | ✅ Revisado |
| PG 07 Rev. 05 | Compras y Proveedores | ✅ Revisado |
| PG 08 Rev. 02 | Infraestructura | ✅ Revisado |

---

## Hallazgos

### H-01 | OBS | PG 05 — Ciclo abierto: bugs no críticos → Desarrollo

**Cláusula ISO:** 8.5.1 — Control de la provisión del servicio
**Descripción:** Cuando un error de plataforma (bug) no compromete la integridad del servicio, el caso puede transferirse informalmente a Desarrollo sin que el SGC mantenga trazabilidad del cierre. El estado "PENDIENTE DESARROLLO" fue removido del flujo de AppSheet, dejando un gap en el ciclo de vida del caso.
**Evidencia:** PG 05 sección 5.2.2 — no contempla estado intermedio para bugs en desarrollo.
**Acción requerida:** Restituir estado **"PENDIENTE DESARROLLO"** en AppSheet. El caso no debe cerrarse hasta que el fix sea desplegado y verificado con el cliente.
**Responsable:** RSGC
**Estado:** 🔴 Abierto — acordado en auditoría

### H-02 | OBS | PG 04 — Requisito de auditor certificado: sobre-documentación autoimpuesta

**Cláusula ISO:** 9.2.2 c) — Selección de auditores
**Descripción:** La sección 5.1 de PG 04 exige que los auditores internos cuenten con certificado y acrediten experiencia en al menos 2 auditorías de entrenamiento como observadores. ISO 9001 no requiere certificación formal — solo competencia e imparcialidad. Al incorporar este requisito en el procedimiento propio, la organización queda obligada a cumplirlo bajo pena de NC contra su propio SGC.
**Evidencia:** PG 04 sección 5.1.
**Acción requerida:** Simplificar criterio de selección de auditores en 5.1 eliminando exigencia de certificado y auditorías de entrenamiento. Reemplazar por: competencia demostrable (formación, experiencia o conocimiento documentado) + independencia del sector auditado.
**Responsable:** RSGC
**Estado:** 🔴 Abierto — acordado en auditoría

---

### H-03 | OBS | PG 03 — Revisión de NCs abiertas y vencidas (pendiente sesión dedicada)

**Cláusula ISO:** 10.2 — No conformidades y acciones correctivas
**Descripción:** El registro RPG 03 01 tiene NCs abiertas que requieren revisión urgente: NC #130 vencida (01/02/2026 sin cierre), NC #119/#125/#128 con vencimiento 01/03/2026, y NC #131 sin fecha comprometida. Adicionalmente: el tipo "CM" no está definido en PG 03, y el nombre del archivo local no coincide con el nombre oficial en Drive.
**Acción requerida:** Sesión dedicada para revisar y actualizar estado de NCs abiertas. Incorporar definición de "CM" en PG 03 sección 5.2 como clasificación de auditores externos (equivalente a OM interna, se preserva nomenclatura original del certificador). Revisar NC #116 (cerrada sin AC). Sincronizar nombre archivo local.
**Responsable:** RSGC
**Estado:** 🟡 Pendiente sesión dedicada

---

## Puntos a Verificar en Próximas Etapas

| # | Origen | Pendiente | A revisar en |
| :--- | :--- | :--- | :--- |
| V-01 | PG 01 s.5.2.6 | Evidencia de consultas mensuales a documentos externos | PG 01 / Drive |
| ~~V-02~~ | ~~PG 06~~ | ~~Registro de comunicación a freelancers~~ | ❌ Descartado — premisa incorrecta, freelancers no verificados en el SGC |
| ~~V-03~~ | ~~PG 02~~ | ~~Histórico de KPIs por temporada~~ | ✅ Verificado — valores de cierre se archivan en RPG 02 02 |

---

## Historial de Cambios

| Fecha | Rev. | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 24/02/2026 | 01 | Documento inicial. MGC, PG 01 y PG 05 revisados. | RSGC |
