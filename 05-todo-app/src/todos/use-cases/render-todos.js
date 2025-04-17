import { Todo } from '../models/todo.model.js';
import { createTodoHtml } from './';

let ulElement;

/**
 * @description Renderiza una lista de tareas en el DOM
 * @param {String} elementId id del elemento donde se va a renderizar la lista de tareas
 * @param {Array<Todo>} todos Lista de tareas a renderizar
 */
export const renderTodos = (elementId, todos = []) => {
    if (!ulElement) {
        ulElement = document.querySelector(elementId);
    }
    if (!ulElement) throw new Error(`Element ${elementId} not found`);

    ulElement.innerHTML = ''; // Limpiar la lista antes de renderizar
    todos.forEach(todo => {
        const todoHtml = createTodoHtml(todo);
        ulElement.append(todoHtml);
    });
}