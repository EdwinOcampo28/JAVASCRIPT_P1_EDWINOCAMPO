// Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona

// "Te prometo entregar algo"
// Si cumplo hago algo --> Resultado
// Si no cumplo --> Error

// Estados de una promesa:
// 1. Pediente : Aun no se resolvió ni falló.
// 2. Fulfilled (cumplida): Ya tenemos un valor para usar.
// 3. Rejected (rechazada): Ya tiene un motivo de error.

/* Ciclo de vida de una promesa
1. Nace en pediente --> Pasará una sola vez a fulfilled o rejected --> quedará en "asentada" (settled), donde no cambiará jamás
--> Evitar doble entrega.
*/


// Plantillas generales

//utilidades
const log = (...args) => console.log(...args);

const titulo = (n, nombre) => {
  log("\n" + "=".repeat(50));
  log(`EJERCICIO ${n}: ${nombre}`);
  log("=".repeat(50));
};

const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Plantilla para promesa con delay que RESUELVE
 */
const resolverEn = (ms, valor) =>
  new Promise((resolve) => setTimeout(() => resolve(valor), ms));

/**
 * Plantilla para promesa con delay que RECHAZA
 */
const rechazarEn = (ms, error) =>
  new Promise((_, reject) => setTimeout(() => reject(error), ms));

// EJ: Promesa que resuelve
function runEjercicio1(){
    titulo(1,"Mi primera promesa (resolve)");

    function saludarAsync(nombre){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(`Hola, ${nombre}`)
            },800);
        })
    }
}

log("Antes de llamar saludarAsync...");
saludarAsync("Pedro")
    .then((msg)=>log("✅ then:", msg))
    .catch((err)=>log("❌ catch:", err.message))
    .finally(()=> log("🏁 finally: terminó Ejercicio 1"));

runEjercicio1();

