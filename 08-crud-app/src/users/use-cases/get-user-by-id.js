import { User } from "../models/user";
import { localhostToUserMapper } from "../mappers/localhost-to-user.mapper";

/**
 * @description Obtiene un usuario por su id
 * @param {String | Number} id Id del usuario a buscar
 * @return {Promise<User>} Usuario
 */
export const getUserById = async(id) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const response = await fetch(url);
    const data = await response.json();

    const user = localhostToUserMapper(data);
    return user;
}