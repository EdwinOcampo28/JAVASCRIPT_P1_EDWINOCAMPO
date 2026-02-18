/******************************************************
 * LABORATORIO PRÁCTICO — PROMESAS EN JAVASCRIPT
 * Tema: resolve, reject, then, catch y finally
 ******************************************************/

/*====================================================
=            EJERCICIO 1 — PROMESA CON DELAY        =
====================================================*/

/*
Objetivo:
Crear una función que retorne una Promise que se resuelva
después de un tiempo determinado.
*/

function mensajeAsync(texto, tiempo) {
    // Se retorna una nueva promesa
    return new Promise((resolve) => {

        // Simulamos una operación asíncrona con setTimeout
        setTimeout(() => {

            // La promesa pasa de "pending" a "fulfilled"
            resolve(texto);

        }, tiempo);

    });
}

// Mensaje antes de ejecutar la promesa
console.log("Iniciando...");

// Consumimos la promesa
mensajeAsync("Hola mundo 🌎", 1500)

    // Se ejecuta si la promesa se RESUELVE
    .then((mensaje) => {
        console.log(mensaje);
    })

    // Se ejecuta siempre (éxito o error)
    .finally(() => {
        console.log("Proceso finalizado");
    });



/*====================================================
=         EJERCICIO 2 — RECHAZO CONDICIONAL         =
====================================================*/

/*
Objetivo:
Comprender la diferencia entre resolve y reject.
*/

function verificarNumeroAsync(numero) {

    return new Promise((resolve, reject) => {

        // Validación condicional
        if (numero % 2 === 0) {

            // Si es par → promesa cumplida
            resolve("Número válido");

        } else {

            // Si es impar → promesa rechazada
            reject(new Error("Número inválido"));

        }

    });
}


/*========= PRUEBA 1: Número PAR (debe ir a then) =========*/

verificarNumeroAsync(4)

    .then((mensaje) => {
        console.log("✅ then:", mensaje);
    })

    .catch((error) => {
        console.log("❌ catch:", error.message);
    });



/*========= PRUEBA 2: Número IMPAR (debe ir a catch) =========*/

verificarNumeroAsync(5)

    .then((mensaje) => {
        console.log("✅ then:", mensaje);
    })

    .catch((error) => {
        console.log("❌ catch:", error.message);
    });


/******************************************************
 * FIN DEL LABORATORIO
 ******************************************************/
