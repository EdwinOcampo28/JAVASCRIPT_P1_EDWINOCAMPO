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
