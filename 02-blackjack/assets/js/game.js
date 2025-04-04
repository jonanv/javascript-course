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

const smalls = document.querySelectorAll("small");

const playerCards = document.querySelector("#player-cards");
const computerCards = document.querySelector("#computer-cards");

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

// Turno de la computadora
const computerTurn = (minPoints) => {
    do {
        const card = giveCard();
        computerPoints += valueCard(card);

        smalls[1].innerText = computerPoints;

        const imgCard = document.createElement("img");
        imgCard.src = `assets/imgs/cartas/${card}.png`;
        imgCard.classList.add("custom-card");
        computerCards.append(imgCard);

        if (minPoints > 21) {
            break;
        }

    } while ((computerPoints < minPoints) && (minPoints <= 21));
    // console.log(computerPoints);
}

// Eventos
btnGiveCard.addEventListener("click", () => {
    const card = giveCard();
    playerPoints += valueCard(card);

    smalls[0].innerText = playerPoints;

    // playerCards.innerHTML = `<img class="custom-card" src="assets/imgs/cartas/${card}.png">`;
    const imgCard = document.createElement("img");
    imgCard.src = `assets/imgs/cartas/${card}.png`;
    imgCard.classList.add("custom-card");
    playerCards.append(imgCard);

    if (playerPoints > 21) {
        console.warn("Perdiste");
        btnGiveCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints);
    } else if (playerPoints === 21) {
        console.warn("Ganaste");
        btnGiveCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(playerPoints);
    }
});

btnStop.addEventListener("click", () => {
    btnGiveCard.disabled = true;
    btnStop.disabled = true;

    computerTurn(playerPoints);

    if (computerPoints > 21) {
        console.warn("Ganaste");
    } else if (computerPoints === playerPoints) {
        console.warn("Empate");
    } else if (computerPoints > playerPoints) {
        console.warn("Perdiste");
    } else {
        console.warn("Ganaste");
    }
});

btnNewGame.addEventListener("click", () => {
    console.clear();
    deck = [];
    deck = createDeck();
    playerPoints = 0;
    computerPoints = 0;

    smalls[0].innerText = 0;
    smalls[1].innerText = 0;

    playerCards.innerHTML = "";
    computerCards.innerHTML = "";

    btnGiveCard.disabled = false;
    btnStop.disabled = false;
});