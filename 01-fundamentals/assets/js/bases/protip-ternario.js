const elMayor = (a, b) => {
    return (a > b) ? a : b;
}

const elMayor2 = (a, b) => (a > b) ? a : b;

const tieneMembresia = (miembro) => miembro ? '2 dolares' : '10 dolares';

console.log({ elMayor: elMayor(3, 7) }); // 7
console.log({ elMayor: elMayor2(3, 7) }); // 7

console.log({ tieneMembresia: tieneMembresia(true) }); // 2 dolares

const amigo = false;
const amigosArr = [
    'Peter', 
    'Tony',
    'Dr. Strange', 
    (() => 'Nick Fury')(),
    amigo ? 'Thor' : 'Loki',
    elMayor(10, 15)
];

console.log({ amigosArr }); // ['Peter', 'Tony', 'Dr. Strange', 'Thor']

const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
            nota >= 90 ? 'A' :
            nota >= 85 ? 'B+' :
            nota >= 80 ? 'B' :
            nota >= 75 ? 'C+' :
            nota >= 70 ? 'C' :
            nota >= 65 ? 'D+' :
            nota >= 60 ? 'D' : 'F'; 

console.log({ nota, grado }); // B+