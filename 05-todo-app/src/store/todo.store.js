import { Todo } from "../todos/models/todo.model";

const filters = {
    all: 'all',
    completed: 'completed',
    pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infirmo'),
        new Todo('Piedra del tiempo')
    ],
    filter: filters.all,
}

const initStore = () => {
    console.log(state);
    console.log('InitStore 🗽');
}

export default {
    initStore
}