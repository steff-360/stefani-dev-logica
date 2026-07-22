// Ejercicio 036 - Logica general 036 - matrices simples
// Autor: Stefani Sánchez

/**
 * Analiza una matriz bidimensional de fotogramas en una granja de renderizado 3D.
 * @param {Array<Array<string>>} matrizFrames - Matriz de estados ("completado", "en_proceso", "fallido").
 * @returns {Object} Resumen detallado con estadísticas y posiciones de fotogramas fallidos.
 */
const procesarMatrizRender3D = (matrizFrames) => {
  if (
    !Array.isArray(matrizFrames) ||
    matrizFrames.length === 0 ||
    !Array.isArray(matrizFrames[0]) ||
    matrizFrames[0].length === 0
  ) {
    return {
      error: "Entrada inválida: Debe proporcionar una matriz de fotogramas bidimensional no vacía.",
    };
  }

  let totalFrames = 0;
  let completados = 0;
  let enProceso = 0;
  let fallidos = 0;
  const posicionesFallidas = [];

  for (let r = 0; r < matrizFrames.length; r++) {
    for (let c = 0; c < matrizFrames[r].length; c++) {
      totalFrames++;
      const estado = matrizFrames[r][c]?.toLowerCase();

      if (estado === "completado") {
        completados++;
      } else if (estado === "en_proceso") {
        enProceso++;
      } else if (estado === "fallido") {
        fallidos++;
        posicionesFallidas.push([r, c]);
      }
    }
  }

  const porcentajeExito = ((completados / totalFrames) * 100).toFixed(2) + "%";
  let estadoGeneral = "Renderizado completo";

  if (fallidos > 0) {
    estadoGeneral = "Requiere re-renderizado de fotogramas fallidos";
  } else if (enProceso > 0) {
    estadoGeneral = "En progreso en la granja de render";
  }

  return {
    totalFrames,
    completados,
    enProceso,
    fallidos,
    posicionesFallidas,
    porcentajeExito,
    estadoGeneral,
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const matrizNormal = [
  ["completado", "completado", "completado"],
  ["completado", "fallido", "completado"],
  ["completado", "completado", "en_proceso"],
];
console.log(procesarMatrizRender3D(matrizNormal));

console.log("\n=== Caso Borde ===");
console.log(procesarMatrizRender3D([]));
