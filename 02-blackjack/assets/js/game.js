/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */

let deck = [];

// Esta función inicializa el deck y lo mezcla
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

// Esta función me permite tomar una carta del deck
const giveCard = () => {
    if (deck.length === 0) {
        throw new Error("No hay cartas en el deck");
    }
    let card = deck.pop();

    console.log(deck);
    console.log(card);
    return card;
}

// giveCard();

const valueCard = (card) => {
    const value = card.substring(0, card.length - 1);
    const points = (isNaN(value)) 
                    ? ((value === "A") ? 11 : 10) 
                    : value * 1;
    // console.log(points);
    return points;
}

let value = valueCard(giveCard());
console.log({ value });