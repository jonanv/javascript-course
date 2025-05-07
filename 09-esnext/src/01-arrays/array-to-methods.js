const heroes = [ 'Batman', 'Superman', 'Flash', 'Aquaman' ];
const heroesCopy = heroes;

// heroes.sort(); // Ordena el array original y lo devuelve, mutando el array original
// const sortedHeroes = heroes.toSorted(); // Devuelve un nuevo array ordenado, sin mutar el original

// heroes.reverse(); // Reversa el array original y lo devuelve, mutando el array original
// const sortedHeroes = heroes.toReversed(); // Devuelve un nuevo array reversado, sin mutar el original

// heroes.splice(1, 2); // Elimina 2 elementos a partir del índice 1 y lo devuelve, mutando el array original
const sortedHeroes = heroes.toSpliced(1, 2); // Devuelve un nuevo array con los elementos eliminados, sin mutar el original

console.table(heroes);
// console.table(heroesCopy);
console.table(sortedHeroes);