// Ejercicio 047 - Logica general 047 - deteccion de inconsistencias
// Autor: Stefani Sánchez

/**
 * Analiza una playlist musical en busca de inconsistencias o errores de datos.
 * @param {Array<Object>} playlist - Arreglo de canciones.
 * @returns {Object} Reporte de inconsistencias detectadas.
 */
const detectarInconsistenciasPlaylist = (playlist) => {
  if (!Array.isArray(playlist)) {
    return { tieneInconsistencias: true, totalCanciones: 0, totalErrores: 1, errores: ['La playlist proporcionada no es una lista válida.'] };
  }

  const errores = [];
  const idsVistos = new Set();
  const cancionesVistas = new Set();

  playlist.forEach((cancion, indice) => {
    const pos = indice + 1;

    if (!cancion || typeof cancion !== 'object') {
      errores.push(`Elemento #${pos}: Entrada nula o no válida.`);
      return;
    }

    const { id, titulo, artista, duracionSegundos } = cancion;

    // Validar ID único
    if (id !== undefined) {
      if (idsVistos.has(id)) {
        errores.push(`Elemento #${pos}: ID duplicado '${id}'.`);
      } else {
        idsVistos.add(id);
      }
    }

    // Validar campos obligatorios
    if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
      errores.push(`Elemento #${pos}: Título faltante o inválido.`);
    }

    if (!artista || typeof artista !== 'string' || artista.trim() === '') {
      errores.push(`Elemento #${pos}: Artista faltante o inválido.`);
    }

    // Validar duplicados de título y artista
    if (titulo && artista && typeof titulo === 'string' && typeof artista === 'string' && titulo.trim() !== '' && artista.trim() !== '') {
      const claveUnica = `${titulo.trim().toLowerCase()}-${artista.trim().toLowerCase()}`;
      if (cancionesVistas.has(claveUnica)) {
        errores.push(`Elemento #${pos}: Canción duplicada '${titulo}' de '${artista}'.`);
      } else {
        cancionesVistas.add(claveUnica);
      }
    }

    // Validar duración
    if (typeof duracionSegundos !== 'number' || duracionSegundos <= 0 || !Number.isFinite(duracionSegundos)) {
      errores.push(`Elemento #${pos}: Duración inválida (${duracionSegundos}). Debe ser mayor a 0 segundos.`);
    }
  });

  return {
    tieneInconsistencias: errores.length > 0,
    totalCanciones: playlist.length,
    totalErrores: errores.length,
    errores
  };
};

// Casos de prueba
console.log('--- Caso Normal ---');
const playlistSinErrores = [
  { id: 'track_1', titulo: 'Bohemian Rhapsody', artista: 'Queen', duracionSegundos: 354 },
  { id: 'track_2', titulo: 'Hotel California', artista: 'Eagles', duracionSegundos: 391 }
];
console.log(detectarInconsistenciasPlaylist(playlistSinErrores));

console.log('\n--- Caso Borde ---');
const playlistConInconsistencias = [
  { id: 'track_1', titulo: 'Stairway to Heaven', artista: 'Led Zeppelin', duracionSegundos: 482 },
  { id: 'track_1', titulo: 'Stairway to Heaven', artista: 'Led Zeppelin', duracionSegundos: -10 },
  { id: 'track_3', titulo: '', artista: 'Desconocido', duracionSegundos: 0 }
];
console.log(detectarInconsistenciasPlaylist(playlistConInconsistencias));
