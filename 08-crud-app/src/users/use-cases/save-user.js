import { User } from "../models/user";

/**
 * @description Guarda un nuevo usuario en la API
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {
    const user = new User(userLike);

    // TODO: Aqui falta un mapper

    if (user.id) {
        throw new Error('No implementado');
        return;
    }

    const updatedUser = await createUser(user);
    return updatedUser;
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
    console.log({ newUser });
    return newUser;
}