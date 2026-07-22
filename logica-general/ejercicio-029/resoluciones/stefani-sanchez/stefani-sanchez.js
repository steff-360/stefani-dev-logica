// Ejercicio 029 - Simulación de estados
// Autor: Stefani Sánchez

const simularEstadosTerror = (escenas, prioridad = "alta") => {
  if (!Array.isArray(escenas) || escenas.length === 0) {
    return "Error: No hay escenas registradas para simular estados.";
  }

  const escenaBloqueada = escenas.find(
    (escena) => escena.estado === "bloqueado" || escena.estado === "censurado"
  );

  if (escenaBloqueada) {
    return `accion: revisar bloqueado\nmotivo: la regla prioriza riesgos antes de tareas normales. La escena "${escenaBloqueada.titulo}" se encuentra ${escenaBloqueada.estado}.`;
  }

  return "accion: simulación completada\nmotivo: todas las escenas de la película de miedo superaron la simulación de estados correctamente.";
};

// Caso de prueba normal
const escenasTerror = [
  { titulo: "Aparición del fantasma", estado: "aprobado" },
  { titulo: "Ritual en el sótano", estado: "pendiente" },
  { titulo: "Efectos de maquillaje sangriento", estado: "bloqueado" }
];
console.log("--- Caso Normal ---");
console.log(simularEstadosTerror(escenasTerror, "alta"));

// Caso borde
console.log("\n--- Caso Borde ---");
console.log(simularEstadosTerror([]));
