# Ejercicio 027 - Detección de inconsistencias

## ¿Cómo pensé el problema?

Analicé la temática de playlists musicales identificando que en una lista de canciones pueden existir temas aprobados, pendientes o bloqueados. La regla principal requiere detectar elementos en estado de riesgo o bloqueados con mayor prioridad antes de procesar elementos normales.

## Entradas

- Lista de canciones (arreglo de objetos con propiedad `titulo` y `estado`).
- Prioridad de revisión (cadena de texto, por defecto "alta").

## Reglas aplicadas

- Validar que la entrada sea un arreglo no vacío.
- Buscar elementos con estado "bloqueado" o "corrupto".
- Si se encuentra un elemento bloqueado, indicar la acción de revisar el bloqueado inmediatamente.
- Si todos los elementos están en orden, retornar que la playlist ha sido validada.

## Salida

Un texto descriptivo con la acción a tomar y el motivo del resultado.

## Casos de prueba

### Caso normal

Entrada:

```text
[
  { titulo: "Canción A", estado: "aprobado" },
  { titulo: "Canción B", estado: "pendiente" },
  { titulo: "Canción C", estado: "bloqueado" }
]
```

Salida:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales. Elemento afectado: "Canción C".
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
Error: La playlist está vacía o los datos no son un arreglo válido.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
