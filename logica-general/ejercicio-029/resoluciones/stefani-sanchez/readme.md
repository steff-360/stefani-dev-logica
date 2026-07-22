# Ejercicio 029 - Simulación de estados

## ¿Cómo pensé el problema?

En la edición y catalogación de películas de miedo, las escenas pasan por distintas simulaciones de estado (aprobado, pendiente, bloqueado, censurado). El sistema debe simular el flujo de estados e identificar si existe alguna escena crítica bloqueada antes de avanzar al producto final.

## Entradas

- Arreglo de escenas (con campos `titulo` y `estado`).
- Nivel de prioridad de la regla.

## Reglas aplicadas

- Verificar que los datos de entrada sean válidos y no vacíos.
- Evaluar cada estado de la escena en la simulación.
- Si existe una escena en estado "bloqueado" o "censurado", priorizar su atención inmediata.
- Si todas las escenas están aprobadas o en orden, finalizar la simulación con éxito.

## Salida

Un reporte textual con la acción sugerida y la justificación.

## Casos de prueba

### Caso normal

Entrada:

```text
[
  { titulo: "Aparición del fantasma", estado: "aprobado" },
  { titulo: "Ritual en el sótano", estado: "pendiente" },
  { titulo: "Efectos de maquillaje sangriento", estado: "bloqueado" }
]
```

Salida:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales. La escena "Efectos de maquillaje sangriento" se encuentra bloqueado.
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
Error: No hay escenas registradas para simular estados.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
