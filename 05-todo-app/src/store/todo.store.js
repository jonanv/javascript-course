import { Todo } from "../todos/models/todo.model";

/**
 * @description Filtros de la aplicación
 */
export const filters = {
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
    loadStore();
    console.log('InitStore 🗽');
}

/**
 * @description Carga el store desde el localStorage
 */
const loadStore = () => {
    if (!localStorage.getItem('state')) return;

    const { todos = [], filter = filters.all } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

/**
 * @description Guarda el store en el localStorage
 */
const saveTodosToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

/**
 * @description Devuelve la lista de tareas filtradas
 * @param {String} filter Filtro a aplicar
 * @return {Array<Todo>} Lista de tareas filtradas
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
 * @description Crea una nueva tarea
 * @param {String} description Descripción de la tarea
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required');
    if (state.todos.some(todo => todo.description === description)) throw new Error(`Todo ${description} already exists`);

    const newTodo = new Todo(description);
    state.todos.push(newTodo);
    
    saveTodosToLocalStorage();
}

/**
 * @description Marca o desmarca una tarea como completada
 * @param {String} id Id de la tarea a marcar/desmarcar
 */
const toggleTodo = (todoId) => {
    if (!todoId) throw new Error('Id is required');
    
    const todo = state.todos.find(todo => todo.id === todoId);
    if (!todo) throw new Error(`Todo with id ${todoId} not found`);

    todo.done = !todo.done;
    
    saveTodosToLocalStorage();
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
    saveTodosToLocalStorage();
}

/**
 * @description Elimina todas las tareas completadas
 */
const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveTodosToLocalStorage();
}

/**
 * @description Cambia el filtro de la aplicación
 * @param {String} filter Filtro a aplicar
 */
const setFilter = (filter = filters.all) => {
    const validFilters = Object.values(filters);
    if (!validFilters.includes(filter)) throw new Error(`Filter ${filter} is not valid`);

    state.filter = filter;

    saveTodosToLocalStorage();
}

/**
 * @description Devuelve el filtro actual
 * @return {String} Filtro actual
 */
const getCurrentFilter = () => {
    return state.filter;
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