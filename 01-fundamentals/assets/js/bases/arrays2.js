let juegos = ['FIFA', 'Call of Duty', 'GTA V', 'Minecraft', 'Fortnite'];

console.log('Largo: ', juegos.length); // 5

let primero = juegos[0]; // FIFA
console.log('Primer elemento: ', primero); // FIFA

let ultimo = juegos[juegos.length - 1]; // Fortnite
console.log('Ultimo elemento: ', ultimo); // Fortnite
console.log('Ultimo elemento: ', juegos.at(-1)); // Fortnite

juegos.forEach((juego, index, arr) => {
    // console.log(`Juego ${index}: ${juego}`);
    console.log({juego, index, arr});
});

let nuevaLongitud = juegos.push('League of Legends'); // Agrega al final
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Counter Strike'); // Agrega al inicio
console.log({nuevaLongitud, juegos});

let juegoBorrado = nuevaLongitud = juegos.pop(); // Elimina el último
console.log({juegoBorrado, juegos});

let posicion = 1; // Segunda posición
console.log(juegos);
let juegosBorrados = juegos.splice(posicion, 2); // Elimina el segundo elemento
console.log({juegosBorrados, juegos}); // ['Counter Strike', 'GTA V', 'Minecraft', 'Fortnite']

let index = juegos.indexOf('Minecraft'); // Busca el índice de 'Minecraft'
console.log({index, juegos});