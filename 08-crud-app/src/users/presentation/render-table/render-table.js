import './render-table.css';
import userStore from '../../store/user-store';
import { showModal } from '../render-modal/render-modal';

let table;

/**
 * @description Listener para el evento de click en la tabla
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