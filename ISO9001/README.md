---
google_drive_id: "DOCUMENTO_MAPA_INTERNO"
revision: "01"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "4.0"
audit_ready: true
tags: ["index", "sgc", "general", "mapa"]
ai_brief: "Guía maestra del repositorio del SGC, mapa de procesos y punto de entrada para la navegación técnica y normativa."
pending_actions: ["Actualizar diagrama de flujo de procesos"]
---

<link rel="stylesheet" href="../reporte-estilo.css">

# Sistema de Gestión de Calidad (SGC) - Corvus S.R.L

Documentación del Sistema de Gestión de Calidad basado en ISO 9001:2015 de Corvus S.R.L.

---

## 📋 Acerca de Corvus S.R.L

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

## 🗺️ Mapa de Relaciones entre Documentos

Este mapa muestra la estructura jerárquica y las relaciones entre todos los documentos del SGC. Útil para entender cómo se relacionan los documentos y navegar el sistema.

### Estructura Jerárquica Completa

```
📘 Manual de Gestión de Calidad (MGC)
│
├── 📄 MGC_Manual_Calidad.md ──────────────┐
│                                          │
├── 📄 ORGANIGRAMA_V2.md                  │
│   └── 📊 ORGANIGRAMA V2.drawio.xml      │
│   └── 🌐 visualizador_organigrama.html  │
│                                          │
└── 📊 RC Diagrama de Procesos ───────────┘
    │
    └── [Define el contexto y alcance del SGC]
        │
        ├─────────────────────────────────────────────────────────┐
        │                                                         │
        ▼                                                         ▼

📋 PG 01 - Control de Documentos y Registros                    📋 PG 02 - Dirección
│   │                                                           │   │
│   ├── 📄 PG_01_Control_Docs.md                                │   ├── 📄 PG_02_Direccion.md
│   │   │                                                       │   │   │
│   │   └── [Define cómo se gestionan TODOS los documentos]   │   │   └── [Liderazgo y política de calidad]
│   │                                                           │   │
│   └── 📋 RPG_01_01_Listado_Documentos_Rev02.md              │   ├── 📊 RC_01_Analisis_FODA_Rev04.md
│       │                                                       │   │   └── [Análisis estratégico y riesgos]
│       └── [Índice maestro de TODOS los documentos]           │   │
│                                                               │   └── 📋 RPG_02_02_Objetivos_Indicadores_Rev00.md
│                                                               │       └── [Seguimiento de objetivos]
│                                                               │
│                                                               └── 📄 INFORME_AUDITORIA_PG_02_2026.md
│                                                                   └── [Resultados de auditoría]
│
├─────────────────────────────────────────────────────────┐
│                                                         │
▼                                                         ▼

📋 PG 03 - No Conformidades                              📋 PG 04 - Auditorías Internas
│   │                                                     │   │
│   ├── 📄 PG_03_NoConformidades_Rev01.md                │   ├── 📄 PG_04_Auditorias_Rev02.md
│   │   │                                                 │   │   │
│   │   └── [Detecta problemas en otros procesos]        │   │   └── [Verifica cumplimiento de TODOS los PG]
│   │                                                     │   │
│   └── 📋 RPG_03_01_Registro_NC_Rev02.md               │   └── [Genera informes de auditoría]
│       └── [Registra no conformidades]                 │
│                                                         │
│   [Se relaciona con: PG 02 (objetivos),                │   [Se relaciona con: TODOS los PG]
│    PG 04 (hallazgos de auditoría),                     │
│    PG 05 (problemas en post venta)]                    │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
▼                                                         ▼

📋 PG 05 - Post Venta (Proceso Principal)
│   │
│   ├── 📄 PG_05_PostVenta.md ───────────────────────────┐
│   │   │                                                 │
│   │   └── [Proceso operativo principal del SGC]        │
│   │                                                     │
│   ├── 📋 Procedimientos Particulares (PP)              │
│   │   │                                                 │
│   │   ├── 📄 PP_05_01_Soporte_Tecnico_i455_Rev00.md    │
│   │   ├── 📄 PP_05_02_Fallas_Conocidas_Rev01.md        │
│   │   ├── 📄 PP_05_03_Uso_Registro_Soporte_Rev01.md    │
│   │   ├── 📄 PP_05_04_Calibracion_Equipos.md           │
│   │   ├── 📄 PP_05_05_Cobranza_Conectividades.md       │
│   │   └── 📄 PP_05_06_Nuevos_Equipos_Rev00.md          │
│   │                                                     │
│   └── 📋 Registros (RPG)                               │
│       │                                                 │
│       ├── 📋 RPG_05_02_Listado_Instructivos_Rev00.md   │
│       ├── 📋 RPG_05_03_Planilla_Repuestos_Rev00.md     │
│       └── 📋 RPG_05_04_Planilla_Envios_Rev00.md        │
│                                                         │
│   [Se relaciona con:                                    │
│    - PG 01 (control de documentos)                      │
│    - PG 03 (no conformidades en soporte)               │
│    - PG 06 (capacitación del personal)                  │
│    - PG 07 (compras de repuestos)                       │
│    - PG 08 (mantenimiento de equipos)]                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
▼                                                         ▼

📋 PG 06 - Gestión de RRHH                               📋 PG 07 - Compras y Proveedores
│   │                                                     │   │
│   ├── 📄 PG_06_RRHH_Rev02.md                           │   ├── 📄 PG_07_Compras_Rev04.md
│   │   │                                                 │   │   │
│   │   └── [Gestiona competencias y capacitación]       │   │   └── [Gestiona proveedores y compras]
│   │                                                     │   │
│   ├── 📋 RPG_06_01_Perfil_Puestos_Rev01.md             │   └── 📋 RPG_07_01_Evaluacion_Proveedores_Rev04.md
│   ├── 📋 RPG_06_02_Plan_Capacitacion_Rev03.md          │       └── [Listado y evaluación de proveedores]
│   ├── 📋 RPG_06_03_Registro_Capacitacion_Rev02.md      │
│   ├── 📋 RPG_06_04_Req_Equipamiento_Rev00.md           │   [Se relaciona con: PG 05 (compras de repuestos)]
│   ├── 📋 RPG_06_05_Registro_Comunicacion_Rev00.md      │
│   ├── 📄 CHECKLIST_PG_06_2026.md                       │
│   └── 📄 INFORME_AUDITORIA_PG_06_2026.md                │
│                                                         │
│   [Se relaciona con: TODOS los procesos que requieren  │
│    personal capacitado (PG 05, PG 04, etc.)]           │
│                                                         │
└─────────────────────────────────────────────────────────┘
│
▼

📋 PG 08 - Mantenimiento de Infraestructura
│   │
│   ├── 📄 PG_08_Infraestructura_Rev01.md
│   │   │
│   │   └── [Gestiona equipos, servicios e infraestructura]
│   │
│   ├── 📋 RPG_08_01_Inventario_Rev03.md
│   └── 📋 RPG_08_02_Registro_Mantenimiento_Rev01.md
│
│   [Se relaciona con: PG 05 (equipos de soporte),
│    PG 06 (equipamiento del personal)]
```

### Relaciones Clave entre Documentos

#### 🔗 Dependencias Principales

1. **MGC → Todos los PG**
   - El Manual de Calidad establece el marco para todos los procedimientos
   - Define el alcance y la estructura organizativa

2. **PG 01 → Todos los documentos**
   - Controla la gestión de TODOS los documentos del SGC
   - RPG_01_01 es el índice maestro que lista todos los documentos

3. **PG 02 → Objetivos y Estrategia**
   - RC_01 (FODA) alimenta la planificación estratégica
   - RPG_02_02 monitorea objetivos que pueden generar acciones en PG 03

4. **PG 03 ← Múltiples fuentes**
   - Recibe no conformidades de: PG 04 (auditorías), PG 05 (soporte), PG 06 (RRHH), etc.
   - Genera acciones correctivas que afectan a los procesos origen

5. **PG 04 → Verificación de todos**
   - Audita el cumplimiento de TODOS los PG
   - Genera informes que pueden derivar en PG 03 (no conformidades)

6. **PG 05 → Proceso central**
   - Interactúa con: PG 06 (personal), PG 07 (compras), PG 08 (equipos)
   - Genera registros que pueden ser auditados por PG 04
   - Puede generar no conformidades para PG 03

7. **PG 06 → Soporte a procesos**
   - Capacita personal para: PG 04 (auditores), PG 05 (soporte técnico)
   - Define competencias requeridas por otros procesos

8. **PG 07 → Soporte operativo**
   - Provee insumos para: PG 05 (repuestos), PG 08 (equipos)

9. **PG 08 → Infraestructura**
   - Mantiene equipos usados en: PG 05 (soporte), PG 06 (trabajo remoto)

### 📊 Matriz de Relaciones

| Documento | Se relaciona con | Tipo de relación |
|-----------|------------------|------------------|
| **MGC** | Todos los PG | Define el marco |
| **PG 01** | Todos los documentos | Control y gestión |
| **PG 02** | PG 03, PG 04 | Objetivos → Auditorías → No conformidades |
| **PG 03** | PG 02, PG 04, PG 05, PG 06 | Recibe no conformidades de múltiples fuentes |
| **PG 04** | Todos los PG | Verifica cumplimiento |
| **PG 05** | PG 06, PG 07, PG 08 | Proceso principal que requiere recursos |
| **PG 06** | PG 04, PG 05 | Proporciona personal capacitado |
| **PG 07** | PG 05, PG 08 | Proporciona insumos y equipos |
| **PG 08** | PG 05, PG 06 | Mantiene infraestructura |

### 🔍 Navegación Rápida por Tipo de Documento

#### 📘 Documentos Principales (Definen procesos)

- `MGC_Manual_Calidad.md` - Manual principal
- `PG_01_Control_Docs.md` - Control de documentos
- `PG_02_Direccion.md` - Dirección y liderazgo
- `PG_03_NoConformidades_Rev01.md` - Gestión de no conformidades
- `PG_04_Auditorias_Rev02.md` - Auditorías internas
- `PG_05_PostVenta.md` - Proceso principal de post venta
- `PG_06_RRHH_Rev02.md` - Gestión de recursos humanos
- `PG_07_Compras_Rev04.md` - Compras y proveedores
- `PG_08_Infraestructura_Rev01.md` - Infraestructura

#### 📋 Procedimientos Particulares (Detallan procesos específicos)

- `PP_05_01_Soporte_Tecnico_i455_Rev00.md` - Soporte técnico
- `PP_05_02_Fallas_Conocidas_Rev01.md` - Fallas conocidas
- `PP_05_03_Uso_Registro_Soporte_Rev01.md` - Uso de registros
- `PP_05_04_Calibracion_Equipos.md` - Calibración
- `PP_05_05_Cobranza_Conectividades.md` - Cobranza
- `PP_05_06_Nuevos_Equipos_Rev00.md` - Equipos nuevos

#### 📊 Registros y Formularios (RPG/RC)

- `RPG_01_01_Listado_Documentos_Rev02.md` - **Índice maestro de documentos**
- `RPG_02_02_Objetivos_Indicadores_Rev00.md` - Objetivos e indicadores
- `RC_01_Analisis_FODA_Rev04.md` - Análisis FODA
- `RPG_03_01_Registro_NC_Rev02.md` - Registro de no conformidades
- `RPG_05_02_Listado_Instructivos_Rev00.md` - Instructivos de soporte
- `RPG_05_03_Planilla_Repuestos_Rev00.md` - Gestión de repuestos
- `RPG_05_04_Planilla_Envios_Rev00.md` - Gestión de envíos
- `RPG_06_01_Perfil_Puestos_Rev01.md` - Perfiles de puestos
- `RPG_06_02_Plan_Capacitacion_Rev03.md` - Plan de capacitación
- `RPG_06_03_Registro_Capacitacion_Rev02.md` - Registro de capacitaciones
- `RPG_07_01_Evaluacion_Proveedores_Rev04.md` - Evaluación de proveedores
- `RPG_08_01_Inventario_Rev03.md` - Inventario
- `RPG_08_02_Registro_Mantenimiento_Rev01.md` - Mantenimiento

#### 📄 Informes y Checklists

- `INFORME_AUDITORIA_PG_02_2026.md` - Informe de auditoría PG 02
- `INFORME_AUDITORIA_PG_06_2026.md` - Informe de auditoría PG 06
- `CHECKLIST_PG_06_2026.md` - Checklist de auditoría PG 06

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

- `PG_04_Auditorias_Rev04.md`
- `RPG_04_01_Programa_Auditorias.md` - **(OBSOLETO)** Reemplazado por RPG 04 02
- `RPG_04_02_Gestion_Auditorias.md` - **Gestión Integral de Auditorías** (Planificación + Historial Int/Ext) - *Vía AppSheet*

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
- `RPG_06_02_Plan_Capacitacion.md` - **(OBSOLETO)** Reemplazado por RPG 06 06
- `RPG_06_03_Registro_Capacitacion.md` - **(OBSOLETO)** Reemplazado por RPG 06 06
- `RPG_06_06_Gestion_Integral_Capacitacion.md` - **Gestión Integral de Capacitaciones** (Plan + Asistencia) - *Vía AppSheet*
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

## 🔄 Versionado y Reglas de Documentación

La gestión de revisiones, el historial de cambios y la estructura técnica de los archivos se rigen por el protocolo específico para agentes y editores:

👉 **[Ver R-DOC-IA - Reglas de Documentación para IA](./PG%2001/R-DOC-IA%20Reglas%20de%20Documentacion%20IA.md)**

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

**Última actualización general del README:** 13/01/2026

---

## 👤 Contacto y Responsabilidades

- **Responsable del SGC:** Encargado de la implementación y mantenimiento del SGC
- **Dirección:** Responsable de la aprobación de procedimientos y revisión del SGC
- **Áreas operativas:** Responsables de la aplicación de los procedimientos en sus respectivas áreas

---

---

## 8. HISTORIAL DE CAMBIOS (README)

| Rev. | Fecha | Descripción | Responsable |
| :--- | :--- | :--- | :--- |
| 00 | 01/12/2025 | Emisión inicial del README estructurado. | RSGC |
| 01 | 13/01/2026 | Corrección de formato de encabezados. | RSGC |
