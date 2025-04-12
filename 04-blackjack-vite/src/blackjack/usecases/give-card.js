/**
 * @description Toma una carta del deck y la elimina
 * @param {Array<String>} deck deck de cartas
 * @returns {String} carta
 * @throws {Error} si no hay cartas en el deck
 */
export const giveCard = (deck) => {
    if (!deck || deck.length === 0) throw new Error("No hay cartas en el deck");
    
    return deck.pop();
}