const apiURL = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * @description Renderiza la aplicación de Breaking Bad
 * @param {HTMLDivElement} element Elemento HTML donde se va a renderizar la aplicación
 */
export const BreakingBadApp = async(element) => {

    const title = document.querySelector('#app-title');
    title.innerHTML = 'Breakingbad App';

    element.innerHTML = 'Loading...';

    const quote = await fetchQuote();

    element.innerHTML = `
        <h1>${quote[0].quote}</h1>
        <h3>${quote[0].author}</h3>
        <button id="btnQuote">Get another quote</button>
    `;

};

/**
 * @description Función que obtiene una frase de la API de Breaking Bad
 * @return {Promise} Promise que se resuelve cuando se obtiene la respuesta de la API
 */
const fetchQuote = async() => {
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
    return data;
}