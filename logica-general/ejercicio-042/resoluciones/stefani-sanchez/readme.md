# Ejercicio 042 - Logica general 042 - validacion de datos

## ¿Cómo pensé el problema?

Para el ranking de fútbol sala, desglosé las reglas matemáticas y estructurales necesarias para asegurar la integridad de la tabla de posiciones. Se verifica que todos los valores numéricos sean enteros no negativos y que las fórmulas de puntos (`PG * 3 + PE`) y la coherencia de partidos jugados (`PJ = PG + PE + PP`) se cumplan sin excepciones.

## Entradas

- `equipo`: Objeto con las propiedades `nombre`, `pj` (partidos jugados), `pg` (ganados), `pe` (empatados), `pp` (perdidos), `gf` (goles a favor), `gc` (goles en contra) y `puntos`.

## Reglas aplicadas

- El objeto no debe ser nulo ni indefinido.
- `nombre` debe ser una cadena con texto.
- `pj`, `pg`, `pe`, `pp`, `gf`, `gc`, `puntos` deben ser enteros ≥ 0.
- `pj` debe ser exactamente igual a `pg + pe + pp`.
- `puntos` debe ser exactamente igual a `(pg * 3) + pe`.

## Salida

Objeto con `esValido` (booleano) y `mensaje` explicativo.

## Casos de prueba

### Caso normal

Entrada:

```text
equipo: {
  nombre: "Futsal Stars",
  pj: 10,
  pg: 6,
  pe: 2,
  pp: 2,
  gf: 25,
  gc: 14,
  puntos: 20
}
```

Salida:

```text
{
  esValido: true,
  mensaje: "Datos del equipo 'Futsal Stars' validados correctamente."
}
```

### Caso borde

Entrada:

```text
equipo: {
  nombre: "Rival FC",
  pj: 5,
  pg: 3,
  pe: 1,
  pp: 1,
  gf: 10,
  gc: 8,
  puntos: 15
}
```

Salida:

```text
{
  esValido: false,
  mensaje: "Inconsistencia: Los puntos registrados (15) no coinciden con los puntos calculados (10)."
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
