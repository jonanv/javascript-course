
// Forma moderna de crear objetos en javascript
class Person {
    // 'use strict'; // Modo estricto para evitar errores comunes ya viene activado por defecto
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

const spiderman = new Person('Peter Parker', 'Spiderman', 'Soy tu amigo y vecino Spiderman');
const ironman = new Person('Tony Stark', 'Ironman', 'Yo soy Ironman');

spiderman.whoAmI();
spiderman.mySentence();
spiderman.setFood = 'Pizza'; // Setea la comida
console.log(spiderman.getFood); // Imprime la comida en mayúsculas

// ironman.whoAmI();
// ironman.mySentence();