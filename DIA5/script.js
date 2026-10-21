// Introducción a las promesas de JavaScript

const log = (...args) => console.log(...args);

const titulo = (numero, nombre) => {
  log("\n" + "=".repeat(48));
  log(`EJERCICIO ${numero}: ${nombre}`);
  log("=".repeat(48));
};

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const resolverEn = (ms, valor) => new Promise((resolve) => setTimeout(() => resolve(valor), ms));
const rechazarEn = (ms, error) => new Promise((_, reject) => setTimeout(() => reject(error), ms));

// La función queda en el ámbito principal para poder usarla desde runEjercicio1.
function saludarAsync(nombre) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Hola, ${nombre}`), 800);
  });
}

async function runEjercicio1() {
  titulo(1, "Mi primera promesa (resolve)");
  log("Antes de llamar saludarAsync...");
  await saludarAsync("Pedro")
    .then((mensaje) => log("✅ then:", mensaje))
    .catch((error) => log("❌ catch:", error.message))
    .finally(() => log("🏁 finally: terminó el Ejercicio 1"));
}

runEjercicio1();
