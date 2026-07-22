// Ejercicio 038 - Logica general 038 - sistemas de turnos
// Autor: Stefani Sánchez

/**
 * Asigna turnos de trabajo en un taller de soldadura según la certificación técnica y la estación.
 * @param {Array<Object>} soldadores - Lista de soldadores con su certificación.
 * @param {Array<Object>} estaciones - Lista de estaciones de soldadura disponibles.
 * @returns {Object} Reporte de turnos asignados, personal sin turno y estaciones libres.
 */
const gestionarTurnosSoldadura = (soldadores, estaciones) => {
  if (
    !Array.isArray(soldadores) ||
    !Array.isArray(estaciones) ||
    soldadores.length === 0 ||
    estaciones.length === 0
  ) {
    return {
      error: "Entrada inválida: Se requieren listas de soldadores y estaciones no vacías.",
    };
  }

  const asignaciones = [];
  const estacionesLibres = [...estaciones];
  const soldadoresSinAsignar = [];

  const mapaCompatibilidad = {
    TIG: ["precision", "tuberias"],
    MIG: ["estructural", "chasis"],
    SMAW: ["reparacion", "mantenimiento"],
  };

  soldadores.forEach((soldador) => {
    const cert = soldador.certificacion?.toUpperCase();
    const tiposCompatibles = mapaCompatibilidad[cert] || [];

    const indexEstacion = estacionesLibres.findIndex((est) =>
      tiposCompatibles.includes(est.tipo?.toLowerCase())
    );

    if (indexEstacion !== -1) {
      const estacionAsignada = estacionesLibres.splice(indexEstacion, 1)[0];
      asignaciones.push({
        soldador: soldador.nombre,
        certificacion: cert,
        estacionId: estacionAsignada.id,
        tipoEstacion: estacionAsignada.tipo,
      });
    } else {
      soldadoresSinAsignar.push(soldador.nombre);
    }
  });

  return {
    asignaciones,
    soldadoresSinAsignar,
    estacionesDisponibles: estacionesLibres.map((e) => e.id),
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const soldadoresNormal = [
  { nombre: "Carlos", certificacion: "TIG" },
  { nombre: "Ana", certificacion: "MIG" },
];
const estacionesNormales = [
  { id: 101, tipo: "precision" },
  { id: 102, tipo: "estructural" },
];
console.log(gestionarTurnosSoldadura(soldadoresNormal, estacionesNormales));

console.log("\n=== Caso Borde ===");
console.log(gestionarTurnosSoldadura([], []));
