import { Todo } from '../models/todo.model.js';
import { createTodoHtml } from './';

/**
 * @description Renderiza una lista de tareas en el DOM
 * @param {String} elementId id del elemento donde se va a renderizar la lista de tareas
 * @param {Array<Todo>} todos Lista de tareas a renderizar
 */
export const renderTodos = (elementId, todos = []) => {
    if (!elementId) throw new Error('ElementId is required');
    if (!Array.isArray(todos)) throw new Error('Todos must be an array');
    if (todos.length === 0) {
        document.querySelector(elementId).innerHTML = `<li class="no-todo">No hay tareas pendientes</li>`;
        return;
    }

    const ul = document.querySelector(elementId);
    ul.innerHTML = '';
    todos.forEach(todo => {
        const todoHtml = createTodoHtml(todo);
        ul.append(todoHtml);
    });
}