
// Forma moderna de crear objetos en javascript
class Person {
    // 'use strict'; // Modo estricto para evitar errores comunes ya viene activado por defecto
    // Propiedades
    name = '';
    age = 0;

    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Métodos
    print() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.age }`);
    }
}

const maria = new Person("Maria", 22);
console.log(maria);
maria.print();