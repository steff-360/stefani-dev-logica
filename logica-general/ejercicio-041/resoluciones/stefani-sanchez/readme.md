# Ejercicio 041 - Logica general 041 - clasificacion por reglas

## ¿Cómo pensé el problema?

Analicé el contexto de un sistema de moderación o gestión en videojuegos competitivos donde se deben evaluar listas de solicitudes o cuentas de usuarios. La lógica se basa en evaluar primero condiciones críticas como estados de riesgo ('bloqueado'), seguido por prioridades altas y finalmente procesar los casos aprobados o normales.

## Entradas

- `items`: Arreglo de objetos con las propiedades `nombre` y `estado` ('aprobado', 'pendiente', 'bloqueado').
- `prioridadGlobal`: Cadena de texto indicando la prioridad general ('alta', 'media', 'baja').

## Reglas aplicadas

- Validación de entrada: si la lista está vacía o no es un arreglo, se devuelve una acción nula.
- Si existe al menos un elemento con estado 'bloqueado', se le asigna máxima prioridad.
- Si no hay bloqueados pero la prioridad global es 'alta', se procesa el primer elemento 'pendiente'.
- En caso de no haber bloqueos ni pendientes prioritarios, se procede a procesar los elementos aprobados.

## Salida

Objeto con las propiedades `accion` (descripción del trabajo a realizar) y `motivo` (justificación lógica del resultado).

## Casos de prueba

### Caso normal

Entrada:

```text
items: [
  { nombre: "Jugador_Alpha", estado: "aprobado" },
  { nombre: "Jugador_Beta", estado: "bloqueado" },
  { nombre: "Jugador_Gamma", estado: "pendiente" }
], prioridadGlobal: "alta"
```

Salida:

```text
{
  accion: 'revisar bloqueado (Jugador_Beta)',
  motivo: 'La regla prioriza riesgos y cuentas bloqueadas antes de tareas normales.'
}
```

### Caso borde

Entrada:

```text
items: [], prioridadGlobal: "baja"
```

Salida:

```text
{
  accion: 'ninguna',
  motivo: 'La lista de items no es válida o está vacía.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
