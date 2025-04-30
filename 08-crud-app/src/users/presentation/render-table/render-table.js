import './render-table.css';
import userStore from '../../store/user-store';

let table;

/**
 * @description Renderiza una tabla con los datos de los usuarios
 * @param {HTMLDivElement} element Elemento HTML donde se renderiza la tabla
 */
export const renderTable = (element) => {
    const users = userStore.getUsers();

    if (!table) {
        table = createTable();
        element.append(table);
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
                    <a href="#/" data-id=${ id }>Select</a>
                    |
                    <a href="#/" data-id=${ id }>Delete</a>
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