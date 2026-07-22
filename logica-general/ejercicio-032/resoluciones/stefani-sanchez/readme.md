# Ejercicio 032 - Comparación de opciones

## ¿Cómo pensé el problema?

Primero identifiqué que se necesitan dos entradas: una lista de opciones (paletas de pingpong) y un criterio de comparación (precio o calidad). Luego definí las reglas para ordenar o filtrar según el criterio elegido.

## Entradas

- Lista de opciones con nombre, precio y calidad.
- Criterio de comparación (precio o calidad).

## Reglas aplicadas

- Si el criterio es "precio", ordenar de menor a mayor y seleccionar la más económica.
- Si el criterio es "calidad", buscar la de mayor puntuación.
- Si la lista está vacía, mostrar un mensaje indicándolo.
- Si el criterio no es válido, informar al usuario.

## Salida

Un objeto con la acción a tomar y el motivo de la selección.

## Casos de prueba

### Caso normal

Entrada:

```text
opciones: [Butterfly $120 cal:9, Stiga $85 cal:7, DHS $60 cal:8]
criterio: precio
```

Salida:

```text
accion: seleccionar DHS Hurricane
motivo: Es la opción más económica con un precio de $60.
```

### Caso borde

Entrada:

```text
opciones: []
criterio: precio
```

Salida:

```text
accion: sin accion
motivo: No se recibieron opciones para comparar.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
