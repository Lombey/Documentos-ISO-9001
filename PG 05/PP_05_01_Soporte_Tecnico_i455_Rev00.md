# PP 05 01 - Procedimientos Particulares para Soporte Técnico de i455 - Rev. 00

## 1. OBJETIVO
Definir y establecer la metodología para asegurar que el proceso de servicio técnico se realice en conformidad con los requisitos establecidos por la empresa y el Sistema de Gestión de Calidad.

## 2. ALCANCE
Servicio de post venta.

## 3. RESPONSABILIDADES
El área de **Post venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS
- **BUG:** Se considera bug a cualquier error de software/app.

## 5. DESARROLLO DEL PROCESO

### 5.1 Conectarse a un equipo usando TeamViewer
1. Obtener el ID de TeamViewer desde la Base de Datos Tolvas asociado al equipo.
2. Ingresar el ID en la barra de búsqueda de la solapa de Contactos de TeamViewer.
3. Seleccionar **Control Remoto**. Se abrirá una pantalla para controlar la tablet.

### 5.2 Habilitar TeamViewer desde la tablet
Si se requiere activación presencial:
- **Opción 1:** En la pantalla de bienvenida del Fully Kiosk Browser, tocar el ícono **HOST**.
- **Opción 2:** En la app i455, seleccionar **Modo Soporte** en el menú inferior y confirmar con **SI**.

**Indicadores de conexión:**
- **Verde:** Listo para conectar.
- **Amarillo:** Señal de datos baja/insuficiente.
- **Rojo:** Sin señal de datos (si persiste con señal, reiniciar tablet).

### 5.3 Ingreso a la pantalla de bienvenida del Fully Kiosk Browser
Desde cualquier pantalla, tocar el "Círculo" en la barra inferior de la tablet.

### 5.4 Salir del Modo Kiosco
1. En la pantalla de bienvenida, realizar 5 clicks rápidos (2 por segundo) en el centro de la pantalla.
2. Ingresar la clave de acceso.
3. Seleccionar **Exit Fully** -> **Go Out**.
4. Para restablecerlo, tocar el "Círculo" del menú inferior de Android.

### 5.5 Abrir i455
Desde el menú de bienvenida, seleccionar el ícono **i455**. Si no ejecuta tras una actualización, reiniciar la tablet.

### 5.6 Cerrar i455
Primero salir del modo kiosco, luego seleccionar el cuadrado del menú inferior de Android y cerrar la ventana con la **X**.

### 5.7 Desemparejar un dispositivo Bluetooth
1. Salir del modo kiosco.
2. Bajar el menú superior de Android.
3. Mantener presionado el ícono de **Bluetooth**.
4. En *Paired Devices*, seleccionar la **i** al lado del dispositivo y elegir **Unpair**.

### 5.8 Emparejar dispositivo Bluetooth (Caja Hook)
1. En i455: **Configuración** -> **Configurar Dispositivo** (Clave: 0324).
2. Habilitar **Activar Bluetooth** -> **Conectar**.
3. Seleccionar **Buscar Dispositivos**.
4. Elegir el dispositivo de la caja hook y seleccionar **Pair**.
5. Verificar que se muestren los KG en pantalla y seleccionar **Modificar** para grabar permanentemente.

### 5.9 Borrado de datos de productor
Borra y resincroniza establecimientos, lotes y cultivos.
**i455:** Configuración -> Eliminar Registros (Clave: 1326) -> **Eliminar datos de productor**.

### 5.10 Configuración del Sensor (Habilitar/Retardo)
**i455:** Configuración -> Configurar Sensor (Clave: 0201).
- **Modo automático activado:** Usa sensor, deshabilita teclas INICIO/FIN.
- **Modo automático desactivado:** Habilita teclas INICIO/FIN.
- **Sensor NC/NA:** Configurar según si detecta metal o no.

### 5.11 Asignación de BTH a Usuario
En [www.agdp.com.ar](http://www.agdp.com.ar) (ADMINISTRADOR):
1. Menú -> **Tolva**.
2. Ingresar Usuario y nombre de tolva.
3. Buscar el BTH y vincular con el signo **+**.
4. Guardar.

### 5.12 Sincronización forzada
- **Desde i455:** Configuración -> Info i455 -> **Notificar Tablet**.
- **Desde Web Admin:** Menú -> Tolva -> **Notificar Tolva**.

### 5.13 Conectar la tablet a Wi-Fi
**i455:** Exportar -> Exportar vía WiFI -> Seleccionar red e ingresar clave.
*Nota: Deshabilita temporalmente el Hotspot de la cámara.*

### 5.14 Calibración
**i455:** Configuración -> Calibración Avanzada (Clave: 0324) -> **Calibración Manual**.
- **Envío inicial:** Limpiar -> Celdas -> Marca -> División -> Calibrar.
- **Ajuste con peso conocido:** Ingresar *Kg Balanza/Tablet* y *KG Camión* (referencia) -> **Calibrar**.

## 6. REGISTROS ASOCIADOS
*(No definidos en el original)*

## 7. HISTORIAL DE CAMBIOS
| Fecha | Revisión | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | Responsable del SGC |