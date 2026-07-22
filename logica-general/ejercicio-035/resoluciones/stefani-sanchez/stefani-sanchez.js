// Ejercicio 035 - Logica general 035 - reglas de negocio
// Autor: Stefani Sánchez

/**
 * Evalúa las reglas de negocio para la entrega de un proyecto de dibujo digital.
 * @param {Object} proyecto - Objeto con los detalles del proyecto digital.
 * @returns {Object} Dictamen de aprobación con observaciones si existen fallas.
 */
const evaluarReglasDibujoDigital = (proyecto) => {
  if (!proyecto || typeof proyecto !== "object" || Object.keys(proyecto).length === 0) {
    return {
      error: "Entrada inválida: Debe proporcionar un objeto de proyecto válido.",
    };
  }

  const { nombre, resolucionDpi, formato, modoColor, destino, capasOrganizadas } = proyecto;
  const observaciones = [];
  const formatosPermitidos = ["PSD", "PNG", "TIFF", "SVG"];

  if (typeof resolucionDpi !== "number" || resolucionDpi <= 0) {
    observaciones.push("La resolución DPI debe ser un número mayor a cero.");
  } else {
    if (destino === "impresion" && resolucionDpi < 300) {
      observaciones.push("Resolución insuficiente para impresión (mínimo 300 DPI).");
    }
    if (destino === "web" && resolucionDpi < 72) {
      observaciones.push("Resolución insuficiente para web (mínimo 72 DPI).");
    }
  }

  if (!formatosPermitidos.includes(formato?.toUpperCase())) {
    observaciones.push(`Formato ${formato} no permitido. Usar: ${formatosPermitidos.join(", ")}.`);
  }

  if (destino === "impresion" && modoColor?.toUpperCase() !== "CMYK") {
    observaciones.push("Modo de color incorrecto para impresión (requiere CMYK).");
  }

  if (destino === "web" && modoColor?.toUpperCase() !== "RGB") {
    observaciones.push("Modo de color incorrecto para web (requiere RGB).");
  }

  if (!capasOrganizadas) {
    observaciones.push("Las capas deben estar nombradas y organizadas.");
  }

  const aprobado = observaciones.length === 0;

  return {
    proyecto: nombre || "Sin Nombre",
    aprobado,
    observaciones,
    mensaje: aprobado
      ? "El proyecto de dibujo digital cumple con todas las reglas de negocio."
      : "El proyecto no cumple las reglas de negocio.",
  };
};

// Casos de prueba

console.log("=== Caso Normal ===");
const casoNormal = evaluarReglasDibujoDigital({
  nombre: "Ilustración Comic",
  resolucionDpi: 300,
  formato: "PSD",
  modoColor: "CMYK",
  destino: "impresion",
  capasOrganizadas: true,
});
console.log(casoNormal);

console.log("\n=== Caso Borde ===");
const casoBorde = evaluarReglasDibujoDigital({});
console.log(casoBorde);
