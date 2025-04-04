const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o negación');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

console.log(!regresaTrue()); // false
console.log(!regresaFalse()); // true

console.warn('And o conjunción');
// Solo regresa true si ambos son true
console.log(true && true); // true
console.log(true && false); // false

console.log('===========');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.log('==== && =====');
regresaFalse() && regresaTrue(); // Regresa false y no ejecuta la segunda función

console.warn('Or o disyunción');
// Regresa true si al menos uno es true
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(regresaTrue() || regresaFalse()); // true

regresaTrue() || regresaFalse(); // Regresa true y no ejecuta la segunda función



console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

let a1 = false && 'Hola mundo' && 123; // false
let a2 = 'Hola' && 'Mundo'; // 'Mundo'
let a3 = soyFalse || 'Ya no soy falso'; // 'Ya no soy falso'
let a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso de nuevo'; // 'Ya no soy falso de nuevo'
let a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; // Regresa true y no ejecuta la segunda función


console.log({a1, a2, a3, a4, a5});