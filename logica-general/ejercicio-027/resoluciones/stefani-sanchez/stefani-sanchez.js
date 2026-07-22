// Ejercicio 027 - Detección de inconsistencias
// Autor: Stefani Sánchez

const evaluarPlaylist = (canciones, prioridad = "alta") => {
  if (!Array.isArray(canciones) || canciones.length === 0) {
    return "Error: La playlist está vacía o los datos no son un arreglo válido.";
  }

  const cancionInconsistente = canciones.find(
    (cancion) => cancion.estado === "bloqueado" || cancion.estado === "corrupto"
  );

  if (cancionInconsistente) {
    return `accion: revisar bloqueado\nmotivo: la regla prioriza riesgos antes de tareas normales. Elemento afectado: "${cancionInconsistente.titulo}".`;
  }

  return "accion: playlist validada\nmotivo: no se detectaron inconsistencias en la lista de canciones.";
};

// Caso de prueba normal
const playlistNormal = [
  { titulo: "Canción A", estado: "aprobado" },
  { titulo: "Canción B", estado: "pendiente" },
  { titulo: "Canción C", estado: "bloqueado" }
];
console.log("--- Caso Normal ---");
console.log(evaluarPlaylist(playlistNormal, "alta"));

// Caso borde
console.log("\n--- Caso Borde ---");
console.log(evaluarPlaylist([]));
