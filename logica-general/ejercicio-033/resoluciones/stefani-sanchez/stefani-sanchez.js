// Ejercicio 033 - Resolución de casos
// Autor: Stefani Sánchez

function resolverCaso(saltos, condicionClima) {
  if (!Array.isArray(saltos) || saltos.length === 0) {
    return { accion: "sin accion", motivo: "No hay registros de saltos." };
  }

  if (condicionClima === "tormenta") {
    return {
      accion: "cancelar todos los saltos",
      motivo: "Las condiciones climáticas no permiten saltar con seguridad.",
    };
  }

  const saltosAprobados = saltos.filter((s) => s.estado === "aprobado");
  const saltosPendientes = saltos.filter((s) => s.estado === "pendiente");
  const saltosBloqueados = saltos.filter((s) => s.estado === "bloqueado");

  if (saltosBloqueados.length > 0) {
    return {
      accion: `revisar bloqueado: ${saltosBloqueados[0].saltador}`,
      motivo: "Hay saltos bloqueados que requieren revisión antes de continuar.",
    };
  }

  if (saltosPendientes.length > 0) {
    return {
      accion: `procesar pendiente: ${saltosPendientes[0].saltador}`,
      motivo: `Hay ${saltosPendientes.length} salto(s) pendiente(s) por revisar.`,
    };
  }

  return {
    accion: "todos los saltos aprobados",
    motivo: `Se aprobaron ${saltosAprobados.length} salto(s). Listos para ejecutar.`,
  };
}

// --------------------------
// Prueba 1 - Caso normal
// --------------------------

const saltos = [
  { saltador: "Carlos", estado: "aprobado", altura: 4000 },
  { saltador: "María", estado: "pendiente", altura: 3500 },
  { saltador: "Pedro", estado: "bloqueado", altura: 5000 },
];

console.log("PRUEBA 1 - Caso con bloqueado:");
console.log(resolverCaso(saltos, "despejado"));

// --------------------------
// Prueba 2 - Caso con tormenta
// --------------------------

console.log("\nPRUEBA 2 - Clima con tormenta:");
console.log(resolverCaso(saltos, "tormenta"));

// --------------------------
// Prueba 3 - Caso borde (sin saltos)
// --------------------------

console.log("\nPRUEBA 3 - Lista vacía:");
console.log(resolverCaso([], "despejado"));
