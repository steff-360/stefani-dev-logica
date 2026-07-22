// Ejercicio 040 - Logica general 040 - estrategias de seleccion
// Autor: Stefani Sánchez

/**
 * Selecciona la mejor opción de comida urbana según filtros y estrategia definida.
 * @param {Array<Object>} opciones - Arreglo de opciones gastronómicas.
 * @param {Object} criterio - Filtros de presupuesto, tiempo, dieta y estrategia de ordenamiento.
 * @returns {Object} La opción seleccionada y el motivo de la elección.
 */
const seleccionarComidaUrbana = (opciones, criterio = {}) => {
  if (!Array.isArray(opciones) || opciones.length === 0) {
    return {
      error: "Entrada inválida: Debe proporcionar una lista de opciones de comida no vacía.",
    };
  }

  const {
    presupuestoMax = Infinity,
    tiempoMax = Infinity,
    soloVegetariano = false,
    estrategia = "precio",
  } = criterio;

  const filtradas = opciones.filter((item) => {
    const cumplePrecio = typeof item.precio === "number" && item.precio <= presupuestoMax;
    const cumpleTiempo = typeof item.tiempoMin === "number" && item.tiempoMin <= tiempoMax;
    const cumpleDieta = soloVegetariano ? Boolean(item.vegetariano) : true;
    return cumplePrecio && cumpleTiempo && cumpleDieta;
  });

  if (filtradas.length === 0) {
    return {
      seleccion: null,
      opcionesFiltradasCount: 0,
      mensaje: "Ninguna opción de comida cumple con los criterios y presupuesto establecidos.",
    };
  }

  const ordenadas = [...filtradas].sort((a, b) => {
    if (estrategia === "rapido") {
      return a.tiempoMin - b.tiempoMin;
    } else if (estrategia === "balanceado") {
      return a.precio + a.tiempoMin - (b.precio + b.tiempoMin);
    } else {
      // "precio" por defecto
      return a.precio - b.precio;
    }
  });

  const seleccion = ordenadas[0];

  return {
    seleccion,
    opcionesFiltradasCount: filtradas.length,
    motivo: `Opción seleccionada con éxito aplicando la estrategia de '${estrategia}'.`,
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const opcionesComida = [
  { nombre: "Tacos de Canasta", precio: 12, tiempoMin: 5, vegetariano: true },
  { nombre: "Hamburguesa Gourmet", precio: 30, tiempoMin: 25, vegetariano: false },
  { nombre: "Arepa de Queso", precio: 15, tiempoMin: 10, vegetariano: true },
];
const criterioSeleccion = {
  presupuestoMax: 20,
  tiempoMax: 15,
  soloVegetariano: true,
  estrategia: "precio",
};
console.log(seleccionarComidaUrbana(opcionesComida, criterioSeleccion));

console.log("\n=== Caso Borde ===");
console.log(seleccionarComidaUrbana([], {}));
