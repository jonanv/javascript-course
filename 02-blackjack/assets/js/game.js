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


    const divPlayersCards = document.querySelectorAll(".divCards"),
        smalls = document.querySelectorAll("small");

    // Inicializa el juego
    const initGame = (numPlayers = 2) => {
        playersPoints = [];
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
        return (isNaN(value))
            ? ((value === "A") ? 11 : 10)
            : value * 1;
    }

    // Esta función me permite acumular los puntos de los jugadores
    // Turno: 0 = jugador, 1 = computadora
    const accumulatePoints = (card, turn) => {
        playersPoints[turn] += valueCard(card);
        smalls[turn].innerText = playersPoints[turn];
        return playersPoints[turn];
    }

    // Esta función me permite crear la imagen de la carta
    const createCardImg = (card, turn) => {
        // playerCards.innerHTML = `<img class="custom-card" src="assets/imgs/cartas/${ card }.png">`;
        const imgCard = document.createElement("img");
        imgCard.src = `assets/imgs/cartas/${ card }.png`;
        imgCard.classList.add("custom-card");
        divPlayersCards[turn].append(imgCard);
    }

    // Turno de la computadora
    const computerTurn = (minPoints) => {
        let computerPoints = 0;
        do {
            const card = giveCard();
            computerPoints = accumulatePoints(card, playersPoints.length - 1);
            createCardImg(card, playersPoints.length - 1);
        } while ((computerPoints < minPoints) && (minPoints <= 21));
    }

    // Eventos
    btnGiveCard.addEventListener("click", () => {
        const card = giveCard();
        const playerPoints = accumulatePoints(card, 0);
        createCardImg(card, 0);

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

        // smalls[0].innerText = 0;
        // smalls[1].innerText = 0;

        // playerCards.innerHTML = "";
        // computerCards.innerHTML = "";

        // btnGiveCard.disabled = false;
        // btnStop.disabled = false;
    });
})();