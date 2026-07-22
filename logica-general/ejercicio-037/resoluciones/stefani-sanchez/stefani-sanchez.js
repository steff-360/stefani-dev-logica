// Ejercicio 037 - Logica general 037 - tablas de decision
// Autor: Stefani Sánchez

/**
 * Evalúa una tabla de decisión para determinar el motor y flujo de optimización en arquitectura 3D.
 * @param {Object} modelo - Objeto con la información del modelo 3D.
 * @returns {Object} Decisión recomendada según la combinación de requerimientos.
 */
const evaluarTablaDecisionArquitectura3D = (modelo) => {
  if (!modelo || typeof modelo !== "object" || typeof modelo.poligonos !== "number" || modelo.poligonos <= 0) {
    return {
      error: "Entrada inválida: El número de polígonos debe ser una cifra mayor a cero.",
    };
  }

  const { nombre = "Modelo Sin Nombre", poligonos, usoDestino, texturas4k = false } = modelo;

  let decision = "";
  let motor = "";
  let nivelOptimizacion = "";

  if (poligonos > 1000000 && usoDestino === "recorrido_virtual") {
    decision = "Bakeado de iluminación y retopología obligatoria";
    motor = "Unreal Engine 5";
    nivelOptimizacion = "Crítico";
  } else if (poligonos > 1000000 && usoDestino === "render_estatico") {
    decision = "Renderizado Ray-Tracing por capas con pases de denoiser";
    motor = "V-Ray / Corona Render";
    nivelOptimizacion = "Medio";
  } else if (poligonos <= 1000000 && usoDestino === "vr_interactivo") {
    decision = "Compilar shaders optimizados para visualización en tiempo real";
    motor = "Unity / Unreal Engine";
    nivelOptimizacion = "Alto";
  } else {
    decision = "Flujo de trabajo estándar de visualización arquitectónica";
    motor = "Blender / 3ds Max";
    nivelOptimizacion = "Estándar";
  }

  return {
    modelo: nombre,
    poligonos,
    usoDestino: usoDestino || "no especificado",
    texturas4k,
    decision,
    motor,
    nivelOptimizacion,
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const casoNormal = evaluarTablaDecisionArquitectura3D({
  nombre: "Edificio Corporativo",
  poligonos: 1500000,
  usoDestino: "recorrido_virtual",
  texturas4k: true,
});
console.log(casoNormal);

console.log("\n=== Caso Borde ===");
const casoBorde = evaluarTablaDecisionArquitectura3D({
  nombre: "Maqueta Inválida",
  poligonos: -500,
  usoDestino: "recorrido_virtual",
});
console.log(casoBorde);
