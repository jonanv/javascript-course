const apiURL = 'https://api.breakingbadquotes.xyz/v1/quotes';

/**
 * @description Renderiza la aplicación de Breaking Bad
 * @param {HTMLDivElement} element Elemento HTML donde se va a renderizar la aplicación
 */
export const BreakingBadApp = async(element) => {

    const title = document.querySelector('#app-title');
    title.innerHTML = 'Breakingbad App';

    element.innerHTML = 'Loading...';

    // const quote = await fetchQuote();

    const quoteElement = document.createElement('blockquote');
    const authorElement = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerHTML = 'Next Quote';

    const renderQuote = ({ quote, author }) => {
        quoteElement.innerHTML = quote;
        authorElement.innerHTML = author;
        element.replaceChildren(quoteElement, authorElement, nextQuoteButton);
    }

    nextQuoteButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    });

    fetchQuote()
        .then(renderQuote);

};

/**
 * @description Función que obtiene una frase de la API de Breaking Bad
 * @return {Promise} Promise que se resuelve cuando se obtiene la respuesta de la API
 */
const fetchQuote = async() => {
    const res = await fetch(apiURL);
    const data = await res.json();

    console.log(data[0]);
    return data[0];
}