// Ejercicio 031 - Organización de listas
// Autor: Stefani Sánchez

const organizarListaKickboxing = (peleadores, prioridad = "alta") => {
  if (!Array.isArray(peleadores) || peleadores.length === 0) {
    return "Error: No hay peleadores en la lista para organizar.";
  }

  const peleadorBloqueado = peleadores.find(
    (p) => p.estado === "bloqueado" || p.estado === "suspendido"
  );

  if (peleadorBloqueado) {
    return `accion: revisar bloqueado\nmotivo: la regla prioriza riesgos antes de tareas normales. Peleador suspendido/bloqueado: "${peleadorBloqueado.nombre}".`;
  }

  return "accion: cartelera organizada\nmotivo: la lista de peleadores de kickboxing fue verificada sin incidencias.";
};

// Caso de prueba normal
const listaKickboxing = [
  { nombre: "Alex Pereira", estado: "aprobado", categoria: "84kg" },
  { nombre: "Israel Adesanya", estado: "pendiente", categoria: "84kg" },
  { nombre: "Peleador X", estado: "bloqueado", categoria: "77kg" }
];
console.log("--- Caso Normal ---");
console.log(organizarListaKickboxing(listaKickboxing, "alta"));

// Caso borde
console.log("\n--- Caso Borde ---");
console.log(organizarListaKickboxing([]));
