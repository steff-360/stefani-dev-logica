// Ejercicio 046 - Logica general 046 - busqueda de elementos
// Autor: Stefani Sánchez

/**
 * Busca un auto hiperdeportivo específico o filtra según métricas de alto rendimiento.
 * @param {Array<Object>} catalogo - Lista de autos hiperdeportivos.
 * @param {Object} parametroBusqueda - Criterios de búsqueda (modelo, velocidadMinima, cvMinimos).
 * @returns {Object} Resultado de la búsqueda o hiperauto encontrado.
 */
const buscarHiperdeportivo = (catalogo, parametroBusqueda) => {
  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    return { encontrado: false, resultados: [], mensaje: 'Catálogo vacío o no válido.' };
  }

  if (!parametroBusqueda || typeof parametroBusqueda !== 'object') {
    return { encontrado: false, resultados: [], mensaje: 'Parámetros de búsqueda no especificados.' };
  }

  const { modelo, velocidadMinima, cvMinimos } = parametroBusqueda;

  // Búsqueda exacta por modelo
  if (typeof modelo === 'string' && modelo.trim() !== '') {
    const autoEncontrado = catalogo.find(
      (auto) => auto && typeof auto === 'object' && auto.modelo && auto.modelo.toLowerCase() === modelo.trim().toLowerCase()
    );
    if (autoEncontrado) {
      return { encontrado: true, resultados: [autoEncontrado], mensaje: `Auto '${autoEncontrado.modelo}' encontrado.` };
    }
    return { encontrado: false, resultados: [], mensaje: `No se encontró el modelo '${modelo}'.` };
  }

  // Búsqueda por rango de rendimiento
  const resultados = catalogo.filter((auto) => {
    if (!auto || typeof auto !== 'object') return false;
    let cumple = true;
    if (typeof velocidadMinima === 'number' && auto.velocidadMaxima < velocidadMinima) {
      cumple = false;
    }
    if (typeof cvMinimos === 'number' && auto.caballosFuerza < cvMinimos) {
      cumple = false;
    }
    return cumple;
  });

  return {
    encontrado: resultados.length > 0,
    resultados,
    mensaje: `Se encontraron ${resultados.length} autos que coinciden con el criterio.`
  };
};

// Casos de prueba
console.log('--- Caso Normal ---');
const catalogoHiperautos = [
  { marca: 'Bugatti', modelo: 'Chiron Super Sport', velocidadMaxima: 440, caballosFuerza: 1600 },
  { marca: 'Koenigsegg', modelo: 'Jesko Absolut', velocidadMaxima: 530, caballosFuerza: 1600 },
  { marca: 'Hennessey', modelo: 'Venom F5', velocidadMaxima: 500, caballosFuerza: 1817 },
  { marca: 'Rimac', modelo: 'Nevera', velocidadMaxima: 412, caballosFuerza: 1914 }
];
console.log(buscarHiperdeportivo(catalogoHiperautos, { modelo: 'Jesko Absolut' }));

console.log('\n--- Caso Borde ---');
console.log(buscarHiperdeportivo(catalogoHiperautos, { modelo: 'Ferrari F40' }));
