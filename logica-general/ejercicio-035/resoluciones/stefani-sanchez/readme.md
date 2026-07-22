# Ejercicio 035 - Logica general 035 - reglas de negocio

## ¿Cómo pensé el problema?

Para este reto de dibujo digital se definieron las especificaciones técnicas indispensables que debe tener una entrega profesional (resolución en DPI, perfil de color según destino, formato de archivo y orden en las capas). Se creó un evaluador que valida la estructura del objeto de entrada y acumula las desviaciones respecto a las reglas de negocio.

## Entradas

- `proyecto`: Objeto con las propiedades `nombre`, `resolucionDpi`, `formato`, `modoColor`, `destino` y `capasOrganizadas`.

## Reglas aplicadas

- Validación de entrada: El parámetro debe ser un objeto no vacío con datos válidos.
- Resolución mínima: 300 DPI para destino impresión, 72 DPI para destino web.
- Formatos permitidos: PSD, PNG, TIFF o SVG.
- Modo de color: CMYK para impresión, RGB para pantallas/web.
- Estructura: Las capas deben estar debidamente organizadas (`capasOrganizadas: true`).

## Salida

Objeto con el estado `aprobado` (booleano), la lista de `observaciones` y el `mensaje` explicativo final.

## Casos de prueba

### Caso normal

Entrada:

```text
proyecto: {
  nombre: "Ilustración Comic",
  resolucionDpi: 300,
  formato: "PSD",
  modoColor: "CMYK",
  destino: "impresion",
  capasOrganizadas: true
}
```

Salida:

```text
{
  proyecto: 'Ilustración Comic',
  aprobado: true,
  observaciones: [],
  mensaje: 'El proyecto de dibujo digital cumple con todas las reglas de negocio.'
}
```

### Caso borde

Entrada:

```text
proyecto: {}
```

Salida:

```text
{
  error: 'Entrada inválida: Debe proporcionar un objeto de proyecto válido.'
}
```

## Ejecución

Desde la carpeta del ejercicio ejecutar:

```bash
node stefani-sanchez.js
```
