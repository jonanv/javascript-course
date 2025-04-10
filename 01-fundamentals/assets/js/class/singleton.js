class Singleton {
    static instancia = null;
    nombre = '';

    constructor(nombre) {
        // const a = undefined;
        // console.log(a); // undefined
        // console.log(!a); // true
        // console.log(!!a); // false
        
        // !! hace una conversión a booleano y esa conversion la niega, devuelve false para este caso
        if (!!Singleton.instancia) {
            return Singleton.instancia;
        }
        this.nombre = nombre;
        Singleton.instancia = this;
    }

    getNombre() {
        return this.nombre;
    }
}

const singleton1 = new Singleton('Spiderman');
const singleton2 = new Singleton('Ironman');
const singleton3 = new Singleton('Hulk');

console.log(singleton1);
console.log(singleton2);
console.log(singleton3);