# Ejercicio 036 - Logica general 036 - matrices simples

## ¿Cómo pensé el problema?

En animación 3D, el proceso de renderizado suele organizarse en una cuadrícula o matriz de fotogramas (frames). Se diseñó un algoritmo que recorre la matriz bidimensional, contabiliza los estados de cada fotograma (completado, en proceso o fallido), identifica las coordenadas exactas de las fallas y calcula el porcentaje global de éxito.

## Entradas

- `matrizFrames`: Arreglo de arreglos con cadenas de caracteres representando los estados de los fotogramas (ej. `[["completado", "fallido"], ["completado", "en_proceso"]]`).

## Reglas aplicadas

- Validación: Si la entrada no es una matriz bidimensional válida o está vacía, se retorna un mensaje de error.
- Recorrido por filas y columnas acumulando contadores de estados.
- Registro de coordenadas `[fila, columna]` para cada fotograma fallido.
- Cálculo de porcentaje de éxito (`completados / totalFrames * 100`).
- Diagnóstico del estado general según la presencia de fotogramas fallidos o pendientes.

## Salida

Objeto con `totalFrames`, `completados`, `enProceso`, `fallidos`, `posicionesFallidas`, `porcentajeExito` y `estadoGeneral`.

## Casos de prueba

### Caso normal

Entrada:

```text
matrizFrames: [
  ["completado", "completado", "completado"],
  ["completado", "fallido", "completado"],
  ["completado", "completado", "en_proceso"]
]
```

Salida:

```text
{
  totalFrames: 9,
  completados: 7,
  enProceso: 1,
  fallidos: 1,
  posicionesFallidas: [ [ 1, 1 ] ],
  porcentajeExito: '77.78%',
  estadoGeneral: 'Requiere re-renderizado de fotogramas fallidos'
}
```

### Caso borde

Entrada:

```text
matrizFrames: []
```

Salida:

```text
{
  error: 'Entrada inválida: Debe proporcionar una matriz de fotogramas bidimensional no vacía.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
