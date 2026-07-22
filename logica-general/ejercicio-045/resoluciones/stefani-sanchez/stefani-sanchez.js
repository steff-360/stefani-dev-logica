// Ejercicio 045 - Logica general 045 - ordenamiento de prioridades
// Autor: Stefani Sánchez

/**
 * Ordena las solicitudes de reparación de un taller mecánico según prioridad de atención.
 * @param {Array<Object>} solicitudes - Lista de vehículos y reparaciones pendientes.
 * @returns {Array<Object>} Lista ordenada de mayor a menor prioridad de atención.
 */
const ordenarPrioridadTaller = (solicitudes) => {
  if (!Array.isArray(solicitudes)) {
    return [];
  }

  const pesoGravedad = { alta: 3, media: 2, baja: 1 };

  return [...solicitudes].sort((a, b) => {
    if (!a || typeof a !== 'object') return 1;
    if (!b || typeof b !== 'object') return -1;

    // 1. Vehículos de emergencia primero
    const esEmergenciaA = a.esEmergencia ? 1 : 0;
    const esEmergenciaB = b.esEmergencia ? 1 : 0;
    if (esEmergenciaA !== esEmergenciaB) {
      return esEmergenciaB - esEmergenciaA;
    }

    // 2. Mayor gravedad de falla
    const gA = pesoGravedad[a.gravedad] || 0;
    const gB = pesoGravedad[b.gravedad] || 0;
    if (gA !== gB) {
      return gB - gA;
    }

    // 3. Menor tiempo de espera (orden de llegada)
    const ordenLlegadaA = typeof a.ordenLlegada === 'number' ? a.ordenLlegada : 999;
    const ordenLlegadaB = typeof b.ordenLlegada === 'number' ? b.ordenLlegada : 999;
    return ordenLlegadaA - ordenLlegadaB;
  });
};

// Casos de prueba
console.log('--- Caso Normal ---');
const solicitudesTaller = [
  { placa: 'ABC-123', esEmergencia: false, gravedad: 'media', ordenLlegada: 1 },
  { placa: 'AMB-911', esEmergencia: true, gravedad: 'alta', ordenLlegada: 3 },
  { placa: 'XYZ-789', esEmergencia: false, gravedad: 'alta', ordenLlegada: 2 },
  { placa: 'DEF-456', esEmergencia: false, gravedad: 'baja', ordenLlegada: 4 }
];
console.log(ordenarPrioridadTaller(solicitudesTaller));

console.log('\n--- Caso Borde ---');
const solicitudesInvalidas = null;
console.log(ordenarPrioridadTaller(solicitudesInvalidas));
