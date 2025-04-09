const fher = {
    name: "Fernando",
    age: 30,
    print() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.age }`);
    }
}

const pedro = {
    name: "Pedro",
    age: 25,
    print() {
        console.log(`Nombre: ${ this.name } - edad: ${ this.age }`);
    }
}

// fher.print();
// pedro.print();

// Forma antigua de crear objetos en javascript
// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.print = function() {
//         console.log(`Nombre: ${ this.name } - edad: ${ this.age }`);
//     }
// }

// const maria = new Person("Maria", 22);
// console.log(maria);
// maria.print();