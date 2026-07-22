# Ejercicio 046 - Logica general 046 - busqueda de elementos

## ¿Cómo pensé el problema?

En una base de datos de autos hiperdeportivos, es necesario realizar búsquedas eficientes tanto por coincidencias directas del nombre del modelo como por filtrados por rangos de especificaciones de rendimiento (velocidad máxima en km/h o potencia en caballos de fuerza).

## Entradas

- `catalogo`: Arreglo de objetos de hiperdeportivos con `marca`, `modelo`, `velocidadMaxima` y `caballosFuerza`.
- `parametroBusqueda`: Objeto con criterios (`modelo`, `velocidadMinima`, `cvMinimos`).

## Reglas aplicadas

- Validación de entrada: si el catálogo no es válido o está vacío, retorna `encontrado: false`.
- Si se proporciona un `modelo`, realiza una búsqueda case-insensitive del auto.
- Si se especifican métricas como `velocidadMinima` o `cvMinimos`, filtra la lista de autos que superen dichos umbrales.

## Salida

Objeto con `encontrado` (booleano), `resultados` (arreglo de autos coincidentes) y `mensaje`.

## Casos de prueba

### Caso normal

Entrada:

```text
catalogo: [
  { marca: "Bugatti", modelo: "Chiron Super Sport", velocidadMaxima: 440, caballosFuerza: 1600 },
  { marca: "Koenigsegg", modelo: "Jesko Absolut", velocidadMaxima: 530, caballosFuerza: 1600 }
],
parametroBusqueda: { modelo: "Jesko Absolut" }
```

Salida:

```text
{
  encontrado: true,
  resultados: [
    { marca: 'Koenigsegg', modelo: 'Jesko Absolut', velocidadMaxima: 530, caballosFuerza: 1600 }
  ],
  mensaje: "Auto 'Jesko Absolut' encontrado."
}
```

### Caso borde

Entrada:

```text
catalogo: [...], parametroBusqueda: { modelo: "Ferrari F40" }
```

Salida:

```text
{
  encontrado: false,
  resultados: [],
  mensaje: "No se encontró el modelo 'Ferrari F40'."
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
