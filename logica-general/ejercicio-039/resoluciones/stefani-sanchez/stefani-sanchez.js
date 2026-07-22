// Ejercicio 039 - Logica general 039 - inventarios logicos
// Autor: Stefani Sánchez

/**
 * Controla el inventario de reactivos de laboratorio para verificar la factibilidad de fórmulas químicas.
 * @param {Array<Object>} reactivosExistentes - Lista de insumos en stock con cantidad y mínimo seguro.
 * @param {Array<Object>} formulaRequerida - Lista de reactivos y cantidades necesarias.
 * @returns {Object} Reporte de factibilidad, reactivos faltantes y alertas de reabastecimiento.
 */
const gestionarInventarioQuimico = (reactivosExistentes, formulaRequerida) => {
  if (
    !Array.isArray(reactivosExistentes) ||
    !Array.isArray(formulaRequerida) ||
    reactivosExistentes.length === 0 ||
    formulaRequerida.length === 0
  ) {
    return {
      error: "Entrada inválida: Se requieren arreglos no vacíos para inventario y fórmula.",
    };
  }

  const faltantes = [];
  const reactivosActualizados = [];
  const alertasStock = [];
  let ejecutable = true;

  for (const ingrediente of formulaRequerida) {
    const reactivoStock = reactivosExistentes.find(
      (r) => r.nombre?.toLowerCase() === ingrediente.nombre?.toLowerCase()
    );

    if (!reactivoStock) {
      ejecutable = false;
      faltantes.push({
        nombre: ingrediente.nombre,
        faltante: ingrediente.cantidadRequerida,
        motivo: "Reactivo no disponible en laboratorio",
      });
      continue;
    }

    if (reactivoStock.cantidad < ingrediente.cantidadRequerida) {
      ejecutable = false;
      faltantes.push({
        nombre: ingrediente.nombre,
        faltante: ingrediente.cantidadRequerida - reactivoStock.cantidad,
        motivo: "Stock insuficiente",
      });
    } else {
      const nuevaCantidad = reactivoStock.cantidad - ingrediente.cantidadRequerida;
      reactivosActualizados.push({
        nombre: reactivoStock.nombre,
        cantidad: nuevaCantidad,
      });

      if (nuevaCantidad <= (reactivoStock.minStock || 0)) {
        alertasStock.push({
          nombre: reactivoStock.nombre,
          stockRestante: nuevaCantidad,
          minStock: reactivoStock.minStock,
        });
      }
    }
  }

  return {
    ejecutable,
    reactivosActualizados: ejecutable ? reactivosActualizados : [],
    faltantes,
    alertasStock,
    mensaje: ejecutable
      ? "Fórmula química lista para su preparación."
      : "No es posible preparar la fórmula por falta de insumos.",
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const stockLab = [
  { nombre: "Ácido Clorhídrico", cantidad: 500, minStock: 100 },
  { nombre: "Hidróxido de Sodio", cantidad: 300, minStock: 50 },
];
const formulaLab = [
  { nombre: "Ácido Clorhídrico", cantidadRequerida: 200 },
  { nombre: "Hidróxido de Sodio", cantidadRequerida: 100 },
];
console.log(gestionarInventarioQuimico(stockLab, formulaLab));

console.log("\n=== Caso Borde ===");
console.log(gestionarInventarioQuimico([], []));
