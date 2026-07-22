// Ejercicio 044 - Logica general 044 - filtros por condiciones
// Autor: Stefani Sánchez

/**
 * Filtra el inventario de motos según criterios específicos del comprador.
 * @param {Array<Object>} inventario - Lista de motos en inventario.
 * @param {Object} criterios - Filtros como precioMax, marca, cilindradaMin, soloDisponibles.
 * @returns {Array<Object>} Lista de motos que cumplen con todas las condiciones.
 */
const filtrarMotos = (inventario, criterios = {}) => {
  if (!Array.isArray(inventario)) {
    return [];
  }

  const { precioMax, marca, cilindradaMin, soloDisponibles } = criterios;

  return inventario.filter((moto) => {
    if (!moto || typeof moto !== 'object') return false;

    if (typeof precioMax === 'number' && moto.precio > precioMax) {
      return false;
    }

    if (typeof marca === 'string' && marca.trim() !== '') {
      if (!moto.marca || moto.marca.toLowerCase() !== marca.trim().toLowerCase()) {
        return false;
      }
    }

    if (typeof cilindradaMin === 'number' && moto.cilindrada < cilindradaMin) {
      return false;
    }

    if (soloDisponibles === true && !moto.disponible) {
      return false;
    }

    return true;
  });
};

// Casos de prueba
console.log('--- Caso Normal ---');
const inventarioMotos = [
  { id: 1, modelo: 'Ninja 400', marca: 'Kawasaki', cilindrada: 399, precio: 6500, disponible: true },
  { id: 2, modelo: 'CB500F', marca: 'Honda', cilindrada: 471, precio: 6200, disponible: true },
  { id: 3, modelo: 'Duke 390', marca: 'KTM', cilindrada: 373, precio: 5800, disponible: false },
  { id: 4, modelo: 'MT-03', marca: 'Yamaha', cilindrada: 321, precio: 5200, disponible: true }
];
const criteriosBusqueda = { precioMax: 6300, cilindradaMin: 350, soloDisponibles: true };
console.log(filtrarMotos(inventarioMotos, criteriosBusqueda));

console.log('\n--- Caso Borde ---');
const inventarioVacio = [];
console.log(filtrarMotos(inventarioVacio, { precioMax: 5000 }));
