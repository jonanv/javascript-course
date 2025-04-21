/**
 * @description Componente que renderiza un mensaje en el HTML
 * @param {HTMLDivElement} element Elemento HTML donde se va a renderizar el componente
 */
export const enviromentsComponent = (element) => {
    console.log(import.meta.env);

    const html = `
        DEV: ${ import.meta.env.DEV } <br>
        API_KEY: ${ import.meta.env.VITE_API_KEY } <br>
        BASE_URL: ${ import.meta.env.VITE_BASE_URL } <br>
    `;

    element.innerHTML = html;
}