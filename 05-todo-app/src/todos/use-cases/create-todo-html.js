/**
 * @description Crea un elemento HTML para una tarea
 * @param {Todo} todo Tarea a renderizar
 * @return {HTMLElement} Elemento HTML de la tarea
 */
export const createTodoHtml = (todo) => {
    if (!todo) throw new Error('Todo is required');

    const { id, description, done, createAt } = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
            <label>${ description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.setAttribute('data-id', id);
    liElement.innerHTML = html;
    return liElement;
}