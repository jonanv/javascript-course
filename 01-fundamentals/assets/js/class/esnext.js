class Rectangulo {
    // Propiedades
    #area = 0; // Propiedad privada

    // Constructor
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    }

    #recalcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 5);
// rectangulo.#area = 100; // Esto no funcionará porque area es una propiedad privada
// rectangulo.#recalcularArea(); // Esto no funcionará porque recalcularArea es un método privado
console.log(rectangulo);