---
name: docwriter
description: |
  Redacción y edición de documentos ISO 9001 del SGC Corvus. Usar cuando:
  (1) Crear nuevo PG, PP, RPG, RC o IT
  (2) Editar documentos existentes
  (3) Actualizar historial de cambios
  (4) Sincronizar metadatos YAML con contenido
  IMPORTANTE: Mantener formato actual de los documentos - no inventar estilos nuevos.
---

# DocWriter - SGC Corvus

Skill para redacción consistente de documentación ISO 9001.

## Principio Central

**Mimetismo:** Copiar el estilo exacto de los documentos existentes. No inventar formatos nuevos.

## Uso de Sequential Thinking

Invocar MCP `sequential-thinking` cuando:
- Decidir si un cambio amerita subir revisión
- Determinar qué secciones afecta una modificación
- Verificar consistencia entre YAML, header e historial
- Evaluar si crear documento nuevo o modificar existente

## Reglas de Versionado

| Tipo Doc | Cuándo sube Rev (+1) | Cuándo NO sube |
|----------|---------------------|----------------|
| **PG/PP/IT** | Cambios en contenido, proceso o estructura | Ortografía, formato menor |
| **RPG/RC** | Solo si cambia ESTRUCTURA (columnas, campos) | Cambios en datos/información |

**Regla clave:** Los RPG son plantillas - los datos no afectan versión.

## Estructura de Documentos

### YAML Frontmatter

**Mínimo obligatorio:**
```yaml
---
google_drive_id: "ID_O_PENDIENTE"
revision: "XX"
last_updated: "DD/MM/YYYY"
responsible: "RSGC"
---
```

**Extendido (recomendado para PG):**
```yaml
---
google_drive_id: "ID_O_PENDIENTE"
revision: "XX"
last_updated: "DD/MM/YYYY"
responsible: "RSGC"
iso_clause: "X.X"
audit_ready: true
tags: ["tag1", "tag2"]
ai_brief: "Resumen de una línea para IA"
pending_actions: ["Acción pendiente si hay"]
---
```

### Link CSS (después del YAML)

```html
<link rel="stylesheet" href="../../reporte-estilo.css">
```

Ajustar `../` según profundidad del archivo.

### Header ISO - PG/PP/IT (4 filas)

```markdown
| PROCEDIMIENTO | PG XX |
| :--- | :--- |
| **NOMBRE EN MAYÚSCULAS** | **Rev. XX** |
| **Fecha Emisión:** DD/MM/YYYY | **Fecha Revisión:** DD/MM/YYYY |
| **Elabora:** Responsable de SGC | **Revisa y Aprueba:** Dirección |
```

### Header ISO - RPG/RC (3 filas)

```markdown
| REGISTRO DE PROCEDIMIENTO | RPG XX XX |
| :--- | :--- |
| **NOMBRE EN MAYÚSCULAS** | **Rev. XX** |
| **Fecha de Emisión:** DD/MM/YYYY | **Responsable:** RSGC |
```

### Separador post-header

```markdown
---
```

## Secciones Estándar PG

Orden y numeración obligatoria:

1. **OBJETIVO** - Una oración que empieza con "Definir..." o "Establecer..."
2. **ALCANCE** - Qué procesos/áreas cubre
3. **RESPONSABILIDADES** - Quién aplica el procedimiento
4. **DEFINICIONES Y ABREVIATURAS** - Lista con `-`
5. **DESARROLLO DEL PROCESO** - Subsecciones 5.1, 5.2, etc.
6. **[Secciones específicas]** - Según el procedimiento
7. **DOCUMENTOS DE REFERENCIA** - Tabla código/nombre
8. **REGISTROS ASOCIADOS** - Tabla código/nombre
9. **HISTORIAL DE CAMBIOS** - Siempre al final

## Formato de Tablas

Alineación izquierda con `:---`:

```markdown
| Código | Nombre |
| :--- | :--- |
| IT 01 | Manual Técnico |
```

## Historial de Cambios

**Ubicación:** Siempre última sección.
**Regla:** UNA línea por día. Múltiples cambios mismo día → separar con `;`

```markdown
## X. HISTORIAL DE CAMBIOS

| Fecha | Rev. | Descripción | Responsable |
| --- | --- | --- | --- |
| DD/MM/YYYY | XX | Cambio A; Cambio B | RSGC |
```

## Convenciones de Estilo

- **Negritas:** Para términos técnicos, nombres de sistemas, roles
- **Listas:** Usar `-` (no `*`)
- **Subsecciones:** Hasta 3 niveles (5.1, 5.1.1, 5.1.1.1)
- **Mayúsculas:** Solo en títulos de sección (## 1. OBJETIVO)
- **Referencias cruzadas:** Usar código completo (PG 05, RPG 05 01)

## Sincronización de Metadatos

Al editar, verificar consistencia entre:

1. `revision` en YAML ↔ Rev. en header ↔ Rev. en título
2. `last_updated` en YAML ↔ Fecha Revisión en header ↔ Última fecha en historial
3. Agregar línea en historial si hubo cambio

## Referencias

- `references/plantilla-pg.md` - Procedimiento General
- `references/plantilla-pp.md` - Procedimiento Particular (casi igual a PG)
- `references/plantilla-rpg.md` - Registro de PG (2 variantes)
- `references/plantilla-rc.md` - Registro Complementario/Crítico
- `references/plantilla-it.md` - Instructivo Técnico (estructura libre)
