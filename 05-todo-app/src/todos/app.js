import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases';

const elementIds = {
    todoList: '.todo-list',
    newTodoInput: '#new-todo-input',
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

    // Referencias HTML
    const newTodoInput = document.querySelector(elementIds.newTodoInput);
    const todoList = document.querySelector(elementIds.todoList);

    // Eventos
    newTodoInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter' && event.target.value.trim()) {
            todoStore.addTodo(event.target.value);
            event.target.value = '';
            displayTodos();
        }
        if (event.key === 'Escape') {
            event.target.value = '';
        }
    });

    todoList.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        if (!element) return;
        const todoId = element.getAttribute('data-id');
        todoStore.toggleTodo(todoId);
        displayTodos();
    });

    todoList.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroyElement) return;
        const todoId = element.getAttribute('data-id');
        todoStore.deleteTodo(todoId);
        displayTodos();
    });

};