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