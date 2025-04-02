// Definición de una función con nombre
// Esta función se puede invocar por su nombre
function saludar() {
    console.log("Hola, bienvenido a la página");
}

// Definición de una función anónima asignada a una variable
// Esta función no tiene nombre, pero se puede invocar a través de la variable
let saludar2 = function () {
    console.log("Hola, bienvenido a la página 2");
};

// Definición de una función con parámetros
// Esta función recibe un parámetro (nombre) y lo utiliza en el mensaje
function saludar3(nombre) {
    console.log(`Hola, ${nombre}`);
}

// Definición de una función con parámetros y el objeto arguments
// Esta función recibe un parámetro (nombre) y muestra todos los argumentos pasados
function saludar4(nombre) {
    console.log(arguments);
    console.log(`Hola, ${nombre}`);
}

// Definición de una función flecha (arrow function) o (lambda function)
// Esta función es una versión más concisa de las funciones tradicionales
const saludarFlecha = (nombre) => {
    console.log(`Hola, ${nombre}`);
}

function saludar5(nombre) {
    console.log(arguments);
    console.log(`Hola, ${nombre}`);
    return 10;

    console.log('Esto no se ejecuta nunca porque está después de un return');
}

function sumar(a, b) {
    return a + b;
}

// Definición de una función flecha (arrow function) para sumar
// Esta función es una versión más concisa de las funciones tradicionales
// const sumar2 = (a, b) => {
//     return a + b;
// }
const sumar2 = (a, b) => a + b; // Versión más corta de la función anterior

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random(); // Versión más corta de la función anterior

saludar();
saludar2();
saludar3("Juan");
saludar4("Juan", 40, true, 'Colombia');
saludarFlecha("Juan");
let retornoDeSaludar = saludar5("Juan", 40, true, 'Colombia');
console.log({retornoDeSaludar}); // 10


console.log(sumar(5, 10)); // 15
console.log(sumar2(5, 10)); // 15
console.log(getAleatorio()); // Número aleatorio entre 0 y 1
console.log(getAleatorio2()); // Número aleatorio entre 0 y 1