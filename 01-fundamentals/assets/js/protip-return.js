// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido
//     };
// }

// Version 2: Usando la sintaxis de función flecha y el retorno implícito
// La función crearPersona toma dos argumentos: nombre y apellido
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Juan', 'Pérez');
console.log(persona); // { nombre: 'Juan', apellido: 'Pérez' }


function imprimeAegumentos() {
    console.log(arguments);
}

imprimeAegumentos(10, true, false, 'Juan', 'Pérez', { nombre: 'Juan' });

const imprimeAegumentos2 = (...arguments) => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    return arguments;
}

// const argumentos = imprimeAegumentos2(10, true, false, 'Juan', 'Pérez', { nombre: 'Juan' });
// console.log({argumentos});

// Desestructuración de argumentos
// La función imprimeAegumentos2 toma varios argumentos y los desestructura en variables individuales
// const [edad, casado, vivo, nombre, apellido, nombreCompleto] = imprimeAegumentos2(10, true, false, 'Juan', 'Pérez', { nombre: 'Juan' });
// console.log({edad, casado, vivo, nombre, apellido, nombreCompleto});

// const { apellido } = crearPersona('Juan', 'Pérez');
// console.log({apellido});

const { apellido: nuevoApellido } = crearPersona('Juan', 'Pérez');
console.log({nuevoApellido});


const tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: true,
    // edad: 45,
    coods: {
        lat: 34.0345,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark II', 'Mark III', 'Mark IV']
}

// Desestructuración de objetos
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 16, coods, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ coods });
    console.log({ trajes });
}

imprimePropiedades(tony);

