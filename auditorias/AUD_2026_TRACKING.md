<link rel="stylesheet" href="../reporte-estilo.css">

# Informe de Auditoría Interna Consultiva - SGC Corvus

| Auditor | Fecha Inicio | Tipo de Auditoría | Estado |
| :--- | :--- | :--- | :--- |
| Antigravity (IA) | 05/01/2026 | Consultiva / Mejora | **EN CURSO** |

## 1. Alcance y Criterios

* **Alcance:** Servicio de soporte técnico del sistema de información informatizado AGDP, capacitación y post venta.
* **Criterios:** ISO 9001:2015, Procedimientos Generales (PG) y Particulares (PP) de Corvus.
* **Objetivo:** Evaluar la conformidad del sistema y la eficacia de la transición digital (AppSheet).

---

## 2. Plan de Auditoría (Fases)

| Fase | Proceso / Documentos | Estado |
| :--- | :--- | :--- |
| **01. Planificación** | Contexto (RC 01), Liderazgo (PG 02), Objetivos (RPG 02 01) | 🔄 Actual |
| **02. Operación (Soporte)** | PG 05, PPs de Soporte, AppSheet Workflow | ⏳ Pendiente |
| **03. Mejora Continua** | Gestión de NC (PG 03), Seguimiento de AC | ⏳ Pendiente |

---

## 3. Bitácora de Hallazgos (Tracking)

| ID | Proceso | Cláusula ISO | Descripción del Hallazgo / Observación | Tipo | Acción Sugerida (Consultoría) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| H01 | Planificación | 7.5 | Discrepancia .md vs Nube. Usuario instruye ignorar el local para registros. | Obs | Eliminar o deprecar los .md de la carpeta `/docs_editables` que sean registros (RPG/RC). |
| H02 | Planificación | 4.3 | Identificación de Alcance: Se confirma que los riesgos de "Desarrollo/Software" están excluidos del SGC. | Info | No auditar acciones sobre riesgos D-01, D-02, D-05, etc. |
| H03 | Planificación | 6.1 | Riesgos 2026: El sistema se encuentra en fase de transición. No se esperan tratamientos cerrados a fecha 05/01. | Info | El auditor verificará la *existencia* de los planes, no su ejecución. |
| H04 | Planificación | 6.2 | Objetivos Soporte 2026: En definición. Inicio de actividades en Feb/Mar. | Info | Posponer auditoría de indicadores de desempeño operacional hasta el cierre del Q1. |
| H05 | Operación | 8.5.1 | Revisión RPG Soporte (Nube): Se observa una alta estandarización en MOTIVOS y ACCIONES. | Fort | El uso de categorías fijas facilita el análisis posterior de datos y BI. |
| H06 | Operación | 8.5.1 | Hallazgo de placeholders: Se detectan registros (IDs 5, 92, 93) con la leyenda "- INDICAR ACCIÓN TOMADA -". | OM | Ajustar la validación en AppSheet para que no permita salvar con el valor por defecto del placeholder. |

---

## 4. Conclusiones Preliminares

*Pendiente de ejecución.*
