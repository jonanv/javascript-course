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

saludar();
saludar2();
saludar3("Juan");
saludar4("Juan", 40, true, 'Colombia');
saludarFlecha("Juan");
