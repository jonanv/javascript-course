/**
* 2C = Two of Clubs (Tréboles)
* 2D = Two of Diamonds (Diamantes)
* 2H = Two of Hearts (Corazones)
* 2S = Two of Spades (Picas)
*/

(() => {
    'use strict';

    let deck = [];
    let playersPoints = [];

    // Referencias HTML
    const btnNewGame = document.querySelector("#btnNewGame"),
        btnGiveCard = document.querySelector("#btnGiveCard"),
        btnStop = document.querySelector("#btnStop");


    const playerCards = document.querySelector("#player-cards"),
        computerCards = document.querySelector("#computer-cards"),
        smalls = document.querySelectorAll("small");

    // Inicializa el juego
    const initGame = (numPlayers = 2) => {
        deck = createDeck();

        for (let i = 0; i < numPlayers; i++) {
            playersPoints.push(0);
        }
    }

    // Esta función inicializa el deck y lo mezcla
    const createDeck = () => {
        deck = [];
        const types = ["C", "D", "H", "S"],
            values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        for (let type of types) {
            for (let value of values) {
                deck.push(value + type);
            }
        }
        return _.shuffle(deck);;
    }

    // Esta función me permite tomar una carta del deck
    const giveCard = () => {
        if (deck.length === 0) {
            throw new Error("No hay cartas en el deck");
        }
        return deck.pop();
    }

    // Esta función me permite calcular el valor de la carta
    const valueCard = (card) => {
        const value = card.substring(0, card.length - 1);
        return points = (isNaN(value))
            ? ((value === "A") ? 11 : 10)
            : value * 1;
    }

    const accumulatePoints = () => {

    }

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

        // playerCards.innerHTML = `<img class="custom-card" src="assets/imgs/cartas/${ card }.png">`;
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
        initGame();

        playerPoints = 0;
        computerPoints = 0;

        smalls[0].innerText = 0;
        smalls[1].innerText = 0;

        playerCards.innerHTML = "";
        computerCards.innerHTML = "";

        btnGiveCard.disabled = false;
        btnStop.disabled = false;
    });
})();