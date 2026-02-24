---
google_drive_id: "ID_PENDIENTE"
revision: "00"
last_updated: "13/01/2026"
responsible: "RSGC"
---

<link rel="stylesheet" href="../reporte-estilo.css">

# Guía de Configuración: Sistema de Reporte Silencioso SGC

Este documento detalla los pasos técnicos para implementar el flujo de **Detección Técnica -> Reporte al SGC** mediante la tabla de Hallazgos, integrando las dos Apps (Operatoria y SGC).

---

## 1. PREPARACIÓN DE LA BASE DE DATOS (EXCEL)

### Tabla: HALLAZGOS_SGC (Pestaña nueva en RPG 03 01)

Asegura que tenga estas columnas exactas:

* `ID_HALLAZGO`
* `FECHA_REPORTE`
* `AGENTE`
* `ORIGEN_TABLA`
* `ID_REGISTRO_ORIGEN`
* `HALLAZGO_TECNICO`
* `ESTADO_RSGC` (Valores: Pendiente / Descartado / Convertido a NC)
* `ID_NC_VINCULADA`
* `OBSERVACIONES_RSGC`

### Tablas Operativas (Repuestos / Envíos / Soporte)

En cada tabla donde quieras activar el reporte, agregá esta columna física:

* `ESTADO_SGC` (Tipo: Enum)

---

## 2. CONFIGURACIÓN EN APP "OPERATORIA" (TÉCNICOS)

### A. Configuración de Accesos (Nueva UI 2025)

1. **Data:** Seleccioná la tabla `HALLAZGOS_SGC`.
2. Hacé clic en el ícono del **Lápiz** (Edit) o en la pestaña **Table Settings** (ícono ⚙️).
3. Buscá la sección **Access / Update Mode**.
4. En **"Are updates allowed?"**, seleccioná **`Adds`** solamente (destildá Updates y Deletes). Esto garantiza que el técnico solo pueda enviar, no ver ni borrar.
5. **UX / Views:** Si AppSheet creó una vista automática de "Hallazgos SGC", **borrala** desde el menú UX -> Views para que la tabla sea invisible para el usuario.

### B. Configuración de Columnas (En tabla operativa, ej: Repuestos)

Buscá la columna **`ESTADO_SGC`**:

* **Type:** Enum.
* **Values:** `NORMAL`, `REPORTABLE`, `REPORTADO`.
* **Editable:** OFF.
* **Initial Value:** (Esto automatiza la detección física para que se vea en las listas)

    ```appsheet
    IF([ALERTA_VIRTUAL] = TRUE, "REPORTABLE", "NORMAL")
    ```

* **Reset on edit?**: (Fórmula de frasquito)

    ```appsheet
    [ESTADO_SGC] <> "REPORTADO"
    ```

    *(Nota: Reemplazá `[ALERTA_VIRTUAL]` por el nombre real de tu columna de alerta).*

### C. Lógica de Visibilidad (Show_If del Botón)

El botón de reporte solo debe aparecer cuando:

1. La alerta virtual es POSITIVA (`[ALERTA_VIRTUAL] = TRUE`).
2. El registro aún no ha sido reportado (`[ESTADO_SGC] = "NORMAL"`).

Fórmula para el **Only if this condition is true** de la Acción:

```appsheet
AND(
  [ESTADO_SGC] = "REPORTABLE",
  USERROLE() = "Admin"
)
```

*(Nota: Ajustar el rol según quién deba tener permiso para reportar).*

---

## 3. CREACIÓN DE ACCIONES (EL BOTÓN POKA-YOKE)

Debes crear **3 acciones** en la tabla operativa (ej: Repuestos):

### Acción 1: Crear Hallazgo

* **Name:** `SGC_Crear_Hallazgo`
* **Do this:** "Data: add a new row to another table using values from this row"
* **Table to add to:** `HALLAZGOS_SGC`
* **Map Columns:**
  * `ID_HALLAZGO`: `UNIQUEID()`
  * `FECHA_REPORTE`: `NOW()`
  * `AGENTE`: `USEREMAIL()`
  * `ORIGEN_TABLA`: `"REPUESTOS"` (Escribilo entre comillas)
  * `ID_REGISTRO_ORIGEN`: `[ID UNICO]` (O tu Key)
  * `HALLAZGO_TECNICO`: `[ALERTA_REINCIDENCIA_DINAMICA]` (Copia el texto de tu alerta)
  * `ESTADO_RSGC`: `"Pendiente"`

### Acción 2: Cambiar Estado Local

* **Name:** `SGC_Cambiar_Estado_Local`
* **Do this:** "Data: set the values of some columns in this row"
* **Set these columns:** `ESTADO_SGC` = `"REPORTADO"`

### Acción 3: BOTÓN FINAL (Agrupado)

* **Name:** `REPORTAR HALLAZGO`
* **Do this:** "Grouped: execute a sequence of actions"
* **Actions:** Seleccioná la 1 y la 2 (en ese orden).
* **Only if this condition is true:** (Usar la fórmula del punto 2.C anterior).
* **Appearance:** Ícono de "Enviar" o "Lupa". Color Naranja.

---

## 4. FORMAT RULES (EL SEMÁFORO VISUAL)

Crea dos reglas en **UX -> Format Rules** para que el técnico sepa qué reportar y qué ya está procesado.

### Regla 1: ALARMA (Pendiente de Reportar)

Esta regla hace que el registro "grite" cuando detecta algo crítico pero aún no se pulsó el botón.

* **Rule Name:** `SGC_Alerta_Pendiente`
* **Condition:** `AND([ALERTA_VIRTUAL] = TRUE, [ESTADO_SGC] = "NORMAL")`
* **Format these columns:** `CLIENTE`, `ID UNICO` (y cualquier otra columna clave).
* **Format:** Icono ⚠️ (Warning) o 🔔 (Bell). Texto en **Bold**. Color **NARANJA/ROJO**.

### Regla 2: ÉXITO (Ya fue Reportado)

Esta regla confirma que el reporte ya está en el SGC. **IMPORTANTE:** No incluyas la alerta virtual aquí, solo el estado.

* **Rule Name:** `SGC_Caso_Reportado`
* **Condition:** `[ESTADO_SGC] = "REPORTADO"`
* **Format these columns:** `CLIENTE`
* **Format:** Icono ✅ (Check_Circle). Color **VERDE**.
* **Nota:** Al quitar la Alerta Virtual de esta condición, el icono verde permanecerá aunque el cálculo de la alerta cambie con el tiempo (por ejemplo, si pasan los 30 días).

### 💡 ¿Por qué no se ve la alarma en las Tablas/Listas?

Si la alarma se ve en el Formulario (Form) pero no en la Tabla (List):

1. **Fórmula Pesada:** Si `[ALERTA_VIRTUAL]` es una columna virtual con muchos `SELECT()`, AppSheet a veces no la calcula en la vista de lista para ahorrar memoria. **Solución:** Intenta que el resultado de la alerta se guarde en una columna física si es posible.
2. **Contexto de Columnas:** Asegúrate de que las columnas que estás formateando (`Format these columns`) estén **visibles** en la vista de Tabla. Si formateas solo "ID" y en la tabla solo mostrás "Cliente", no verás el icono.
3. **Lógica del AND:** En la captura enviada, la regla tenía `AND(ALERTA = TRUE, ESTADO = "REPORTADO")`. Esto es un error: si el caso ya se reportó, no necesitamos que la alerta siga activa para ver el check verde.

## 7. HISTORIAL DE CAMBIOS

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 01 | 13/01/2026 | Emisión inicial. Configuración de reportes silenciosos. | RSGC |
