import { User } from "../models/user"

/**
 * @description Mapea la clase User a un objeto de usuario
 * @param {User} user Objeto clase User
 * @return {Like<User>} Clase User mapeado a Objeto de usuario
 */
export const userToLocalhostMapper = (user) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName,
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isActive,
        last_name: lastName,
    };
}