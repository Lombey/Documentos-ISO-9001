---
google_drive_id: "ID_PENDIENTE"
revision: "01"
last_updated: "13/01/2026"
responsible: "RSGC"
iso_clause: "5.3"
audit_ready: true
tags: ["organigrama", "estructura", "roles", "autoridad"]
ai_brief: "Representación gráfica de la jerarquía, dependencias y roles clave del SGC Corvus."
pending_actions: ["Aprobación final por RSGC"]
---

<link rel="stylesheet" href="../../reporte-estilo.css">

# ORGANIGRAMA DE CORVUS S.R.L. (V2)

| DOCUMENTO DE APOYO | ORG-V2 |
| :--- | :--- |
| **ORGANIGRAMA CORPORATIVO** | **Rev. 01** |
| **Fecha de Emisión:** 13/01/2026 | **Responsable:** RSGC |

---

Este diagrama representa la estructura organizativa de Corvus S.R.L., destacando las áreas dentro y fuera del alcance del Sistema de Gestión de Calidad (SGC).

### Referencias

* **Color Verde:** Dentro del alcance del SGC.
* **Color Azul:** Fuera del alcance del SGC.
* **Borde Punteado:** Departamento externo / No interno (Freelance o Staff externo).

```mermaid
graph TD
    %% Definición de Estilos
    classDef sgc fill:#60a917,stroke:#2D7600,color:#ffffff,stroke-width:2px,font-weight:bold;
    classDef out fill:#1ba1e2,stroke:#006EAF,color:#ffffff,stroke-width:2px,font-weight:bold;
    classDef external stroke-dasharray: 5 5;

    %% Nivel 1: Dirección y Staff
    DIR[DIRECCIÓN]:::sgc
    
    %% Staff (Conectados a Dirección)
    RSGC[RSGC]:::sgc
    CONT[CONTADURÍA]:::out
    
    %% Aplicar estilo externo a Staff
    class RSGC,CONT external

    %% Nivel 2: Departamentos Operativos
    VENT[VENTAS]:::out
    COMP[COMPRAS]:::sgc
    DES[DESARROLLO]:::out
    RSOP[RESPONSABLE DE SOPORTE]:::sgc
    PROD[ARMADO Y PRODUCCIÓN]:::out

    %% Nivel 3: Sub-áreas
    TEST[TESTING]:::out
    ASOP[AGENTE SOPORTE]:::sgc

    %% Relaciones
    
    %% Dirección supervisa a Staff
    DIR --- RSGC
    DIR --- CONT

    %% Dirección supervisa áreas operativas
    DIR --> VENT
    DIR --> COMP
    DIR --> DES
    DIR --> RSOP
    DIR --> PROD

    %% Relaciones Jerárquicas
    DES --> TEST
    RSOP --> ASOP
```
