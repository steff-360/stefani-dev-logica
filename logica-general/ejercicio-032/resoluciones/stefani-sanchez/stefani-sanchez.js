// Ejercicio 032 - Comparación de opciones
// Autor: Stefani Sánchez

function compararOpciones(opciones, criterio) {
  if (!Array.isArray(opciones) || opciones.length === 0) {
    return { accion: "sin accion", motivo: "No se recibieron opciones para comparar." };
  }

  if (criterio === "precio") {
    const ordenadas = [...opciones].sort((a, b) => a.precio - b.precio);
    return {
      accion: `seleccionar ${ordenadas[0].nombre}`,
      motivo: `Es la opción más económica con un precio de $${ordenadas[0].precio}.`,
    };
  }

  if (criterio === "calidad") {
    const mejor = opciones.reduce((prev, curr) =>
      curr.calidad > prev.calidad ? curr : prev
    );
    return {
      accion: `seleccionar ${mejor.nombre}`,
      motivo: `Tiene la mejor calidad con puntuación de ${mejor.calidad}/10.`,
    };
  }

  return { accion: "sin accion", motivo: "El criterio proporcionado no es válido." };
}

// --------------------------
// Prueba 1 - Caso normal
// --------------------------

const paletas = [
  { nombre: "Butterfly Timo Boll", precio: 120, calidad: 9 },
  { nombre: "Stiga Pro Carbon", precio: 85, calidad: 7 },
  { nombre: "DHS Hurricane", precio: 60, calidad: 8 },
];

console.log("PRUEBA 1 - Comparar por precio:");
console.log(compararOpciones(paletas, "precio"));

// --------------------------
// Prueba 2 - Comparar por calidad
// --------------------------

console.log("\nPRUEBA 2 - Comparar por calidad:");
console.log(compararOpciones(paletas, "calidad"));

// --------------------------
// Prueba 3 - Caso borde (lista vacía)
// --------------------------

console.log("\nPRUEBA 3 - Lista vacía:");
console.log(compararOpciones([], "precio"));
