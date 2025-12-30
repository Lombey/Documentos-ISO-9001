# Sistema de Gestión de Calidad (SGC) - Corvus S.R.L.

Documentación del Sistema de Gestión de Calidad basado en ISO 9001:2015 de Corvus S.R.L.

---

## 📋 Acerca de Corvus S.R.L.

**Corvus S.R.L.** (fundada en 2010) es una empresa de base tecnológica enfocada al sector agrario. Opera principalmente bajo la modalidad de home office y contratación freelance para optimizar costos. Ha recibido múltiples premios a la innovación (CITA 2013, Ternium Siderar 2014) y participó en AgriTechnica 2015.

### Alcance del SGC
**"Servicio de soporte técnico del sistema de información informatizado AGDP, capacitación y post venta del mismo"**

### Norma Base
ISO 9001:2015

---

## 📁 Estructura del Repositorio

### Organización de Documentos

El SGC se organiza en diferentes tipos de documentos según su función y jerarquía:

#### Códigos de Documentos

| Código | Tipo | Descripción |
| :--- | :--- | :--- |
| **MGC** | Manual de Gestión de Calidad | Documento que establece las bases y alcance del SGC |
| **PG** | Procedimiento General | Procedimientos que involucran o coordinan varios sectores |
| **PP** | Procedimiento Particular | Procedimientos específicos de procesos o controles críticos |
| **RPG** | Registro de Procedimiento General | Registros y formularios asociados a procedimientos generales |
| **RPP** | Registro de Procedimiento Particular | Registros asociados a procedimientos particulares |
| **RC** | Registro Complementario | Registros complementarios del SGC (ej: FODA) |

#### Estructura de Carpetas

```
docs_editables/
├── Manual de Calidad/           # Manual de Gestión de Calidad y organigrama
├── PG 01/                       # Control de Documentos y Registros
├── PG 02/                       # Dirección
├── PG 03/                       # No Conformidades y Acciones Correctivas
├── PG 04/                       # Auditorías Internas
├── PG 05/                       # Post Venta
├── PG 06/                       # Gestión de RRHH
├── PG 07/                       # Compras y Proveedores
├── PG 08/                       # Mantenimiento de Infraestructura
├── Logo/                        # Logos y recursos gráficos
└── header.html                  # Plantilla HTML para documentos
```

---

## 📚 Documentos del SGC

### Manual de Gestión de Calidad

- **MGC_Manual_Calidad.md** - Manual principal que establece la política, estructura y alcance del SGC
- **ORGANIGRAMA_V2.md** - Estructura organizativa y alcance del SGC
- **ORGANIGRAMA V2.drawio.png/xml** - Diagrama del organigrama
- **RC Diagrama de Procesos Rev. 01 1S 2023.jpg** - Mapa de procesos del SGC

### Procedimientos Generales (PG)

#### PG 01 - Control de Documentos y Registros
Establece la metodología para elaboración, revisión, aprobación, distribución y control de documentos del SGC.

**Documentos:**
- `PG_01_Control_Docs_Rev05.md`
- `RPG_01_01_Listado_Documentos_Rev02.md` - Listado maestro de todos los documentos del SGC

#### PG 02 - Dirección
Define el liderazgo, compromiso de la dirección, política de calidad, objetivos y revisión por la dirección.

**Documentos:**
- `PG_02_Direccion_Rev05.md`
- `RC_01_Analisis_FODA_Rev04.md` - Análisis FODA y evaluación de riesgos y oportunidades
- `RPG_02_02_Objetivos_Indicadores_Rev00.md` - Seguimiento de objetivos e indicadores

#### PG 03 - No Conformidades y Acciones Correctivas
Metodología para detectar, registrar y solucionar incumplimientos mediante acciones correctivas.

**Documentos:**
- `PG_03_NoConformidades_Rev01.md`
- `RPG_03_01_Registro_NC_Rev02.md` - Registro de no conformidades y acciones correctivas

#### PG 04 - Auditorías Internas
Establece la metodología para verificar el cumplimiento e implementación efectiva del SGC.

**Documentos:**
- `PG_04_Auditorias_Rev02.md`
- `RPG_04_01_Programa_Auditorias_RevXX.md` - Programa anual de auditorías
- `RPG_04_02_Informe_Auditoria_RevXX.md` - Formato de informe de auditoría

#### PG 05 - Post Venta
Define la metodología del servicio técnico de soporte (equipos y sistema AGDP).

**Documentos:**
- `PG_05_PostVenta_Rev06.md` - Procedimiento principal de post venta
- `PP_05_01_Soporte_Tecnico_i455_Rev00.md` - Procedimientos particulares para soporte técnico
- `PP_05_02_Fallas_Conocidas_Rev01.md` - Herramientas para solucionar problemas conocidos
- `PP_05_03_Uso_Registro_Soporte_Rev01.md` - Guía de uso del registro de soporte
- `PP_05_04_Calibracion_Equipos.md` - Procedimiento de calibración de equipos
- `PP_05_05_Cobranza_Conectividades.md` - Gestión de facturación y cobranza
- `PP_05_06_Nuevos_Equipos_Rev00.md` - Procedimiento para equipos nuevos de concesionarios
- `RPG_05_01_Registro_Actividades_Soporte_RevXX.md` - Registro de actividades de soporte (AppSheets)
- `RPG_05_02_Listado_Instructivos_Rev00.md` - Listado de instructivos de soporte
- `RPG_05_03_Planilla_Repuestos_Rev00.md` - Gestión de pedidos de repuestos (AppSheets)
- `RPG_05_04_Planilla_Envios_Rev00.md` - Gestión de envíos de clientes (AppSheets)

**Nota:** Desde Rev. 07, el proceso de Post Venta utiliza la plataforma **AppSheets** para gestión digital de casos, repuestos y envíos.

#### PG 06 - Gestión de RRHH
Define la metodología para gestión del capital humano, competencias, capacitación y evaluación.

**Documentos:**
- `PG_06_RRHH_Rev02.md`
- `RPG_06_01_Perfil_Puestos_Rev01.md` - Perfiles de puestos y evaluación de personal
- `RPG_06_02_Plan_Capacitacion_Rev03.md` - Plan anual de capacitación
- `RPG_06_03_Registro_Capacitacion_Rev02.md` - Registro de capacitaciones realizadas
- `RPG_06_04_Req_Equipamiento_Rev00.md` - Requerimientos de equipamiento por puesto
- `RPG_06_05_Registro_Comunicacion_Rev00.md` - Registro de comunicaciones internas

#### PG 07 - Compras y Proveedores
Establece la metodología para gestión de compras, evaluación y control de proveedores.

**Documentos:**
- `PG_07_Compras_Rev04.md`
- `RPG_07_01_Evaluacion_Proveedores_Rev04.md` - Listado y evaluación de proveedores

#### PG 08 - Mantenimiento de Infraestructura
Define la metodología para gestión y mantenimiento de infraestructura, equipos y servicios.

**Documentos:**
- `PG_08_Infraestructura_Rev01.md`
- `RPG_08_01_Inventario_Rev03.md` - Inventario de equipos y servicios
- `RPG_08_02_Registro_Mantenimiento_Rev01.md` - Registro de actividades de mantenimiento

---

## 🔄 Versionado de Documentos

### Sistema de Codificación

Los documentos se identifican mediante el siguiente formato:

**CT CO CS – ND – CR**

Donde:
- **CT:** Código de tipo (M, PG, PP, RPG, RPP, RC)
- **CO:** Código de origen (doble dígito numérico)
- **CS:** Código secuencial (doble dígito numérico)
- **ND:** Nombre del documento
- **CR:** Código de revisión (Rev. XX)

**Ejemplos:**
- `PG 01 – Control de Documentos y Registros – Rev. 05`
- `PP 05 01 – Procedimientos particulares para soporte técnico – Rev. 00`
- `RPG 02 02 – Objetivos e Indicadores – Rev. 00`

### Control de Versiones

- **Versiones aprobadas:** Se identifican como `Rev XX`
- **Versiones parciales (borradores):** Pueden usar letras minúsculas (ej. `Rev 02a`)
- **Almacenamiento:** Google Drive (cuenta `agdpcorvusweb@gmail.com`)
- **Backup:** Semestral en formato .zip
- **Versiones obsoletas:** Se mueven a carpeta "Obsoletos"

---

## 🏢 Estructura Organizativa

### Organigrama

El organigrama define las áreas dentro y fuera del alcance del SGC:

- **Verde:** Dentro del alcance del SGC
- **Azul:** Fuera del alcance del SGC
- **Borde punteado:** Departamento externo / Freelance

**Áreas en el alcance del SGC:**
- Dirección
- Responsable del SGC (RSGC)
- Compras
- Responsable de Soporte
- Agente de Soporte

**Áreas fuera del alcance del SGC:**
- Desarrollo
- Testing
- Ventas
- Armado y Producción
- Contaduría

### Partes Interesadas

El MGC identifica las siguientes partes interesadas:
- Dirección
- Equipo de Trabajo
- Clientes (Grandes y PyM)
- Contratistas
- Tolveros
- Socios (Fabricantes de balanzas, Vendedores, Fabricantes de monotolvas)
- Proveedores

---

## 📊 Procesos Clave

### Mapa de Procesos

El SGC incluye un diagrama de procesos que muestra la interacción entre:
- Procesos de dirección
- Procesos operativos (Post Venta)
- Procesos de apoyo (RRHH, Compras, Infraestructura)

### Proceso Principal: Post Venta

El proceso de Post Venta incluye:

1. **Recepción de consultas** (equipos o sistema AGDP)
2. **Diagnóstico y resolución**
3. **Gestión de repuestos y envíos**
4. **Registro y seguimiento** (vía AppSheets)
5. **Cierre de casos**

**Horarios de soporte:**
- Días hábiles: 9:00 a 19:30 hs
- Sábados: 10:00 a 16:00 hs
- Feriados: se brinda soporte como día hábil

---

## 🎯 Política de Calidad

La Política de Calidad establece el compromiso de la Dirección con:

1. Desarrollo tecnológico para satisfacción del cliente
2. Cumplimiento de requisitos legales y reglamentarios
3. Rentabilidad y crecimiento sustentable
4. Participación activa y compromiso con el SGC
5. Decisiones basadas en evidencias objetivas
6. Alianzas y sociedades estratégicas
7. Mejora continua del SGC
8. Establecimiento de objetivos de calidad coherentes

---

## 📈 Objetivos de Calidad

Los objetivos se establecen en dos niveles:

1. **Objetivos Estratégicos:** Definidos en `RPG 02 01`
2. **Objetivos de Proceso:** Definidos en `RPG 02 02 - Objetivos e Indicadores`

Los objetivos son monitoreados, comunicados y actualizados regularmente. Cuando no se alcanzan, se establecen acciones correctivas documentadas.

---

## ⚠️ Gestión de Riesgos

La gestión de riesgos y oportunidades se realiza mediante:

- **RC 01 - Análisis FODA:** Identifica fortalezas, debilidades, oportunidades y amenazas
- **Evaluación de riesgos:** Cuantificación mediante probabilidad e impacto
- **Acciones correctivas:** Para eliminar causas de no conformidades

---

## 🔍 Auditorías

- **Frecuencia:** Al menos una vez al año para todos los elementos del SGC
- **Auditores:** Internos capacitados o externos calificados
- **Tipos de hallazgos:** No conformidades, Observaciones, Conformidades, Oportunidades de mejora

---

## 💾 Almacenamiento y Backup

- **Almacenamiento principal:** Google Drive (cuenta `agdpcorvusweb@gmail.com`)
- **Backup semestral:** Archivo .zip comprimido
- **Backup WhatsApp:** Copia de seguridad diaria automática de conversaciones de soporte

---

## 📝 Notas Importantes

1. **Formato de documentos:** Los documentos incluyen un header HTML con logo y metadatos
2. **AppSheets:** El proceso de Post Venta utiliza AppSheets desde Rev. 07 de PG 05
3. **Home Office:** La organización opera principalmente en modalidad home office
4. **Alcance limitado:** El SGC cubre solo el proceso de Post Venta, no incluye Desarrollo
5. **Registros digitales:** Muchos registros se gestionan digitalmente (AppSheets, bases de datos)

---

## 🔗 Referencias

- **Norma ISO 9001:2015:** Base del Sistema de Gestión de Calidad
- **Manual de Calidad (MGC):** Documento principal del SGC
- **RPG 01 01:** Listado completo y actualizado de todos los documentos y registros del SGC

---

## 📅 Historial de Actualizaciones

Este repositorio se mantiene actualizado según los cambios documentados en cada procedimiento. Para ver el historial específico de cada documento, consulte la sección "Historial de Cambios" al final de cada archivo.

**Última actualización general del README:** Diciembre 2025

---

## 👤 Contacto y Responsabilidades

- **Responsable del SGC:** Encargado de la implementación y mantenimiento del SGC
- **Dirección:** Responsable de la aprobación de procedimientos y revisión del SGC
- **Áreas operativas:** Responsables de la aplicación de los procedimientos en sus respectivas áreas

---

*Este README proporciona una visión general del Sistema de Gestión de Calidad de Corvus S.R.L. Para información detallada, consulte los documentos específicos mencionados.*

