/**
 * Días de la semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 */

// Entrar a un sitio web, para consultar si esta abierto hoy...

const dia = 0; // 0 = domingo, 1 = lunes, 2 = martes, 3 = miércoles, 4 = jueves, 5 = viernes, 6 = sábado
const horaActual = 10; // 0 - 23 horas

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hoy a las XXX

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) { // Incluye el 0 y el 6
//     console.log('Fin de semana');
//     horaApertura = 9;
// } else {
//     console.log('Día de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy a las ${horaApertura}`;
// }

horaApertura = ([0, 6].includes(dia)) ? 9 : 11; // Operador ternario
mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy a las ${ horaApertura }`;

console.log({horaApertura, mensaje});
