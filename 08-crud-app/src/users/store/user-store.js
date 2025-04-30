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
    throw new Error('Not implemented yet');
}

const onUserChanged = () => {
    throw new Error('Not implemented yet');
}

const reloadPage = async() => {
    throw new Error('Not implemented yet');
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