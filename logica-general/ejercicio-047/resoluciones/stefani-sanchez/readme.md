# Ejercicio 047 - Logica general 047 - deteccion de inconsistencias

## ¿Cómo pensé el problema?

En un gestor de playlist musical, es habitual encontrar inconsistencias provocadas por metadatos corruptos o duplicaciones involuntarias. Diseñé un algoritmo de auditoría que examina cada pista para validar que los identificadores sean únicos, que los títulos y artistas estén definidos y que la duración en segundos sea un entero positivo coherente.

## Entradas

- `playlist`: Arreglo de objetos que representan canciones (`id`, `titulo`, `artista`, `duracionSegundos`).

## Reglas aplicadas

- El parámetro `playlist` debe ser un arreglo de objetos.
- Cada canción debe poseer un `id` único.
- `titulo` y `artista` deben ser cadenas de texto no vacías. No se permiten canciones duplicadas con el mismo título y artista.
- `duracionSegundos` debe ser un número finito estrictamente mayor a 0.

## Salida

Objeto con `tieneInconsistencias` (booleano), `totalCanciones`, `totalErrores` y la lista de `errores` encontrados.

## Casos de prueba

### Caso normal

Entrada:

```text
playlist: [
  { id: "track_1", titulo: "Bohemian Rhapsody", artista: "Queen", duracionSegundos: 354 },
  { id: "track_2", titulo: "Hotel California", artista: "Eagles", duracionSegundos: 391 }
]
```

Salida:

```text
{
  tieneInconsistencias: false,
  totalCanciones: 2,
  totalErrores: 0,
  errores: []
}
```

### Caso borde

Entrada:

```text
playlist: [
  { id: "track_1", titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracionSegundos: 482 },
  { id: "track_1", titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracionSegundos: -10 },
  { id: "track_3", titulo: "", artista: "Desconocido", duracionSegundos: 0 }
]
```

Salida:

```text
{
  tieneInconsistencias: true,
  totalCanciones: 3,
  totalErrores: 4,
  errores: [
    "Elemento #2: ID duplicado 'track_1'.",
    "Elemento #2: Canción duplicada 'Stairway to Heaven' de 'Led Zeppelin'.",
    "Elemento #2: Duración inválida (-10). Debe ser mayor a 0 segundos.",
    "Elemento #3: Título faltante o inválido.",
    "Elemento #3: Duración inválida (0). Debe ser mayor a 0 segundos."
  ]
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
