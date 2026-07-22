# Ejercicio 028 - Flujos paso a paso

## ¿Cómo pensé el problema?

En el contexto de producción de películas de ciencia ficción, los procesos deben seguir una secuencia de etapas (guion, rodaje, CGI, etc.). Si alguna de estas etapas se detiene o bloquea, el flujo completo se detiene. Por tanto, la lógica debe evaluar paso a paso el estado de cada etapa y dar máxima prioridad a la resolución de bloqueos.

## Entradas

- Lista de pasos de producción (arreglo de objetos con `nombre` y `estado`).
- Prioridad del análisis (por defecto "alta").

## Reglas aplicadas

- Validar la existencia y formato correcto del arreglo de entrada.
- Recorrer de forma secuencial cada paso del flujo.
- Si se detecta un paso en estado "bloqueado", detener la verificación y retornar la alerta con mayor prioridad.
- Si todos están aprobados o pendientes sin bloqueos, permitir continuar el flujo.

## Salida

Mensaje indicando si se debe revisar un paso bloqueado o si se puede continuar con el flujo de producción.

## Casos de prueba

### Caso normal

Entrada:

```text
[
  { nombre: "Escritura de guion", estado: "aprobado" },
  { nombre: "Rodaje de escenas de acción", estado: "pendiente" },
  { nombre: "Efectos especiales CGI", estado: "bloqueado" }
]
```

Salida:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales. El paso "Efectos especiales CGI" requiere atención inmediata.
```

### Caso borde

Entrada:

```text
null
```

Salida:

```text
Error: No se proporcionaron pasos del flujo de producción.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
