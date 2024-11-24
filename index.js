const { registrar, leer } = require("./operaciones");

// Obtener argumentos de la línea de comando
const [, , operacion, ...argumentos] = process.argv;

if (operacion === "registrar") {
    const [nombre, edad, animal, color, enfermedad] = argumentos;
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "leer") {
    leer();
} else {
    console.log("Operación no reconocida. Usa 'registrar' o 'leer'.");
}