import { loadUsersByPage } from "../use-cases/load-user-by-page";

const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async() => {
    const users = await loadUsersByPage(state.currentPage + 1);
    if (users.length === 0) return;

    state.currentPage += 1;
    state.users = users;
}

const loadPreviousPage = async() => {
    if (state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);

    state.users = users;
    state.currentPage -= 1;
}

/**
 * @description Renderiza la tabla de usuarios
 * @param {User} updateUser Usuario a guardar
 */
const onUserChanged = (updateUser) => {
    let wasFound = false;

    state.users = state.users.map((user) => {
        if (user.id === updateUser.id) {
            wasFound = true;
            return updateUser;
        }
        return user;
    });

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updateUser);
    }
}

const reloadPage = async() => {
    const users = await loadUsersByPage(state.currentPage);
    if (users.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.users = users;
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    /**
     * @description Devuelve una copia de la lista de usuarios
     * @returns {User[]} Lista de usuarios
     */
    getUsers: () => [...state.users],
    /**
     * @description Devuelve la pagina actual
     * @returns {Number} Pagina actual
     */
    getCurrentPage: () => state.currentPage,
}