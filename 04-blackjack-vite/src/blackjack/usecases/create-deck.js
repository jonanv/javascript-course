import _ from 'underscore';

// export const myName = "Fernando";

/**
 * @description Crea un deck de cartas y lo mezcla
 * @param {Array<String>} types tipos de cartas (Tréboles, Diamantes, Corazones, Picas) ['C', 'D', 'H', 'S']
 * @param {Array<String>} values valores de las cartas ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
 * @returns {Array<String>} deck de cartas mezclado
 * @throws {Error} si no se pasan tipos o valores de cartas
 */
export const createDeck = (types, values) => {
    if (!types || types.length === 0) throw new Error("Tipos de cartas son obligatorios");
    if (!values || values.length === 0) throw new Error("Valores de cartas son obligatorios");  
    
    let deck = [];

    for (let type of types) {
        for (let value of values) {
            deck.push(value + type);
        }
    }
    return _.shuffle(deck);
}

// export default createDeck;