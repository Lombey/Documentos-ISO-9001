# PG 05 - Post Venta - Rev. 07

## 1. OBJETIVO
Definir y establecer la metodología para asegurar que el proceso de servicio técnico se realice en conformidad con los requisitos establecidos por la empresa y el Sistema de Gestión de Calidad.

## 2. ALCANCE
Servicio de post venta (soporte).

## 3. RESPONSABILIDADES
El área de **Post Venta** es responsable de la aplicación de este procedimiento.

## 4. DEFINICIONES Y ABREVIATURAS
- **Post venta / Soporte:** Términos sinónimos para referirse al mismo sector.
- **AGDP:** Sistema WEB de Corvus AGDP.

## 5. DESARROLLO DEL PROCESO

Para el seguimiento, desarrollo y registro se utilizará **AppSheets** lo que asegura mejor trazabilidad en tiempo real.
*   El módulo de **SOPORTE (ACTIVOS)** hace interfaz con el **RPG 05 01 Registro actividades de soporte**.
*   El módulo de **PEDIDO DE REPUESTOS** hace interfaz con **RPG 05 03 Pedido de Repuestos**.
*   El módulo de **ENVÍOS HACIA CORVUS** hace interfaz con **RPG 05 04 Envío de Clientes hacia Corvus**.
*   El módulo de **INSTRUCTIVOS DE SOPORTE** hace interfaz con **RPG 05 02 - Listado de instructivos de soporte**.
### 5.1 Diagrama de Flujo del Proceso de Post Venta

![Diagrama de Flujo del Proceso de Post Venta](Auxiliar%20-%20PG%2005%20Diagrama%20de%20Procesos.jpg)

*(El diagrama se describe a continuación en el recorrido del proceso)*

### 5.2 Recorrido del Proceso
El servicio de soporte técnico recibe el contacto del cliente por los canales disponibles. Se identifica al cliente y el tipo de consulta (Equipo o AGDP). De ser posible, se abre un registro en **AppSheets**.

#### 5.2.1 Consulta por Equipo
1. **Identificación:** Se verifica si el cliente está activo. Si está dado de baja, se le solicita regularizar su situación con Compras antes de brindar asistencia.
2. **Relevamiento y Diagnóstico:** Se clarifica la situación con el cliente y se realiza el diagnóstico utilizando herramientas detalladas en el *PP 05 01 - Procedimientos particulares para soporte técnico de i455*.
   - **Elemento ajeno:** Si el problema no es de Corvus, se recomienda contactar al técnico especializado correspondiente.
   - **Descalibración:** Se sigue el *PP 05 04 Calibración de Equipos*.
   - **Repuestos:** Si se requiere un repuesto, se informa y cotiza al cliente.
     - **Gestión de reposición:** Se solicitan datos de envío (Nombre, CUIT, Localidad). Se registra en *PEDIDO DE REPUESTOS* (vía AppSheet).
     - **Envíos de clientes hacia Corvus:** Si el cliente debe enviar un equipo (ej. tablet), se registra en *ENVÍOS HACIA CORVUS* (vía AppSheet).

**Políticas de Gestión:**
- **Propiedad de cliente:** La empresa se responsabiliza de los equipos mientras estén en su poder (no durante el tránsito de ida o vuelta). Los costos de flete corren por cuenta del cliente.
- **Garantía:** Tablets (1 año, excepto panel táctil), Cámaras (6 meses). Requiere envío a oficinas de Corvus para revisión.
- **Cierre del caso:** Se considera cerrado cuando los comprobantes de envío han sido transmitidos al cliente o área correspondiente.

#### 5.2.2 Consulta por AGDP
1. **Relevamiento:** Identificación del cliente y diagnóstico de la situación.
2. **Acciones:**
   - **Instrucción:** Si es una duda de uso, se instruye al cliente (ver 5.3).
   - **Desvío de plataforma:** Si es un error del sistema, el agente busca una acción correctiva inmediata o solicita asistencia al área interna correspondiente.

#### 5.2.3 Procesos administrativos
- **Cobranza de conectividades:** Para la gestión de facturación y cobranza de licencias anuales de clientes activos, se sigue el *PP 05 05 - Cobranza de Conectividades*.
- **Nuevos equipos:** Para la configuración e instrucción de equipos nuevos provenientes de concesionarios, se sigue el *PP 05 06 - Procedimientos para nuevos equipos provenientes de concesionarios*.

### 5.3 Acciones de Instrucción e Instructivos de Soporte
Orientadas a instruir en el uso de AGDP Link Tolva (i455) o el sistema web AGDP. Se pueden usar instructivos, explicaciones personales o presentaciones online.
Los instructivos están listados en *INSTRUCTIVOS DE SOPORTE* (vía AppSheet).

### 5.4 Control de Resultado
Se verifica la eficacia de la acción correctiva y si tuvo impactos negativos en otros aspectos. Se puede corroborar la conformidad con el cliente.

### 5.5 Registro
   *  Se realiza en el módulo *SOPORTE (ACTIVOS)*.
   *  Se abre el caso con "NUEVO"
   *  Se completan los campos requeridos del caso.
   *  Si hay múltiples acciones para un mismo caso, se pueden generar filas adicionales o un solo caso con el más relevante y ampliar en comentarios.
   *  Una vez resuelto se cierra con la acción "CERRAR CASO"

## 6. HORARIOS DE SOPORTE Y PREVISIÓN DE GUARDIAS
- **Horario:** Días hábiles de 9 a 19:30 hs y Sábados de 10 a 16 hs. 
- **Feriados:** Se brinda soporte como día hábil.
- **Guardias:** Se realiza rotación de guardia los días sábados. Se indican en el Google Calendar `agdpcorvusweb@gmail.com` con al menos 24 hs de antelación.
- Los horarios se encuentran disponibles al cliente en el perfil de WhatsApp.

## 7. RELEVAMIENTO DE SATISFACCIÓN DEL CLIENTE
Soporte es responsable de realizar las encuestas de satisfacción según lo acordado con la Dirección.

## 8. ELABORACIÓN DE REPORTES E INDICADORES
Se realizan análisis internos dos veces al año (al finalizar cada temporada). Incluye:
- Tiempos de atención y estado de casos.
- Cantidad de casos diarios y por motivo.
- Análisis de las 3 causas principales.
- Casos que exceden parámetros de calidad.

## 9. RESGUARDO Y MANTENIMIENTO DE REGISTROS
Soporte garantiza la integridad y backup de la información (PG, PP, RPG) conforme al *PG 01*.

## 10. REGISTROS ASOCIADOS
| Código | Nombre |
| --- | --- |
| RPG 05 01 | Registro actividades de soporte |
| RPG 05 02 | Listado de instructivos de soporte |
| RPG 05 03 | Pedido de Repuestos |
| RPG 05 04 | Envío de Clientes hacia Corvus |


## 11. HISTORIAL DE CAMBIOS
| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| 09/08/2021 | 00 | Documento inicial | Responsable del SGC |
| 06/12/2021 | 01 | Agrega punto 5.3 / Corrección 5.2. | Responsable del SGC |
| 08/11/2022 | 02 | Actualización de software. | Responsable del SGC |
| 12/09/2023 | 03 | Diagrama de procesos y reestructuración punto 5. Horarios. | Responsable del SGC |
| 19/09/2023 | 04 | Cambios al horario. | Responsable del SGC |
| 07/10/2024 | 05 | Adecuación 5.2.1.3 e incorporación de RPG 05 03 y 05 04. | Responsable del SGC |
| 28/10/2024 | 06 | Actualización de políticas de propiedad de cliente. | Responsable del SGC |
| 10/01/2026 | 07 | Migración a plataforma digital AppSheets. Documentación de módulos (SOPORTE ACTIVOS, PEDIDO DE REPUESTOS, ENVÍOS HACIA CORVUS, INSTRUCTIVOS DE SOPORTE) y su interfaz con registros. Actualización del proceso de registro (5.5) con flujo NUEVO-CERRAR CASO. Incorporación de sección 5.2.3 Procesos administrativos (PP 05 05 y PP 05 06). Actualización de horarios (19:30 hs) y proceso de guardias. 5.2.1 incorporacion de costos de flete. | Responsable del SGC |