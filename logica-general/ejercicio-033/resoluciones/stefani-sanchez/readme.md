# Ejercicio 033 - Resolución de casos

## ¿Cómo pensé el problema?

Identifiqué que se recibe una lista de saltos de paracaidismo con diferentes estados y una condición climática. Las reglas priorizan la seguridad: primero revisar el clima, luego los casos bloqueados, después los pendientes y finalmente confirmar los aprobados.

## Entradas

- Lista de saltos con saltador, estado y altura.
- Condición climática.

## Reglas aplicadas

- Si hay tormenta, cancelar todos los saltos.
- Si hay saltos bloqueados, revisarlos primero.
- Si hay saltos pendientes, procesarlos.
- Si todos están aprobados, confirmar ejecución.
- Si la lista está vacía, indicar que no hay registros.

## Salida

Un objeto con la acción a tomar y el motivo de la decisión.

## Casos de prueba

### Caso normal

Entrada:

```text
saltos: [Carlos-aprobado, María-pendiente, Pedro-bloqueado]
clima: despejado
```

Salida:

```text
accion: revisar bloqueado: Pedro
motivo: Hay saltos bloqueados que requieren revisión antes de continuar.
```

### Caso borde

Entrada:

```text
saltos: []
clima: despejado
```

Salida:

```text
accion: sin accion
motivo: No hay registros de saltos.
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
