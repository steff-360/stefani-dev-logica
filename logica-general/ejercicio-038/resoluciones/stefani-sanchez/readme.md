# Ejercicio 038 - Logica general 038 - sistemas de turnos

## ¿Cómo pensé el problema?

En un taller de soldadura industrial, los turnos se deben asignar emparejando la certificación del soldador (TIG, MIG, SMAW) con la especialidad técnica de la estación de trabajo (precisión, estructuras pesadas, reparaciones). Se implementó un algoritmo de asignación directa que filtra y asocia recursos en función de su compatibilidad, controlando aquellos elementos que quedan pendientes.

## Entradas

- `soldadores`: Arreglo de objetos con `nombre` y `certificacion`.
- `estaciones`: Arreglo de objetos con `id` y `tipo`.

## Reglas aplicadas

- Validación de entrada: Ambas listas deben ser arreglos válidos y contener al menos un elemento.
- Compatibilidad por tipo de soldadura:
  - TIG: estaciones de `precision` o `tuberias`.
  - MIG: estaciones de `estructural` o `chasis`.
  - SMAW: estaciones de `reparacion` o `mantenimiento`.
- Asignación de turnos sin duplicación de estaciones de trabajo.

## Salida

Objeto con `asignaciones`, lista de `soldadoresSinAsignar` e identificadores de `estacionesDisponibles`.

## Casos de prueba

### Caso normal

Entrada:

```text
soldadores: [
  { nombre: "Carlos", certificacion: "TIG" },
  { nombre: "Ana", certificacion: "MIG" }
]
estaciones: [
  { id: 101, tipo: "precision" },
  { id: 102, tipo: "estructural" }
]
```

Salida:

```text
{
  asignaciones: [
    {
      soldador: 'Carlos',
      certificacion: 'TIG',
      estacionId: 101,
      tipoEstacion: 'precision'
    },
    {
      soldador: 'Ana',
      certificacion: 'MIG',
      estacionId: 102,
      tipoEstacion: 'estructural'
    }
  ],
  soldadoresSinAsignar: [],
  estacionesDisponibles: []
}
```

### Caso borde

Entrada:

```text
soldadores: []
estaciones: []
```

Salida:

```text
{
  error: 'Entrada inválida: Se requieren listas de soldadores y estaciones no vacías.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
