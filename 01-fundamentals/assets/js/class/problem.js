const fher = {
    name: "Fernando",
    edad: 30,
    print() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.edad }`);
    }
}

const pedro = {
    name: "Pedro",
    edad: 25,
    print() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.edad }`);
    }
}

// fher.print();
// pedro.print();

// Forma antigua de crear objetos en javascript
function Persona(name, edad) {
    this.name = name;
    this.edad = edad;

    this.print = function() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.edad }`);
    }
}

const maria = new Persona("Maria", 22);
console.log(maria);
maria.print();