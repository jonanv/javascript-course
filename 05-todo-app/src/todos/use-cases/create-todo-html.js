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
        <li class="${ todo.done }" data-id="abc">
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>${ todo.description }</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
    `;
    return li;
}