// Ejercicio 030 - Lectura de instrucciones
// Autor: Stefani Sánchez

const procesarInstruccionesViaje = (instrucciones, prioridad = "alta") => {
  if (!Array.isArray(instrucciones) || instrucciones.length === 0) {
    return "Error: La lista de instrucciones de viaje está vacía o es inválida.";
  }

  const elementoBloqueado = instrucciones.find(
    (item) => item.estado === "bloqueado" || item.estado === "cancelado"
  );

  if (elementoBloqueado) {
    return `accion: revisar bloqueado\nmotivo: la regla prioriza riesgos antes de tareas normales. Reserva/Instrucción afectada: "${elementoBloqueado.descripcion}".`;
  }

  return "accion: itinerario confirmado\nmotivo: todas las instrucciones de viaje se procesaron sin novedades o bloqueos.";
};

// Caso de prueba normal
const listaViaje = [
  { descripcion: "Vuelo a París", estado: "aprobado" },
  { descripcion: "Reserva de hotel", estado: "pendiente" },
  { descripcion: "Tour guiado al Museo del Louvre", estado: "bloqueado" }
];
console.log("--- Caso Normal ---");
console.log(procesarInstruccionesViaje(listaViaje, "alta"));

// Caso borde
console.log("\n--- Caso Borde ---");
console.log(procesarInstruccionesViaje([]));
