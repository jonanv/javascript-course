// Esta función me permite calcular el valor de la carta
/**
 * @description Esta función me permite calcular el valor de la carta
 * @param {String} card 2D string que representa la carta (ejemplo: "2H", "AS", "10D")
 * @returns {Number} valor de la carta
 * @throws {Error} si la carta no es válida
 * @throws {Error} si la carta no es una cadena de texto
 * @throws {Error} si la carta no tiene el formato correcto
 * @throws {Error} si la carta no tiene el valor correcto
 */
export const valueCard = (card) => {
    if (!card) throw new Error("No hay carta que calcular");
    if (typeof card !== "string") throw new Error("La carta debe ser una cadena de texto");
    if (card.length < 2) throw new Error("La carta no es válida");
    if (card.length > 3) throw new Error("La carta no es válida");

    const value = card.substring(0, card.length - 1);
    return (isNaN(value))
        ? ((value === "A") ? 11 : 10)
        : value * 1;
}