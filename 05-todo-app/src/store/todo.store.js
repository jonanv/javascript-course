import { Todo } from "../todos/models/todo.model";

/**
 * @description Filtros de la aplicación
 */
const filters = {
    all: 'all',
    completed: 'completed',
    pending: 'pending'
}

/**
 * @description Estado de la aplicación
 */
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infirmo'),
        new Todo('Piedra del tiempo')
    ],
    filter: filters.all,
}

/**
 * @description Inicializa el store
 */
const initStore = () => {
    console.log(state);
    console.log('InitStore 🗽');
}

/**
 * @description Devuelve la lista de tareas
 * @param {String} filter Filtro a aplicar
 * @return {Array<Todo>} Lista de tareas
 */
const getTodos = (filter = filters.all) => {
    switch (filter) {
        case filters.all:
            return [...state.todos];
        case filters.completed:
            return state.todos.filter(todo => todo.done);
        case filters.pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Filtro ${filter} no es válido`);
    }
}

/**
 * @description Carga el store desde el localStorage
 */
const loadStore = () => {
    throw new Error('Not implemented!');
}

/**
 * @description Crea una nueva tarea
 * @param {String} description Descripción de la tarea
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    if (state.todos.some(todo => todo.description === description)) throw new Error(`Todo ${description} already exists`);

    const newTodo = new Todo(description);
    state.todos.push(newTodo);
    console.log(state.todos);
    return newTodo;
}

/**
 * @description Marca o desmarca una tarea como completada
 * @param {String} id Id de la tarea a marcar/desmarcar
 */
const toggleTodo = (todoId) => {
    throw new Error('Not implemented!');
}

/**
 * @description Elimina una tarea
 * @param {String} todoId Id de la tarea a eliminar
 */
const deleteTodo = (todoId) => {
    if (!todoId) throw new Error('Id is required');
    const index = state.todos.findIndex(todo => todo.id === todoId);
    if (index === -1) throw new Error(`Todo with id ${todoId} not found`);

    state.todos.splice(index, 1);
    console.log(state.todos);
    return state.todos;
}

/**
 * @description Elimina todas las tareas completadas
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    console.log(state.todos);
    return state.todos;
}

/**
 * @description Cambia el filtro de la aplicación
 * @param {String} filter Filtro a aplicar
 */
const setFilter = (filter = filters.all) => {
    const validFilters = Object.values(filters);
    if (!validFilters.includes(filter)) throw new Error(`Filter ${filter} is not valid`);

    state.filter = filter;
    console.log(state.filter);
    return state.filter;
}

/**
 * @description Devuelve el filtro actual
 */
const getCurrentFilter = () => {
    throw new Error('Not implemented!');
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}