# Ejercicio 040 - Logica general 040 - estrategias de seleccion

## ¿Cómo pensé el problema?

En el contexto de la comida urbana, tomar decisiones sobre qué comer implica equilibrar restricciones duras (presupuesto disponible, tiempo máximo de espera y preferencias dietéticas) con una estrategia de selección (buscar lo más económico, lo más rápido o un equilibrio entre ambos). Se implementó una función de filtrado dinámico seguida de una ordenación parametrizada por estrategia.

## Entradas

- `opciones`: Arreglo de objetos con `nombre`, `precio`, `tiempoMin` y `vegetariano`.
- `criterio`: Objeto con `presupuestoMax`, `tiempoMax`, `soloVegetariano` y `estrategia` (`"precio"`, `"rapido"` o `"balanceado"`).

## Reglas aplicadas

- Validación: El arreglo de opciones no debe estar vacío.
- Filtrado estricto por presupuesto (`precio <= presupuestoMax`), tiempo (`tiempoMin <= tiempoMax`) y preferencia vegetariana.
- Estrategias de selección:
  - `"precio"`: Ordena de menor a mayor precio.
  - `"rapido"`: Ordena de menor a mayor tiempo de preparación.
  - `"balanceado"`: Evalúa la suma de precio + tiempo de preparación.

## Salida

Objeto con la propiedad `seleccion` (la mejor opción), `opcionesFiltradasCount` y el `motivo` explicativo.

## Casos de prueba

### Caso normal

Entrada:

```text
opciones: [
  { nombre: "Tacos de Canasta", precio: 12, tiempoMin: 5, vegetariano: true },
  { nombre: "Hamburguesa Gourmet", precio: 30, tiempoMin: 25, vegetariano: false },
  { nombre: "Arepa de Queso", precio: 15, tiempoMin: 10, vegetariano: true }
]
criterio: {
  presupuestoMax: 20,
  tiempoMax: 15,
  soloVegetariano: true,
  estrategia: "precio"
}
```

Salida:

```text
{
  seleccion: {
    nombre: 'Tacos de Canasta',
    precio: 12,
    tiempoMin: 5,
    vegetariano: true
  },
  opcionesFiltradasCount: 2,
  motivo: "Opción seleccionada con éxito aplicando la estrategia de 'precio'."
}
```

### Caso borde

Entrada:

```text
opciones: []
criterio: {}
```

Salida:

```text
{
  error: 'Entrada inválida: Debe proporcionar una lista de opciones de comida no vacía.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
