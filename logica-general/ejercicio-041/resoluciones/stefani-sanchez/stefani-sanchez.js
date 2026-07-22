// Ejercicio 041 - Logica general 041 - clasificacion por reglas
// Autor: Stefani Sánchez

/**
 * Clasifica elementos/reportes de videojuegos competitivos según reglas de prioridad.
 * @param {Array<Object>} items - Lista de reporte de jugadores/ítems.
 * @param {string} prioridadGlobal - Nivel de prioridad global ('alta', 'media', 'baja').
 * @returns {Object} Resultado de la acción a tomar y el motivo.
 */
const clasificarPorReglas = (items, prioridadGlobal = 'media') => {
  if (!Array.isArray(items) || items.length === 0) {
    return {
      accion: 'ninguna',
      motivo: 'La lista de items no es válida o está vacía.'
    };
  }

  // Regla 1: Si hay items 'bloqueado', priorizar el primero bloqueado
  const itemBloqueado = items.find((item) => typeof item === 'object' && item && item.estado === 'bloqueado');
  if (itemBloqueado) {
    return {
      accion: `revisar bloqueado (${itemBloqueado.nombre || 'desconocido'})`,
      motivo: 'La regla prioriza riesgos y cuentas bloqueadas antes de tareas normales.'
    };
  }

  // Regla 2: Si prioridad global es alta, tomar el primer 'pendiente'
  if (prioridadGlobal === 'alta') {
    const itemPendiente = items.find((item) => typeof item === 'object' && item && item.estado === 'pendiente');
    if (itemPendiente) {
      return {
        accion: `atender pendiente (${itemPendiente.nombre || 'desconocido'})`,
        motivo: 'Prioridad alta global exige atender inmediatamente elementos pendientes.'
      };
    }
  }

  // Regla 3: Si todo es 'aprobado' o no hay urgencias
  return {
    accion: 'procesar aprobados',
    motivo: 'No se encontraron bloqueos ni pendientes urgentes.'
  };
};

// Casos de prueba
console.log('--- Caso Normal ---');
const casoNormal = [
  { nombre: 'Jugador_Alpha', estado: 'aprobado' },
  { nombre: 'Jugador_Beta', estado: 'bloqueado' },
  { nombre: 'Jugador_Gamma', estado: 'pendiente' }
];
console.log(clasificarPorReglas(casoNormal, 'alta'));

console.log('\n--- Caso Borde ---');
const casoBorde = [];
console.log(clasificarPorReglas(casoBorde, 'baja'));
