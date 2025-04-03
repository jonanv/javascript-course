let a = 5;

if (a >= 10) {
    console.log("a es mayor o igual que 10");
} else {
    console.log("a es menor que 10");
}

console.log('Fin de programa');


let hoy = new Date();
let dia = hoy.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sabado
console.log({dia});


dia = 0; // Asignación de valor a la variable dia
dia == 0 // Comparación de igualdad sin importar el tipo de dato
dia === 0 // Comparación de igualdad estricta, considerando el tipo de dato

if (dia === 0) {
    console.log("Hoy es domingo");
} else {
    console.log("Hoy no es domingo");
}