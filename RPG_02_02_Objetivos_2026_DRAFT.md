# RPG 02 02 - Objetivos e Indicadores de Calidad (Ciclo 2026)

**Estado:** BORRADOR DE TRABAJO
**Alcance:** Soporte Técnico, Capacitación y Post-Venta (Exclusivo)

---

## 1. Objetivo Estratégico: Eficiencia Operativa en Soporte
*Alineado a la Política de Calidad: "Mejora continua y agilidad en el servicio"*

| Indicador (KPI) | **Tiempo Promedio de Resolución (TPR)** |
| :--- | :--- |
| **Definición** | Promedio de horas transcurridas desde la apertura ("Nuevo") hasta el cierre ("Resuelto") de tickets Nivel 1. |
| **Fórmula** | `Promedio(Fecha_Cierre - Fecha_Apertura)` en tickets Nivel 1. |
| **Meta 2026** | **< 24 Horas** (en días hábiles). |
| **Frecuencia** | Mensual (Reporte automático AppSheet). |
| **Fuente de Datos** | AppSheet: Tabla `Casos_Soporte`. |

---

## 2. Objetivo Estratégico: Calidad de Capacitación
*Alineado a la Política de Calidad: "Capacitación constante del usuario"*

| Indicador (KPI) | **Índice de Satisfacción de Usuario (CSAT-Cap)** |
| :--- | :--- |
| **Definición** | Promedio de calificación obtenida en encuestas post-capacitación. |
| **Fórmula** | `Promedio(Puntaje_Encuesta)` sobre base 5. |
| **Meta 2026** | **> 4.5 / 5.0** |
| **Frecuencia** | Trimestral (Acumulado por campañas). |
| **Fuente de Datos** | AppSheet / Google Forms: Tabla `Encuestas_Cap`. |

---

## 3. Objetivo Estratégico: Fiabilidad Preventiva
*Alineado a la Política de Calidad: "Confiabilidad del servicio"*

| Indicador (KPI) | **Cumplimiento de Mantenimiento Preventivo** |
| :--- | :--- |
| **Definición** | Porcentaje de equipos/chips activos revisados antes del inicio de campaña. |
| **Fórmula** | `(Equipos_Revisados / Total_Parque_Activo) * 100` |
| **Meta 2026** | **100% al 28 de Febrero**. |
| **Frecuencia** | Anual (Cierre pre-campaña). |
| **Fuente de Datos** | AppSheet: Tabla `Inventario_Chips` / `Estado_Revisión`. |

---

### Notas de Implementación (Acciones para NC #131)
1.  **AppSheet:** Se deben crear las vistas ("Slices") para calcular estos promedios automáticamente.
2.  **RPG 05 01:** El registro de actividades debe tener obligatorios los campos `Fecha Inicio` y `Fecha Fin` para que el KPI 1 funcione.
