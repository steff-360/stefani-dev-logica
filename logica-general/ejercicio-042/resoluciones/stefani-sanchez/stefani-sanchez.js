// Ejercicio 042 - Logica general 042 - validacion de datos
// Autor: Stefani Sánchez

/**
 * Valida los datos estadísticos de un equipo en el ranking de fútbol sala.
 * @param {Object} equipo - Objeto con datos del equipo.
 * @returns {Object} Resultado de la validación.
 */
const validarDatosRanking = (equipo) => {
  if (!equipo || typeof equipo !== 'object') {
    return { esValido: false, mensaje: 'Entrada inválida: se requiere un objeto con datos del equipo.' };
  }

  const { nombre, pj, pg, pe, pp, gf, gc, puntos } = equipo;

  if (typeof nombre !== 'string' || nombre.trim() === '') {
    return { esValido: false, mensaje: 'El nombre del equipo debe ser una cadena no vacía.' };
  }

  const camposNumericos = { pj, pg, pe, pp, gf, gc, puntos };
  for (const [clave, valor] of Object.entries(camposNumericos)) {
    if (typeof valor !== 'number' || valor < 0 || !Number.isInteger(valor)) {
      return { esValido: false, mensaje: `El campo '${clave}' debe ser un número entero mayor o igual a 0.` };
    }
  }

  if (pj !== pg + pe + pp) {
    return { esValido: false, mensaje: `Inconsistencia: Partidos jugados (${pj}) no coincide con la suma de PG, PE y PP (${pg + pe + pp}).` };
  }

  const puntosCalculados = pg * 3 + pe;
  if (puntos !== puntosCalculados) {
    return { esValido: false, mensaje: `Inconsistencia: Los puntos registrados (${puntos}) no coinciden con los puntos calculados (${puntosCalculados}).` };
  }

  return {
    esValido: true,
    mensaje: `Datos del equipo '${nombre}' validados correctamente.`
  };
};

// Casos de prueba
console.log('--- Caso Normal ---');
const equipoNormal = {
  nombre: 'Futsal Stars',
  pj: 10,
  pg: 6,
  pe: 2,
  pp: 2,
  gf: 25,
  gc: 14,
  puntos: 20
};
console.log(validarDatosRanking(equipoNormal));

console.log('\n--- Caso Borde ---');
const equipoInconsistente = {
  nombre: 'Rival FC',
  pj: 5,
  pg: 3,
  pe: 1,
  pp: 1,
  gf: 10,
  gc: 8,
  puntos: 15
};
console.log(validarDatosRanking(equipoInconsistente));
