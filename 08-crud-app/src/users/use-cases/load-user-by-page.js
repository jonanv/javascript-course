/**
 * @description Carga los usuarios de una página específica
 * @param {Number} page Numero de página a cargar 
 */
export const loadUsersByPage = async(page = 1) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}