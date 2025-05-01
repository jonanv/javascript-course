import { localhostToUserMapper } from "../mappers/localhost-to-user.mapper";

/**
 * @description Carga los usuarios de una página específica
 * @param {Number} page Numero de página a cargar 
 * @return {Promise<User[]>} Lista de usuarios
 */
export const loadUsersByPage = async(page = 1) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users?_page=${ page }`;
    const response = await fetch(url);
    const data = await response.json();

    const users = data.data.map(localhostToUserMapper);
    
    return users;
}