# Ejercicio 043 - Logica general 043 - toma de decisiones

## ¿Cómo pensé el problema?

En un torneo de esports, la clasificación debe considerar tanto el nivel competitivo (victorias, derrotas, ratio KDA) como la conducta deportiva. Diseñé un algoritmo jerárquico que evalúa primero las sanciones antes de analizar las métricas numéricas para determinar si el equipo clasifica directamente, va a repechaje o es eliminado.

## Entradas

- `datosEquipo`: Objeto con las propiedades `equipo` (nombre), `victorias`, `derrotas`, `kda` y `sanciones`.

## Reglas aplicadas

- Si hay cualquier cantidad de sanciones (`sanciones > 0`), el equipo queda inmediatamente **Descalificado**.
- Si el porcentaje de victorias es de al menos 60% y el KDA es de al menos 3.0, clasifica a **Playoffs**.
- Si el porcentaje de victorias es de al menos 50% o el KDA es de al menos 2.5, avanza a **Fase de Repechaje**.
- De lo contrario, queda **Eliminado**.

## Salida

Objeto con la `decision` tomada y el `motivo` detallado.

## Casos de prueba

### Caso normal

Entrada:

```text
datosEquipo: {
  equipo: "CyberDragons",
  victorias: 7,
  derrotas: 3,
  kda: 3.8,
  sanciones: 0
}
```

Salida:

```text
{
  decision: 'Clasificado a Playoffs',
  motivo: 'Excelente rendimiento: 70.0% de victorias y KDA de 3.8.'
}
```

### Caso borde

Entrada:

```text
datosEquipo: {
  equipo: "ShadowGamers",
  victorias: 9,
  derrotas: 1,
  kda: 5.0,
  sanciones: 1
}
```

Salida:

```text
{
  decision: 'Descalificado',
  motivo: "El equipo 'ShadowGamers' posee 1 sancion(es) disciplinarias."
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
