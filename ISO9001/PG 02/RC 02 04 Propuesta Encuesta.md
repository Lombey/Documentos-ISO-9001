<link rel="stylesheet" href="../../reporte-estilo.css">

# RC 02 04 - Propuesta Encuesta de Satisfacción Post-Soporte

| REGISTRO DE CALIDAD | RC 02 04 |
| :--- | :--- |
| **ENCUESTA DE SATISFACCIÓN** | **Rev. 01** |
| **Formato:** Google Forms | **Vínculo:** Post-Resolución |
| **Fecha de Revisión:** 11/01/2026 | **Responsable:** RSGC |

---

## 1. OBJETIVO

Medir la percepción del cliente respecto a la agilidad, efectividad y trato del soporte técnico de Corvus (ISO 9001:2015 9.1.2) para alimentar los indicadores del RPG 02 02.

## 2. ESTRUCTURA DE LA ENCUESTA (Optimización < 30 seg)

### Q1. ID del Caso (Automático)

* *Campo oculto para vincular con el registro de AppSheet.*

### Q2. Satisfacción General (KPI Principal) ⭐

**¿Qué tan satisfecho está con el servicio de soporte recibido hoy?**

* Escala: ⭐ (Muy Insatisfecho) a ⭐⭐⭐⭐⭐ (Excelente).
* *Alimenta el indicador "Satisfacción del Cliente" (Meta > 4.2).*

### Q3. Nivel de Esfuerzo (Agilidad)

**¿Qué tan fácil fue para usted contactar y resolver su problema?**

* ( ) Muy fácil y rápido.
* ( ) Se resolvió en tiempos normales.
* ( ) Fue difícil o tomó mucho tiempo.

### Q4. Efectividad de Instructivos (Calidad)

**Si le enviamos un instructivo/video: ¿Fue suficiente para resolver su duda?**

* ( ) Sí, fue muy claro y útil.
* ( ) Fue útil, pero necesité asistencia adicional.
* ( ) No me sirvió / Prefiero atención manual.
* *Alimenta el indicador "Efectividad de Instructivos" (Meta > 50%).*

### Q5. Comentarios de Mejora (Abierta)

**¿Hay algo que podamos hacer para que su próxima experiencia sea mejor?**

* (Campo de texto libre breve).

---

## 3. MECÁNICA DE IMPLEMENTACIÓN (MUESTREO)

1. **Metodología:** Encuesta selectiva por muestreo.
2. **Canales Habilitados:**
    * **Logística (Integrado):** Link anexado automáticamente al compartir la Guía de Envío (Repuestos/Reparaciones).
    * **Soporte (Botón):** Acción dedicada en AppSheet (**"Enviar Encuesta"**) para casos de asistencia técnica pura.
    * **Manual:** Respuesta Rápida de WhatsApp (`/encuesta`) como backup.
3. **Monitoreo:** Los resultados impactan en el Dashboard de Gestión del SGC (Vista de KPI centralizada - Donut Chart).
