
/**
 * @description Renderiza la aplicación de Breaking Bad
 * @param {HTMLDivElement} element Elemento HTML donde se va a renderizar la aplicación
 */
export const BreakingBadApp = (element) => {

    const title = document.querySelector('#app-title');
    title.innerHTML = 'Breakingbad App';

    element.innerHTML = 'Loading...';

};