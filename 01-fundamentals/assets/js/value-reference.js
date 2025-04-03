// Value vs Reference Types
// En JavaScript, los tipos de datos se dividen en dos categorías: tipos de valor y tipos de referencia.
// Los tipos de valor son aquellos que se almacenan directamente en la variable, mientras que los tipos de referencia son aquellos que almacenan una referencia a un objeto en memoria.

// Tipos de valor: number, string, boolean, null, undefined, symbol
// Los tipos de valor son aquellos que se almacenan directamente en la variable.

let a = 10;
let b = a;
a = 30; // Cambiamos el valor de a

console.log({a, b});

// Tipos de referencia: object, array, function, date, regex
// Los tipos de referencia son aquellos que almacenan una referencia a un objeto en memoria.

let juan = { nombre: 'Juan' };
let ana = juan; // Asignamos la referencia de juan a ana
ana.nombre = 'Ana'; // Cambiamos el nombre de ana

console.log({juan, ana});



const cambiarNombre = (persona) => {
    persona.nombre = 'Tony Stark'; // Cambiamos el nombre de la persona
    return persona; // Retornamos la referencia de la persona
}

let peter = { nombre: 'Peter Parker' };
let tony = cambiarNombre(peter); // Asignamos la referencia de la persona a tony

console.log({peter, tony}); // Ambos objetos apuntan a la misma referencia en memoria



// Solución: Crear una copia del objeto con el operador spread
// En lugar de modificar el objeto original, creamos una copia y modificamos la copia
const cambiarNombre2 = ({...persona}) => {
    persona.nombre = 'Tony Stark'; // Cambiamos el nombre de la persona
    return persona; // Retornamos la referencia de la persona
}

let peter2 = { nombre: 'Peter Parker' };
let tony2 = cambiarNombre2(peter2); // Asignamos la referencia de la persona a tony

console.log({peter2, tony2}); // Ambos objetos apuntan a la misma referencia en memoria


// Arreglos
let frutas = ['Manzana', 'Pera', 'Piña'];

// const otrasFrutas = [...frutas]; // Creamos una copia del arreglo frutas
// const otrasFrutas2 = frutas.slice(); // Creamos una copia del arreglo frutas haciendolo con slice

console.time('spread');
const otrasFrutas = [...frutas];
console.timeEnd('spread'); // Medimos el tiempo que tarda en crear la copia del arreglo frutas con el operador spread

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice'); // Medimos el tiempo que tarda en crear la copia del arreglo frutas con slice


otrasFrutas.push('Mango'); // Agregamos una fruta al arreglo de otrasFrutas

console.table({frutas, otrasFrutas});

