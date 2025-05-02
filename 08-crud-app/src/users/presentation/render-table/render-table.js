import './render-table.css';
import userStore from '../../store/user-store';
import { showModal } from '../render-modal/render-modal';
import { deleteUserById } from '../../use-cases/delete-user-by-id';

let table;

/**
 * @description Listener para el evento de click (select) en la tabla
 * @param {MouseEvent} event Evento del click
 */
const tableSelectListener = (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;
    
    // const id = element.dataset.id;
    const id = element.getAttribute('data-id');
    showModal(id);
}

/**
 * @description Listener para el evento de click (delete) en la tabla
 * @param {MouseEvent} event Evento del click
 */
const tableDeleteListener = async(event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;
    
    // const id = element.dataset.id;
    const id = element.getAttribute('data-id');
    
    try {
        await deleteUserById(id);
        await userStore.reloadPage();
        document.querySelector('#current-page').innerText = userStore.getCurrentPage();
        renderTable();
    } catch (error) {
        console.log(error);
        alert('No se pudo eliminar el usuario');
    }
}

/**
 * @description Renderiza una tabla con los datos de los usuarios
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza la tabla
 */
export const renderTable = (element) => {
    const users = userStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);

        // Event listener
        table.addEventListener('click', tableSelectListener);
        table.addEventListener('click', tableDeleteListener);

    }

    let tableHTML = '';
    users.forEach(user => {
        const { id, isActive, balance, firstName, lastName } = user;
        tableHTML += `
            <tr>
                <td>${ id }</td>
                <td>${ balance }</td>
                <td>${ firstName }</td>
                <td>${ lastName }</td>
                <td>${ isActive ? 'Active' : 'Inactive' }</td>
                <td>
                    <a href="#/" class="select-user" data-id=${ id }>Select</a>
                    |
                    <a href="#/" class="delete-user" data-id=${ id }>Delete</a>
                </td>
            </tr>`;
    });
    table.querySelector('tbody').innerHTML = tableHTML;
}

/**
 * @description Crea la tabla y la cabecera
 * @return {HTMLTableElement} Tabla creada
 */
const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');

    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Active</th>
            <th>Accions</th>
        </tr>`;

    const tableBody = document.createElement('tbody');
    table.append(tableHeaders, tableBody);
    return table;
}