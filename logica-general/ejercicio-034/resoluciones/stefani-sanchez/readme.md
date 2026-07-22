# Ejercicio 034 - Logica general 034 - diagnostico de errores

## ¿Cómo pensé el problema?

El problema se aborda identificando primero si existen fallas críticas o elementos en estado "bloqueado" que puedan comprometer la seguridad o la calidad en el estudio de tatuajes. Se estructuró una función que valida los datos recibidos y aplica reglas de prioridad para retornar una acción preventiva y su motivo.

## Entradas

- `items`: Arreglo de cadenas u objetos representando el estado de los instrumentos o procesos (ej. `["aprobado", "pendiente", "bloqueado"]`).
- `prioridad`: Cadena con el nivel de prioridad asignado (ej. `"alta"`).

## Reglas aplicadas

- Si la lista de entradas es nula o vacía, se retorna un mensaje de error de validación.
- Si existe al menos un elemento con estado `"bloqueado"`, la acción inmediata es `"revisar bloqueado"`.
- Si no hay elementos bloqueados pero sí `"pendiente"`, se asigna `"procesar pendiente"`.
- Si todos los elementos están en `"aprobado"`, se autoriza `"continuar operación"`.

## Salida

Objeto con la propiedad `accion` indicando el paso a seguir y `motivo` con la justificación del diagnóstico.

## Casos de prueba

### Caso normal

Entrada:

```text
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
```

Salida:

```text
{
  accion: 'revisar bloqueado',
  motivo: 'la regla prioriza riesgos antes de tareas normales.'
}
```

### Caso borde

Entrada:

```text
items: []
prioridad: alta
```

Salida:

```text
{
  error: 'Entrada inválida: Debe proporcionar una lista de ítems no vacía.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
