// Ejercicio 034 - Logica general 034 - diagnostico de errores
// Autor: Stefani Sánchez

/**
 * Diagnostica errores y determina la prioridad de revisión en un estudio de tatuajes.
 * @param {Array<string|Object>} items - Lista de elementos o tareas a diagnosticar.
 * @param {string} prioridad - Nivel de prioridad ("alta", "media", "baja").
 * @returns {Object} Resultado del diagnóstico con la acción a tomar y el motivo.
 */
const diagnosticarErroresTatuaje = (items, prioridad = "alta") => {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      error: "Entrada inválida: Debe proporcionar una lista de ítems no vacía.",
    };
  }

  const tieneBloqueado = items.some(
    (item) => item === "bloqueado" || (typeof item === "object" && item.estado === "bloqueado")
  );

  if (tieneBloqueado) {
    return {
      accion: "revisar bloqueado",
      motivo: "la regla prioriza riesgos antes de tareas normales.",
    };
  }

  const tienePendiente = items.some(
    (item) => item === "pendiente" || (typeof item === "object" && item.estado === "pendiente")
  );

  if (tienePendiente) {
    return {
      accion: "procesar pendiente",
      motivo: "no hay bloqueos críticos, se atiende el trabajo pendiente.",
    };
  }

  return {
    accion: "continuar operación",
    motivo: "todos los ítems y herramientas están aprobados.",
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const casoNormal = diagnosticarErroresTatuaje(
  ["aprobado", "pendiente", "bloqueado"],
  "alta"
);
console.log(casoNormal);

console.log("\n=== Caso Borde ===");
const casoBorde = diagnosticarErroresTatuaje([], "alta");
console.log(casoBorde);
