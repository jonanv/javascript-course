/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */

let deck = [];

const createDeck = () => {
    const types = ["C", "D", "H", "S"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    for (let type of types) {
        for (let value of values) {
            deck.push(value + type);
        }
    }
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

createDeck();