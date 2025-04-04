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

// Sin usar if-else o switch
dia = 30;
const diaSemana = {
    0: "Domingo",
    1: "Lunes",
    2: "Martes",
    3: "Miércoles",
    4: "Jueves",
    5: "Viernes",
    6: "Sábado"
};

const diaSemana2 = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado"
];

console.log(diaSemana[dia] || 'Día no definido'); // Miércoles
console.log(diaSemana2[dia] || 'Día no definido'); // Miércoles