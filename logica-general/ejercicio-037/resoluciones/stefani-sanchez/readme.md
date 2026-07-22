# Ejercicio 037 - Logica general 037 - tablas de decision

## ¿Cómo pensé el problema?

En arquitectura 3D, la elección de motores de render y técnicas de optimización depende de la complejidad geométrica (número de polígonos) y del objetivo final del proyecto (recorrido en tiempo real, renders estáticos en alta resolución o realidad virtual). Se construyó una tabla de decisión lógica mediante condicionales para determinar el flujo de trabajo idóneo.

## Entradas

- `modelo`: Objeto con `nombre`, `poligonos` (número), `usoDestino` (cadena) y `texturas4k` (booleano).

## Reglas aplicadas

- Validación: El objeto debe contener un número válido y positivo de polígonos.
- Regla 1 (Polígonos > 1M y recorrido virtual): Retopología obligatoria + Bakeado en Unreal Engine 5.
- Regla 2 (Polígonos > 1M y render estático): Ray-Tracing en V-Ray / Corona Render.
- Regla 3 (Polígonos <= 1M y VR interactivo): Shaders en tiempo real en Unity / Unreal Engine.
- Regla general: Flujo estándar en Blender / 3ds Max.

## Salida

Objeto con el diagnóstico del modelo, `decision`, `motor` recomendado y `nivelOptimizacion`.

## Casos de prueba

### Caso normal

Entrada:

```text
modelo: {
  nombre: "Edificio Corporativo",
  poligonos: 1500000,
  usoDestino: "recorrido_virtual",
  texturas4k: true
}
```

Salida:

```text
{
  modelo: 'Edificio Corporativo',
  poligonos: 1500000,
  usoDestino: 'recorrido_virtual',
  texturas4k: true,
  decision: 'Bakeado de iluminación y retopología obligatoria',
  motor: 'Unreal Engine 5',
  nivelOptimizacion: 'Crítico'
}
```

### Caso borde

Entrada:

```text
modelo: {
  nombre: "Maqueta Inválida",
  poligonos: -500,
  usoDestino: "recorrido_virtual"
}
```

Salida:

```text
{
  error: 'Entrada inválida: El número de polígonos debe ser una cifra mayor a cero.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
