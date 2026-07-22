# Ejercicio 045 - Logica general 045 - ordenamiento de prioridades

## ¿Cómo pensé el problema?

En un taller mecánico, la atención de vehículos requiere una priorización multicriterio: las emergencias (como ambulancias o patrullas) deben ser atendidas antes que los vehículos particulares, la gravedad de la avería debe anteponerse a las revisiones rutinarias, y a igualdad de condiciones se respeta el orden de llegada.

## Entradas

- `solicitudes`: Arreglo de objetos con propiedades `placa`, `esEmergencia` (booleano), `gravedad` ('alta', 'media', 'baja') y `ordenLlegada` (número entero).

## Reglas aplicadas

- Vehículos marcados como `esEmergencia = true` se posicionan al inicio.
- Entre vehículos de la misma categoría de emergencia, se ordena por `gravedad`: `alta` (3) > `media` (2) > `baja` (1).
- Si coinciden en emergencia y gravedad, se desempata asignando prioridad al de menor `ordenLlegada` (llegó primero).
- Si la entrada no es un arreglo, retorna `[]`.

## Salida

Arreglo de solicitudes ordenado de mayor a menor prioridad de atención.

## Casos de prueba

### Caso normal

Entrada:

```text
solicitudes: [
  { placa: "ABC-123", esEmergencia: false, gravedad: "media", ordenLlegada: 1 },
  { placa: "AMB-911", esEmergencia: true, gravedad: "alta", ordenLlegada: 3 },
  { placa: "XYZ-789", esEmergencia: false, gravedad: "alta", ordenLlegada: 2 }
]
```

Salida:

```text
[
  { placa: 'AMB-911', esEmergencia: true, gravedad: 'alta', ordenLlegada: 3 },
  { placa: 'XYZ-789', esEmergencia: false, gravedad: 'alta', ordenLlegada: 2 },
  { placa: 'ABC-123', esEmergencia: false, gravedad: 'media', ordenLlegada: 1 }
]
```

### Caso borde

Entrada:

```text
solicitudes: null
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
