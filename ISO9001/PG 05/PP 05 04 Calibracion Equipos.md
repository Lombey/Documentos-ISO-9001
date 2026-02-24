---
google_drive_id: "ID_PENDIENTE"
revision: "02"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.1.5"
audit_ready: true
tags: ["calibracion", "equipos", "trazabilidad", "metrologia"]
ai_brief: "Procedimiento para asegurar la validez de los resultados de medición mediante la calibración de equipos de soporte."
pending_actions: ["Cargar certificados de calibración 2026"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PP 05 04 - Calibración de Equipos - Rev. 02

| PROCEDIMIENTO PARTICULAR | PP 05 04 |
| :--- | :--- |
| **CALIBRACIÓN DE EQUIPOS** | **Rev. 02** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 13/01/2026 |
| **Elabora:** Responsable de Soporte | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Definir qué es la calibración del equipo, las etapas y los procedimientos relacionados para los equipos AGDP LINK TOLVA.

## 2. ALCANCE

Servicio de post venta.

## 3. RESPONSABILIDADES

El área de **Post venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS

- **Peso testigo o peso de referencia:** Peso medido con una balanza auxiliar (presuntamente calibrada) que se utilizará para contrastar y calibrar el equipo.
- **Calibración:** Consiste en ajustar parámetros de sensibilidad y/o celdas para ajustar el indicador de peso de la tablet a un peso de referencia.
- **Instrumento a calibrar:**
  - **Módulo de pesaje:** Placa electrónica donde se almacenan los parámetros de calibración.
  - **Tablet:** Interfaz que envía los parámetros a la caja vía Bluetooth.
- **Referencia/Peso testigo/Peso de referencia:** Peso medido con una balanza auxiliar (presuntamente calibrada) que se utilizará para contrastar y calibrar el equipo. Puede ser otra tolva, báscula fija, etc. o peso patrón.

## 5. DESARROLLO DEL PROCESO

Para el seguimiento, desarrollo y registro se utilizará el módulo de "SOPORTE (ACTIVOS)" de **AppSheets**. Que hace interfaz con el *RPG 05 01 Registro de actividades de soporte*.

### 5.1 Proceso de calibración

   1. **Identificación de necesidad:** Se detecta descalibración durante soporte o mantenimiento preventivo.
   2. **Preparación:** Verificar que cantidad de celdas se corresponde con la balanza en monotolva y la sensibilidad se encuentre dentro de parámetros.
   3. **Obtención de medición patrón:** [según 5.4]
   4. **Medición del equipo:** Realizar medición con el equipo AGDP.
   5. **Cálculo y ajuste:** [según 5.5]
   6. **Verificación:** Corroborar pesaje exitoso.
   7. **Registro:** Documentar como caso de soporte de calibración.

### 5.2 Identificación de la necesidad

    *   El cliente indica que tiene diferencia de kg y desea calibrar.
    *   Si la diferencia es mayor al 1.5% se procederá a calibrar.
  
### 5.3 Preparación

- Consiste en verificar que los parámetros de calibración están correctos:
  - **Cantidad de celdas** acorde a la balanza:
    - 3 celdas = 60000
    - 4 celdas = 80000
    - 6 celdas = 120000
  - **Sensibilidad de celdas** dentro de rango de operación 1200-2060

### 5.4 Obtención de mediciones patrón

- **Tolva auxiliar calibrada:** Se traspasa cereal de una tolva a la otra (preferentemente >80% de capacidad) y se comparan lecturas.

- **Balanza fija de camiones:** Se pesa un camión (con tara conocida) en la balanza fija y se contrasta con la balanza de la tolva.
- Puede calibrarse con una sola medición pero se recomiendan 3 pesadas para mejores resultados.

### 5.5 Ajuste de parámetros

- **Método Manual:** Ingreso directo de los valores (medido y patrón) en la pantalla de CALIBRACIÓN MANUAL de la app.
- **Método Avanzado:** Cálculo independiente de la sensibilidad e ingreso manual en CALIBRACIÓN AVANZADA.

#### 5.5.1 Parámetros de calibración (standard)

- **Sensibilidad:** Rango frecuente: 1200 mv/v a 2060 mv/v. Es inversamente proporcional al peso (si marca menos peso, la sensibilidad debe bajar).
- **Cantidad de celdas:** Depende de la cantidad de celdas. Cada celda multiplica a 20000. Ej. 6 celdas corresponden a 120000.
- **Ventana móvil:** 10.
- **División Mínima:** 10
- **Recortes:** 1

### 5.6 Cálculo y ajuste

#### 5.6.1 Método de calibración manual

- Ingreso a calibración **MANUAL** en app: CONFIGURACIÓN -> CALIBRACIÓN AVANZADA -> CLAVE 0324 -> CALIBRACIÓN MANUAL.

- Ingresar el valor de peso de la tablet en KG balanza tablet.
- Ingresar el valor de peso de la referencia en KG camión.
- Tocar en calibrar, pasados unos segundos se notifica "calibración exitosa" y la balanza se pone en 0.

#### 5.6.2 Método por parámetros

- Ingreso a calibración **AVANZADA** en app: CONFIGURACIÓN -> CALIBRACIÓN AVANZADA -> CLAVE 0324 -> CALIBRACIÓN AVANZADA.

- Ingresar la sensibilidad calculada.
- Tocar en calibrar, pasados unos segundos se notifica "calibración exitosa" y la balanza se pone en 0.

#### 5.6.3 Planilla auxiliar de calibración

Herramienta para calcular la sensibilidad corregida (sin utilizar la app)

- **Sensibilidad actual:** Valor al momento de la medición de contraste.
- **Sensibilidad corregida:** Nuevo valor calculado para configurar el equipo.
- **Factor de corrección:** Valor porcentual de ajuste.
- **Error porcentual:** Diferencia entre el peso de referencia y el de la tablet

### 5.7 Verificación

- Verificar el resultado vs referencia: diferencia menor a 1.5% se considera aceptable.

- Si la diferencia fuere mayor y se asume correcto funcionamiento de la balanza es posible realizar otro procedimiento desde 5.4.
- Registrar caso de calibración en *RPG 05 01 Registro de actividades de soporte*.

## 6. REGISTROS ASOCIADOS

| Código | Nombre |
| --- | --- |
| RPG 05 01 | REGISTRO DE ACTIVIDADES SOPORTE TECNICO |
| RC 05 01 | Planilla de Calibración de Equipos |

## 7. HISTORIAL DE CAMBIOS

| Fecha | Revisión | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | RSGC |
| 03/01/2026 | 01 | Ampliación de procedimiento con mas detalle y claridad. Adecuación de terminología. Estructuración más clara. Cambio de nombre de la app a nombre actual. Incorporacion de planilla de calibracion | RSGC |
| 13/01/2026 | 02 | Corrección de formato de encabezados. | RSGC |
