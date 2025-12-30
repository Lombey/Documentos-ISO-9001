# PP 05 05 - Cobranza de Conectividades - Rev 01

**Revisión:** 00  
**Fecha:** 19/06/2025

---

## 1. OBJETIVO
Definir y establecer la metodología para asegurar la facturación de cobranza de las licencias anuales de los clientes activos.

## 2. ALCANCE
Servicio de cobranza de conectividades.

## 3. DEFINICIONES Y ABREVIATURAS
- **AppSheets:** Aplicación que centraliza las planillas del sistema y hace de interfaz gráfica con el usuario.
- **Xubio:** Aplicación web para gestiones contables de la empresa. Garantiza compliance de facturación con **ARCA**.
- **ARCA:** Agencia de control y recaudación aduanero. Es el organismo que gestiona los impuestos nacionales.

## 4. RESPONSABILIDADES
El área de **Post Venta** en su conjunto es responsable de la aplicación de este procedimiento.

## 5. DESARROLLO DEL PROCESO

Para el seguimiento, desarrollo y registro se utilizará el módulo de "CONECTIVIDADES" de **AppSheets** que hace de interfaz con el *RPP 05 05 01 Conectividades*.

### 5.1 Revisión mensual del estado de servicios
*   Al inicio de cada mes, el responsable del área revisa el estado de las licencias de los clientes para ese mes para designar responsables, punto 5.2.

### 5.2 Asignación de responsables
*   Se designan responsables agentes de soporte específicos para cada cliente, encargados de llevar adelante las tareas de seguimiento, facturación y cobranza.

### 5.3 Contacto con el cliente
*   El responsable asignado se comunica con el cliente cuyo servicio está próximo a vencer. Usualmente por WhatsApp o llamada telefónica. En esta instancia, se le informa sobre el vencimiento, se detallan los precios actualizados y se coordinan tanto la forma de pago como la emisión de la factura correspondiente.

### 5.4 Decisión de renovación
*   Ante la afirmativa de continuar con el servicio se procederá con la generación de la factura punto 5.5. 
*   En caso de negativa, se le informa al cliente que la baja implica la suspensión de su usuario web y del software de la tablet y se procede a la baja del servicio, punto 5.8.
*   Si el cliente no confirma por sí o por no pasados los 3 días hábiles de su último contacto, se informa al responsable del área y si esta no estuviese disponible a dirección quienes evaluarán y definirán los pasos a seguir.

### 5.5 Generación de factura
*   Se emite la factura correspondiente desde el sistema **Xubio** respetando los términos acordados con el cliente y se envía al ARCA.
*   La confección de la factura debe contener los datos de cuenta para el pago (alternativamente si no se cargaron se comunican con el envío de la factura). 
*   Se envía la factura (formato pdf) al cliente.
*   Se registra el estado del cobro como FACTURADO.

### 5.6 Seguimiento
*   Una vez emitida la factura, se realiza un seguimiento activo del cobro. 
*   Salvo coordinación explícita de fecha de pago, el agente contactará al cliente pasados los 3 días si no recibe novedades del pago.
*   Cada contacto se registra cambiando la columna estado.
*   Realizados 3 intentos de cobro, si no se recibe el pago, se informa al responsable o a dirección quienes evaluarán y definirán los pasos a seguir.

### 5.7 Verificación del pago
*   Si el cliente informa un pago, se solicita el comprobante de pago como respaldo.
*   Se verifica que el monto, fecha y número de factura del comprobante coincidan con la factura emitida.
*   **Casos especiales:**
    *   **Pago parcial:** Si el monto recibido es menor al facturado, se contacta al cliente y se evalúa con el responsable del área o dirección si se acepta o se solicita el saldo pendiente. Se actualiza observación en **AppSheets**.
    *   **Discrepancia en comprobante:** Si el comprobante no coincide con la factura, se contacta al cliente para aclaración. Si no se resuelve, se informa al responsable del área o dirección.
    *   **Factura rectificativa:** Si hay error en la factura original, se emite nota de crédito anulatoria y la rectificativa desde **Xubio** y se informa al cliente.
*   Si todo coincide o se resuelve, se registra el cobro en el sistema **Xubio**.
*   Se registra el estado como COBRADO.
*   Fin del caso.

### 5.8 Baja del servicio
* Se suspende el acceso al usuario y la tolva desde el usuario administrador.
* Se registra el estado como SUSPENDIDO.
* Se registran observaciones (si las hubiere).
* Fin del caso.

## 6. SEGUIMIENTO Y MEDICIÓN

El área de Post Venta realizará el seguimiento de los siguientes indicadores para evaluar la eficacia del proceso de cobranza:

| Indicador | Definición | Fórmula | Frecuencia | Fuente de Datos |
| --- | --- | --- | --- | --- |
| **Tasa de cobranza** | Porcentaje de facturas cobradas sobre el total de facturas emitidas | `(Facturas COBRADAS / Total FACTURADAS) * 100` | Mensual | **AppSheets**: Módulo CONECTIVIDADES |
| **Tiempo promedio de cobro** | Días promedio transcurridos desde la facturación hasta el cobro | `Promedio(Fecha_COBRADO - Fecha_FACTURADO)` | Mensual | **AppSheets**: Módulo CONECTIVIDADES |
| **% de bajas por falta de pago** | Porcentaje de servicios suspendidos por falta de pago sobre el total facturado | `(Servicios SUSPENDIDOS / Total FACTURADAS) * 100` | Mensual | **AppSheets**: Módulo CONECTIVIDADES |
| **Tiempo promedio de respuesta del cliente** | Días promedio desde el contacto inicial hasta la respuesta del cliente | `Promedio(Fecha_Respuesta_Cliente - Fecha_Contacto)` | Trimestral | **AppSheets**: Módulo CONECTIVIDADES |

Los resultados se revisan mensualmente por el responsable del área y se reportan a Dirección antes de la revisión anual.

## 7. REGISTROS ASOCIADOS

| Código | Nombre |
| --- | --- |
| RPP 05 05 01 | Planilla de Conectividades |

## 8. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2025 | 00 | Documento inicial | Responsable del SGC |
| 29/01/2026 | 01 | Incorporación de **AppSheets**. Separación de 4.5 en 4.5 y 4.6. Incorporación de casos no contemplados como la falta de respuesta del cliente. Incorporación de estimación de tiempos. Adecuación de textos para mayor claridad. Incorporación de casos especiales en verificación de pago. | Responsable del SGC |