import { localhostToUserMapper } from "../mappers/localhost-to-user.mapper";
import { userToLocalhostMapper } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";

/**
 * @description Guarda un nuevo usuario en la API
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {
    const user = new User(userLike);

    if (!user.firstName || !user.lastName)
        throw new Error('El nombre y apellido son obligatorios');
    
    const userToSave = userToLocalhostMapper(user);
    let userUpdated;

    if (user.id)
        userUpdated = await updateUser(userToSave);
    else 
        userUpdated = await createUser(userToSave);

    return localhostToUserMapper(userUpdated);
}

/**
 * @description Crea un nuevo usuario en la API
 * @param {Like<User>} user 
 * @return {Promise<User>} 
 */
export const createUser = async(user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const newUser = await response.json();
    // console.log({ newUser });
    return newUser;
}

/**
 * @description Actualiza un nuevo usuario en la API
 * @param {Like<User>} user 
 * @return {Promise<User>} 
 */
export const updateUser = async(user) => {
    const url = `${ import.meta.env.VITE_BASE_URL }/users/${user.id}`;
    const response = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const updateUser = await response.json();
    // console.log({ updateUser });
    return updateUser;
}