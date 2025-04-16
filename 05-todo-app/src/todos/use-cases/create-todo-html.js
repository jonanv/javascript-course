/**
 * @description Crea un elemento HTML para una tarea
 * @param {Todo} todo Tarea a renderizar
 * @return {HTMLElement} Elemento HTML de la tarea
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('Todo is required');

    const li = document.createElement('li');
    li.setAttribute('data-id', todo.id);
    li.className = 'todo-item';
    li.innerHTML = `
        <span>${todo.description}</span>
        <button class="delete-btn">X</button>
    `;
    return li;
}