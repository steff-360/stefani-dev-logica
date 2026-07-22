# Ejercicio 044 - Logica general 044 - filtros por condiciones

## ¿Cómo pensé el problema?

Para gestionar un inventario de motocicletas, se requiere un mecanismo de búsqueda dinámico donde un usuario pueda especificar múltiples filtros opcionales (presupuesto máximo, cilindrada mínima, disponibilidad o marca). Implementé un filtro compuesto en JavaScript que valida cada condición antes de incluir una moto en el resultado.

## Entradas

- `inventario`: Arreglo de objetos donde cada uno representa una motocicleta (`id`, `modelo`, `marca`, `cilindrada`, `precio`, `disponible`).
- `criterios`: Objeto opcional con propiedades como `precioMax`, `marca`, `cilindradaMin`, `soloDisponibles`.

## Reglas aplicadas

- Si `inventario` no es un arreglo válido, retorna una lista vacía `[]`.
- Si se especifica `precioMax`, solo se incluyen motos con `precio <= precioMax`.
- Si se especifica `marca`, se realiza una comparación insensible a mayúsculas/minúsculas.
- Si se especifica `cilindradaMin`, solo se incluyen motos con `cilindrada >= cilindradaMin`.
- Si `soloDisponibles` es verdadero, solo se filtran motos con `disponible === true`.

## Salida

Arreglo de motocicletas que satisfacen todos los filtros especificados.

## Casos de prueba

### Caso normal

Entrada:

```text
inventario: [
  { id: 1, modelo: "Ninja 400", marca: "Kawasaki", cilindrada: 399, precio: 6500, disponible: true },
  { id: 2, modelo: "CB500F", marca: "Honda", cilindrada: 471, precio: 6200, disponible: true },
  { id: 3, modelo: "Duke 390", marca: "KTM", cilindrada: 373, precio: 5800, disponible: false }
],
criterios: { precioMax: 6300, cilindradaMin: 350, soloDisponibles: true }
```

Salida:

```text
[
  { id: 2, modelo: 'CB500F', marca: 'Honda', cilindrada: 471, precio: 6200, disponible: true }
]
```

### Caso borde

Entrada:

```text
inventario: [], criterios: { precioMax: 5000 }
```

Salida:

```text
[]
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
