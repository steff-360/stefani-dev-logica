# Ejercicio 039 - Logica general 039 - inventarios logicos

## ¿Cómo pensé el problema?

En un laboratorio químico, la producción de reactivos y fórmulas requiere verificar la existencia física de insumos en stock antes de iniciar mezclas. Se ideó un sistema de inventario lógico que coteja la cantidad requerida de cada sustancia contra la disponible en almacén, calculando déficits y emitiendo alertas preventivas si el inventario resultante cae por debajo del umbral mínimo de seguridad.

## Entradas

- `reactivosExistentes`: Arreglo de objetos con `nombre`, `cantidad` y `minStock`.
- `formulaRequerida`: Arreglo de objetos con `nombre` y `cantidadRequerida`.

## Reglas aplicadas

- Validación: Ambos arreglos deben ser no vacíos.
- Verificación de disponibilidad: Se compara la existencia de cada reactivo contra la fórmula.
- Determinación de factibilidad: Si falta algún elemento o la cantidad es insuficiente, la fórmula no se autoriza (`ejecutable: false`).
- Alertas de stock crítico: Si al simular el descuento la cantidad queda en o por debajo de `minStock`, se genera una alerta.

## Salida

Objeto indicando `ejecutable`, `reactivosActualizados`, lista de `faltantes`, `alertasStock` y un `mensaje` descriptivo.

## Casos de prueba

### Caso normal

Entrada:

```text
reactivosExistentes: [
  { nombre: "Ácido Clorhídrico", cantidad: 500, minStock: 100 },
  { nombre: "Hidróxido de Sodio", cantidad: 300, minStock: 50 }
]
formulaRequerida: [
  { nombre: "Ácido Clorhídrico", cantidadRequerida: 200 },
  { nombre: "Hidróxido de Sodio", cantidadRequerida: 100 }
]
```

Salida:

```text
{
  ejecutable: true,
  reactivosActualizados: [
    { nombre: 'Ácido Clorhídrico', cantidad: 300 },
    { nombre: 'Hidróxido de Sodio', cantidad: 200 }
  ],
  faltantes: [],
  alertasStock: [],
  mensaje: 'Fórmula química lista para su preparación.'
}
```

### Caso borde

Entrada:

```text
reactivosExistentes: []
formulaRequerida: []
```

Salida:

```text
{
  error: 'Entrada inválida: Se requieren arreglos no vacíos para inventario y fórmula.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
