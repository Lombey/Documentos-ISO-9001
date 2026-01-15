---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "7.1.6, 8.5"
audit_ready: true
tags: ["fallas", "conocimiento", "soporte", "diagnostico"]
ai_brief: "Base de conocimientos operacional sobre fallas recurrentes y su resolución en sistemas AGDP."
pending_actions: ["Migrar contenido a sección de Ayuda en AppSheet"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# PP 05 02 - Fallas Conocidas y Herramientas para su Resolución - Rev. 01

| PROCEDIMIENTO PARTICULAR | PP 05 02 |
| :--- | :--- |
| **FALLAS CONOCIDAS** | **Rev. 01** |
| **Fecha Emisión:** 09/08/2021 | **Fecha Revisión:** 04/01/2026 |
| **Elabora:** Responsable de Soporte | **Revisa y Aprueba:** Dirección |

---

## 1. OBJETIVO

Identificar, listar y describir las fallas conocidas y las acciones propuestas para solucionarlas, asegurando que el proceso de servicio técnico se realice en conformidad con los requisitos de la empresa y el SGC.

## 2. ALCANCE

Servicio de post venta (soporte).

## 3. RESPONSABILIDADES

El área de **Post venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS

- **BUG:** Se considera bug a cualquier error de software/app.

## 5. DESARROLLO DEL PROCEDIMIENTO

### 5.1 No se conecta al Bluetooth

1. Si no estaba vinculada: Realizar emparejamiento (ver PP 05 01).
2. Si estaba vinculada: Desemparejar y volver a emparejar. Se recomienda cerrar la app i455 durante este proceso.
3. Si no figura en dispositivos disponibles: Verificar energía de la caja hook. Si persiste, probar con otro dispositivo móvil; si no es visible, derivar a técnico de HOOK.

### 5.2 Faltan sincronizar datos (Productor/Establecimiento/Lote/Cultivo)

Realizar una **Notificación a tolva** desde el administrador web para forzar la sincronización.

- **Control:** Verificar que aparezcan en las solapas correspondientes en la tablet.

### 5.3 Error de sincronización (Duplicación de campos)

Realizar el procedimiento de **Borrado de datos de productor** (ver PP 05 01).

### 5.4 No se muestran los KG trabajados en el panel inferior derecho

Este panel requiere señal de datos para mostrar las descargas del servidor.

- **Acción:** Solicitar al usuario que vuelva a seleccionar el lote para actualizar la información.

### 5.5 Hay datos pero no se envían las descargas

- **Opción 1:** Error de sincronización visual (un tilde). Si la descarga está en el servidor, no se requiere acción.
- **Opción 2:** Descarga no recibida.
  - Consultar con Desarrollo si está en buffer y reiniciar servicio.
  - Modificar la descarga en la app para asegurar que el lote/establecimiento coincidan con el usuario.
  - Verificar vinculación de BTH en el administrador web.

### 5.6 No se inician descargas automáticamente (Modo Automático)

1. Verificar que al abrir el tubo aparezca "AUTOMÁTICA" en pantalla.
2. Verificar sensor acercando metal (luz testigo).

- **Si activa:** Corregir distancia del sensor (0.5 cm) o sincronizar cultivos.
- **Si no activa:** Cambio de sensor (derivar a HOOK) o pasar a **Modo Manual** como alternativa.

### 5.7 No se pueden eliminar destinos

Realizar **Borrado de datos de productor**.

### 5.8 No aparece el cultivo

Notificar Tablet (Configuración -> Info i455) y reiniciar la app.

### 5.9 Apertura de tubo agrega más de 40 KG en el neto

Ajustar el **tiempo de retardo** del sensor (estándar: 1 a 6 segundos) en Configuración -> Configurar Sensor.

### 5.10 KG inestables (Humedad, chicote, celdas)

Indicar problema en la balanza física de la tolva. Recomendar ver video de mantenimiento preventivo y contactar al servicio técnico de la balanza.

### 5.11 KG no reaccionan ("Foto")

1. Reiniciar equipo.
2. Verificar cables de celdas e instalación.
3. Verificar/Enviar calibración avanzada.
4. Si persiste, derivar a HOOK (problema de BIOS/Hardware).

### 5.12 Muchas descargas de 0-20 KG registradas

Verificar si son aperturas reales del tolvero o si el sensor está mal colocado/sensible.

### 5.13 No se ve la imagen de la cámara

- **Opción 1 (Conectada al Hotspot):** Usar botones de reconexión.
- **Opción 2 (No conectada):** Verificar energía y fusible. Si recibe corriente pero no encienden luces de noche, cambio de cámara.
- **Configuración:** Verificar que el código en "Configurar Cámara" coincida con el BTH.

### 5.14 Problemas de carga de la tablet

- **Opción 1 (Calor):** Si >43°C, enfriar a la sombra antes de cargar.
- **Opción 2 (Cargador):** Probar en otro dispositivo. Se requiere cargador de **3.1 Amperios**.
- **Opción 3 (Ficha tractor):** Revisar circuito eléctrico del vehículo.

### 5.15 Duplicación de descargas / Duplicación con último destino

Reiniciar app/tablet. Como preventivo: encender el equipo con el tubo abierto (sensor en OFF).

### 5.16 Balanza no pone en cero pero responde a variaciones

- Parámetros de sensibilidad fuera de rango (reenviar calibración).
- Problema de BIOS en caja Hook (requiere reparación).

### 5.17 No cambia de estado Normal a Descarga (y viceversa)

- Sensor roto: Verificar luz testigo con metal.
- Mala colocación: Debe estar fijo a 0.5 cm de la chapa testigo.
- Solución temporal: Pasar a modo manual.

## 6. REGISTROS ASOCIADOS

*(No definidos)*

## 7. HISTORIAL DE CAMBIOS

| Fecha | Revisión | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | RSGC |
| 22/11/2022 | 01 | Actualización del objetivo y cambio de nombre. | RSGC |
| 13/01/2026 | 02 | Estandarización de encabezados digitales y optimización de la trazabilidad normativa (Cláusula 7.5). | RSGC |
