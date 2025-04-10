class Person {

    static constructorByObject({name, lastname, country} = object) {
        return new Person(name, lastname, country);
    }
    
    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    // Javascript no permite tener dos constructores en una clase, pero se puede simular
    // constructor({name, lastname, country} = object) {
    //     this.name = name;
    //     this.lastname = lastname;
    //     this.country = country;
    // }

    getInfo() {
        console.log(`info: ${this.name}, ${this.lastname}, ${this.country}`);
    }
}

const name1 = 'Melissa',
        lastname1 = 'Smith',
        country1 = 'USA';

const fher = {
    name: 'Fernando',
    lastname: 'Herrera',
    country: 'Costa Rica'
}

const person1 = new Person(name1, lastname1, country1);
const person2 = Person.constructorByObject(fher);

person1.getInfo();
person2.getInfo();