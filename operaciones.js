const fs = require("fs");

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Leer las citas existentes
    let citas = [];
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        citas = JSON.parse(data);
    } catch (error) {
        console.log("Error al leer el archivo, creando uno nuevo.");
    }

    // Agregar la nueva cita y guardar en el archivo
    citas.push(nuevaCita);
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
    console.log("Cita registrada exitosamente.");
};

// Función para leer todas las citas
const leer = () => {
    try {
        const data = fs.readFileSync("citas.json", "utf8");
        const citas = JSON.parse(data);
        console.log("Citas registradas:", citas);
    } catch (error) {
        console.log("No hay citas registradas o no se pudo leer el archivo.");
    }
};

module.exports = { registrar, leer };