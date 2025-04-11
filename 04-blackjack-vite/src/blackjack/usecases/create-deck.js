import _ from 'underscore';

// export const myName = "Fernando";

// Esta función inicializa el deck y lo mezcla
export const createDeck = () => {
    let deck = [];
    const types = ["C", "D", "H", "S"],
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (let type of types) {
        for (let value of values) {
            deck.push(value + type);
        }
    }
    return _.shuffle(deck);
}

export default createDeck;