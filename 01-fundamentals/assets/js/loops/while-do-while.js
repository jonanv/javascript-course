const carros = ['Mazda', 'Toyota', 'Honda', 'Chevrolet', 'Ford'];
let i = 0;

console.warn('While loop');
// While loop
// while (i < carros.length) {
//     console.log(carros[i]);
//     i++;
// }

while (carros[i]) {
    if (i === 1) {
        i++;
        continue; // Skip the second element (Toyota)
    }

    console.log(carros[i]);
    i++;
}

console.warn('Do while loop');

let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (j < carros.length);