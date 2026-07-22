// Ejercicio 043 - Logica general 043 - toma de decisiones
// Autor: Stefani Sánchez

/**
 * Determina la clasificación y decisión final para un equipo en un torneo de esports.
 * @param {Object} datosEquipo - Información de desempeño y disciplina del equipo.
 * @returns {Object} Decisión final con estado y justificación.
 */
const tomarDecisionTorneo = (datosEquipo) => {
  if (!datosEquipo || typeof datosEquipo !== 'object') {
    return { decision: 'Rechazado', motivo: 'Datos del equipo no provistos o formato incorrecto.' };
  }

  const { equipo, victorias, derrotas, kda, sanciones } = datosEquipo;

  if (typeof equipo !== 'string' || equipo.trim() === '') {
    return { decision: 'Rechazado', motivo: 'Nombre del equipo no válido.' };
  }

  if (typeof sanciones === 'number' && sanciones > 0) {
    return {
      decision: 'Descalificado',
      motivo: `El equipo '${equipo}' posee ${sanciones} sancion(es) disciplinarias.`
    };
  }

  if (typeof victorias !== 'number' || typeof derrotas !== 'number' || victorias < 0 || derrotas < 0) {
    return { decision: 'Rechazado', motivo: 'Las victorias y derrotas deben ser números no negativos.' };
  }

  const totalPartidas = victorias + derrotas;
  if (totalPartidas === 0) {
    return { decision: 'Pendiente', motivo: 'El equipo no ha jugado partidas suficientes.' };
  }

  const porcentajeVictorias = (victorias / totalPartidas) * 100;

  if (porcentajeVictorias >= 60 && kda >= 3.0) {
    return {
      decision: 'Clasificado a Playoffs',
      motivo: `Excelente rendimiento: ${porcentajeVictorias.toFixed(1)}% de victorias y KDA de ${kda}.`
    };
  } else if (porcentajeVictorias >= 50 || kda >= 2.5) {
    return {
      decision: 'Fase de Repechaje',
      motivo: `Rendimiento aceptable (${porcentajeVictorias.toFixed(1)}% de victorias). Accede a repechaje.`
    };
  } else {
    return {
      decision: 'Eliminado',
      motivo: `Rendimiento insuficiente (${porcentajeVictorias.toFixed(1)}% victorias, KDA ${kda}).`
    };
  }
};

// Casos de prueba
console.log('--- Caso Normal ---');
const equipoNormal = {
  equipo: 'CyberDragons',
  victorias: 7,
  derrotas: 3,
  kda: 3.8,
  sanciones: 0
};
console.log(tomarDecisionTorneo(equipoNormal));

console.log('\n--- Caso Borde ---');
const equipoSancionado = {
  equipo: 'ShadowGamers',
  victorias: 9,
  derrotas: 1,
  kda: 5.0,
  sanciones: 1
};
console.log(tomarDecisionTorneo(equipoSancionado));
