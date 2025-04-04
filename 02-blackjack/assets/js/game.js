/**
 * 2C = Two of Clubs (Tréboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Picas)
 */

let deck = [];
let playerPoints = 0;
let computerPoints = 0;

// Referencias HTML
const btnNewGame = document.querySelector("#btnNewGame");
const btnGiveCard = document.querySelector("#btnGiveCard");
const btnStop = document.querySelector("#btnStop");

const playerPointsHTML = document.querySelectorAll("small");

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

    // console.log(deck);
    // console.log(card);
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

// valueCard(giveCard());

// Eventos
btnGiveCard.addEventListener("click", () => {
    const card = giveCard();
    // console.log(card);
    const points = valueCard(card);
    playerPoints += points;
    // console.log(playerPoints);

    playerPointsHTML[0].innerText = playerPoints;

    if (playerPoints > 21) {
        console.warn("Perdiste");
        btnGiveCard.disabled = true;
        btnStop.disabled = true;
    } else if (playerPoints === 21) {
        console.warn("Ganaste");
        btnGiveCard.disabled = true;
        btnStop.disabled = true;
    }
});

