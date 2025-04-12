import html from './app.html?raw';

/**
 * @description Renderiza la app de todos
 * @param {String} elementId id del elemento donde se va a renderizar la app
 */
export const App = (elementId) => {
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();
};