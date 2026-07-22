# Ejercicio 031 - Organización de listas

## ¿Cómo pensé el problema?

En la organización de combates de kickboxing, es crucial organizar las listas de peleadores verificando su estado médico o disciplinario. Si un peleador está suspendido o bloqueado, se debe señalar inmediatamente para ajustar la cartelera antes que coordinar otros combates.

## Entradas

- Lista de peleadores (`nombre`, `estado`, `categoria`).
- Nivel de prioridad.

## Reglas aplicadas

- Validar que la lista contenga registros.
- Inspeccionar el estado de cada peleador.
- Priorizar la detección de peleadores suspendidos o bloqueados.
- Retornar informe de la organización de la cartelera.

## Salida

Reporte sobre el estado de la cartelera de kickboxing.

## Casos de prueba

### Caso normal

Entrada:

```text
[
  { nombre: "Alex Pereira", estado: "aprobado", categoria: "84kg" },
  { nombre: "Israel Adesanya", estado: "pendiente", categoria: "84kg" },
  { nombre: "Peleador X", estado: "bloqueado", categoria: "77kg" }
]
```

Salida:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales. Peleador suspendido/bloqueado: "Peleador X".
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
Error: No hay peleadores en la lista para organizar.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
