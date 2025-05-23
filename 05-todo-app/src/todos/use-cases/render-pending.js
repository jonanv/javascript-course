import todoStore, { filters } from "../../store/todo.store";

let element;

/**
 * @description Renderiza el número de tareas pendientes en el HTML
 * @param {String} elementId id del elemento donde se va a renderizar el número de tareas pendientes
 */
export const renderPending = (elementId) => {
    if (!element) element = document.querySelector(elementId);
    if (!element) throw new Error(`Element ${ elementId } not found`);

    element.innerHTML = todoStore.getTodos(filters.pending).length;
}