class Person {
    // 'use strict'; // Modo estricto para evitar errores comunes ya viene activado por defecto

    // Propiedades estáticas
    static _count = 0;
    static get count() {
        return Person._count + ' instancias';
    }

    static message() {
        console.log(this.name); // undefined
        console.log('Hola mundo desde un método estático');
    }

    // Propiedades
    name = '';
    code = '';
    sentence = '';
    food = '';

    // Constructor
    constructor(name = 'Sin nombre', code = 'Sin código', sentence = 'Sin frase') {
        this.name = name;
        this.code = code;
        this.sentence = sentence;

        Person._count++;
    }

    // Setters
    set setFood(food) {
        this.food = food;
    }

    // Getters
    get getFood() {
        return this.food.toUpperCase(); // Devuelve la comida en mayúsculas
    }

    // Métodos
    whoAmI() {
        console.log(`Soy ${ this.name } y mi identidad es ${ this.code }`);
    }

    mySentence() {
    console.log(`${ this.code } dice: ${ this.sentence }`);
    }
}

class Hero extends Person {
    // Propiedades
    clan = '';

    // Constructor
    constructor(name, code, sentence, clan) {
        super(name, code, sentence); // Llama al constructor de la clase padre (Person)
        this.clan = clan;
    }

    // Métodos
    whoAmI() {
        console.log(`Soy ${ this.name } y mi identidad es ${ this.code } del clan ${ this.clan }`);
        super.whoAmI(); // Llama al método whoAmI de la clase padre (Person)
    }
}

const spiderman = new Hero('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman', 'Avengers');
console.log(spiderman);

spiderman.whoAmI();