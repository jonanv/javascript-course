import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIds = {
    todoList: '.todo-list',
}

/**
 * @description Renderiza la app de todos
 * @param {String} elementId id del elemento donde se va a renderizar la app
 */
export const App = (elementId) => {
    if (!elementId) throw new Error('ElementId is required');
    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(elementIds.todoList, todos);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
};