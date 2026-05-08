//Nuestro primer comentario
console.log("Hola mundo!");

//Datos Primitivos
numero1 = 1; //Tipo number --> "La mayoría de números"
numero2 = 2;
console.log(typeof numero1);

texto1 = "Texto1";
texto2 = "Mas texto"; //Tipo String
console.log(typeof texto1);

operacionesBasicas = (((5+8)+5)-2); //PEMDAS
console.log(operacionesBasicas);

unionTextos = texto1 + texto2; //Concatenación
console.log(unionTextos);

//Funciones con parametros y con retorno

function sumar(a, b) {
    return a + b;
}

resultado = sumar(5, 3);
console.log("El resultado es:", resultado);

//Funciones con parametros y sin retorno

function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar("Pedro");

//Funciones sin parametros y sin retorno

function mostrarMensaje() {
    console.log("Esta es una función sin parámetros y sin retorno.");
}

mostrarMensaje();

//Funciones sin parametros y sin retorno

function mensajeSimple() {
    console.log("Función ejecutada correctamente.");
}

mensajeSimple();