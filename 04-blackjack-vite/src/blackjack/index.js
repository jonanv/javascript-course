// import { createDeck as createNewDeck } from './usecases/create-deck.js';
// import createDeck from './usecases/create-deck.js';
// import createDeck, { myName } from './usecases/create-deck.js';

import { createDeck, giveCard, valueCard } from './usecases';

/**
* 2C = Two of Clubs (Tréboles)
* 2D = Two of Diamonds (Diamantes)
* 2H = Two of Hearts (Corazones)
* 2S = Two of Spades (Picas)
*/

const myModule = (() => {
    'use strict';

    let deck = [];
    const types = ["C", "D", "H", "S"],
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let playersPoints = [];

    // Referencias HTML
    const btnNewGame = document.querySelector("#btnNewGame"),
        btnGiveCard = document.querySelector("#btnGiveCard"),
        btnStop = document.querySelector("#btnStop");


    const divPlayersCards = document.querySelectorAll(".divCards"),
        pointsHTML = document.querySelectorAll("small");

    // Inicializa el juego
    const initGame = (numPlayers = 2) => {
        playersPoints = [];
        deck = createDeck(types, values);

        for (let i = 0; i < numPlayers; i++) {
            playersPoints.push(0);
        }

        pointsHTML.forEach(elem => elem.innerText = 0);
        divPlayersCards.forEach(elem => elem.innerHTML = "");

        btnGiveCard.disabled = false;
        btnStop.disabled = false;
    }

    // Esta función me permite acumular los puntos de los jugadores
    // Turno: 0 = jugador, 1 = computadora
    const accumulatePoints = (card, turn) => {
        playersPoints[turn] += valueCard(card);
        pointsHTML[turn].innerText = playersPoints[turn];
        return playersPoints[turn];
    }

    // Esta función me permite crear la imagen de la carta
    const createCardImg = (card, turn) => {
        // playerCards.innerHTML = `<img class="custom-card" src="./assets/imgs/cards/${ card }.png">`;
        const imgCard = document.createElement("img");
        imgCard.src = `./assets/imgs/cards/${card}.png`;
        imgCard.classList.add("custom-card");
        divPlayersCards[turn].append(imgCard);
    }

    const determineWinner = (playersPoints) => {
        const [playerPoints, computerPoints] = playersPoints;

        if (playerPoints === computerPoints) {
            console.warn('Empate');
        } else if (playerPoints > 21) {
            console.warn("Perdiste");
        } else if (computerPoints > 21) {
            console.warn("Ganaste");
        } else if (playerPoints === 21) {
            console.warn("Ganaste");
        } else if (computerPoints === 21) {
            console.warn("Perdiste");
        } else if (playerPoints > computerPoints) {
            console.warn("Ganaste");
        } else if (computerPoints > playerPoints) {
            console.warn("Perdiste");
        }
    }

    // Turno de la computadora
    const computerTurn = (minPoints) => {
        let computerPoints = 0;
        do {
            const card = giveCard(deck);
            computerPoints = accumulatePoints(card, playersPoints.length - 1);
            createCardImg(card, playersPoints.length - 1);
        } while ((computerPoints < minPoints) && (minPoints <= 21));
        determineWinner(playersPoints);
    }

    // EVENTOS
    // Evento para obtener una nueva carta
    btnGiveCard.addEventListener("click", () => {
        const card = giveCard(deck);
        const playerPoints = accumulatePoints(card, 0);
        createCardImg(card, 0);

        if (playerPoints > 21) {
            btnGiveCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);
        } else if (playerPoints === 21) {
            btnGiveCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(playerPoints);
        }
    });

    // Evento para detener el juego
    btnStop.addEventListener("click", () => {
        btnGiveCard.disabled = true;
        btnStop.disabled = true;

        computerTurn(playersPoints[0]);
    });

    // Evento para iniciar un nuevo juego
    btnNewGame.addEventListener("click", () => {
        initGame();
    });

    return {
        newGame: initGame
    };
})();