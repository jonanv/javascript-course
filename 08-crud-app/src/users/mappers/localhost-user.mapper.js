import { User } from "../models/user"

/**
 * @description Mapea el objeto de usuario a la clase User
 * @param {Object<User>} localhostUser Objeto de usuario
 * @returns {User} Objeto de usuario mapeado a la clase User
 */
export const localhostUserMapper = (localhostUser) => {

    const {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localhostUser;

    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });

}