/**
 * @description Crea un elemento HTML para una tarea
 * @param {Todo} todo Tarea a renderizar
 * @return {HTMLElement} Elemento HTML de la tarea
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('Todo is required');

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ todo.done ? 'checked' : '' }>
            <label>${ todo.description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.setAttribute('data-id', todo.id);
    liElement.innerHTML = html;
    return liElement;
}