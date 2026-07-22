# Ejercicio 030 - Lectura de instrucciones

## ¿Cómo pensé el problema?

Al planificar un itinerario de viajes y turismo, se deben procesar múltiples instrucciones o reservas. Si alguna reserva o vuelo está bloqueado o cancelado, es prioritario atender dicho inconveniente antes de dar por confirmado el viaje.

## Entradas

- Arreglo de instrucciones/reservas de viaje (`descripcion`, `estado`).
- Nivel de prioridad.

## Reglas aplicadas

- Validar entrada de datos.
- Leer y recorrer la lista de instrucciones de viaje.
- Priorizar la detección de elementos bloqueados o cancelados.
- Generar reporte con acción y motivo correspondiente.

## Salida

Resultado de la lectura de instrucciones con acción a tomar.

## Casos de prueba

### Caso normal

Entrada:

```text
[
  { descripcion: "Vuelo a París", estado: "aprobado" },
  { descripcion: "Reserva de hotel", estado: "pendiente" },
  { descripcion: "Tour guiado al Museo del Louvre", estado: "bloqueado" }
]
```

Salida:

```text
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales. Reserva/Instrucción afectada: "Tour guiado al Museo del Louvre".
```

### Caso borde

Entrada:

```text
[]
```

Salida:

```text
Error: La lista de instrucciones de viaje está vacía o es inválida.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
