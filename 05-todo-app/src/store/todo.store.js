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
    throw new Error('Not implemented!');
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
    throw new Error('Not implemented!');
}

/**
 * @description Elimina todas las tareas completadas
 */
const deleteCompleted = () => {
    throw new Error('Not implemented!');
}

/**
 * @description Cambia el filtro de la aplicación
 * @param {String} filter Filtro a aplicar
 */
const setFilter = (filter = filters.all) => {
    throw new Error('Not implemented!');
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