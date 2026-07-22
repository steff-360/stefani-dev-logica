// Ejercicio 028 - Flujos paso a paso
// Autor: Stefani Sánchez

const evaluarFlujoPelicula = (pasosProduccion, prioridad = "alta") => {
  if (!Array.isArray(pasosProduccion) || pasosProduccion.length === 0) {
    return "Error: No se proporcionaron pasos del flujo de producción.";
  }

  const pasoBloqueado = pasosProduccion.find(
    (paso) => paso.estado === "bloqueado"
  );

  if (pasoBloqueado) {
    return `accion: revisar bloqueado\nmotivo: la regla prioriza riesgos antes de tareas normales. El paso "${pasoBloqueado.nombre}" requiere atención inmediata.`;
  }

  return "accion: continuar flujo\nmotivo: todos los pasos de la producción de ciencia ficción avanzan correctamente.";
};

// Caso de prueba normal
const flujoPelicula = [
  { nombre: "Escritura de guion", estado: "aprobado" },
  { nombre: "Rodaje de escenas de acción", estado: "pendiente" },
  { nombre: "Efectos especiales CGI", estado: "bloqueado" }
];
console.log("--- Caso Normal ---");
console.log(evaluarFlujoPelicula(flujoPelicula, "alta"));

// Caso borde
console.log("\n--- Caso Borde ---");
console.log(evaluarFlujoPelicula(null));
