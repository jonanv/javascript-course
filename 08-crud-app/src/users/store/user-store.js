const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = () => {
    throw new Error('Not implemented yet');
}

const loadPreviousPage = () => {
    throw new Error('Not implemented yet');
}

const onUserChanged = () => {
    throw new Error('Not implemented yet');
}

const reloadPage = () => {
    throw new Error('Not implemented yet');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage,
}